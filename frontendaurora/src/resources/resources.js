import React from 'react';
import ResourceCard from './ResourceCard';
import './resources.css';
import carpentryImage from '../images/carpentry.jpg';
import drywallImage from '../images/drywall.jpg';
import electricalImage from '../images/electrical.jpg';
import flooringImage from '../images/flooring.jpg';
import landscapingImage from '../images/landscaping.jpg';
import hvacImage from '../images/hvac.jpg';
import plumbingImage from '../images/plumbing.jpg';
import paintingImage from '../images/painting.jpg';
import { useEffect } from 'react';

const Resources = () => {

    // Sample input array
    const cardDataArray = [
      {
        title: 'Carpentry',
        description: 'Learn how to craft custom furniture, build shelving units, and construct wooden fixtures.',
        imageUrl: carpentryImage,
        links: ['https://www.youtube.com/watch?v=y8W7KbJTg7A','https://www.youtube.com/watch?v=Ls1ayLoDedI&ab_channel=TrainingHandsAcademy', 'https://www.youtube.com/watch?v=7VpzUYln8g4']
      },
      {
        title: 'Drywall/Plaster Work',
        description: 'Master the art of repairing wall cracks, applying smooth plaster finishes, and installing drywall.',
        imageUrl: drywallImage,
        links: ['https://www.youtube.com/watch?v=7VpzUYln8g4', 'https://www.youtube.com/watch?v=LyngzAYIuZs&ab_channel=POUSEaroundtheHOUSE']
      },
      {
        title: 'Electrical',
        description: 'Safely wire lighting fixtures, outlets, and switches while troubleshooting electrical issues.',
        imageUrl: electricalImage,
        links: ['https://www.youtube.com/watch?v=hEDto-bnHKw', 'https://www.youtube.com/watch?v=syaGf_XUMxA&ab_channel=BrettleyBuilt']
      },
      {
        title: 'Flooring',
        description: 'Step-by-step guidance on fixing and restoring damaged or worn-out floors.',
        imageUrl: flooringImage,
        links: ['https://www.youtube.com/watch?v=lP7B9B7WX1E', 'https://www.youtube.com/watch?v=6KEthELQfro&ab_channel=FixThisBuildThat']
      },
      {
        title: 'HVAC',
        description: 'Maintaining, troubleshooting, and repairing heating, ventilation, and air conditioning systems to ensure indoor comfort.',
        imageUrl: hvacImage,
        links: ['https://www.youtube.com/watch?v=lP7B9B7WX1E', 'https://www.youtube.com/watch?v=6KEthELQfro&ab_channel=FixThisBuildThat']
      },
      {
        title: 'Landscaping',
        description: 'Maintaining outdoor spaces, covering everything from planting gardens to lawn care and irrigation techniques.',
        imageUrl: landscapingImage,
        links: ['https://www.youtube.com/watch?v=lP7B9B7WX1E', 'https://www.youtube.com/watch?v=6KEthELQfro&ab_channel=FixThisBuildThat']
      },
      {
        title: 'Painting',
        description: 'Detailed instructions on preparing surfaces, selecting the right paints, and applying techniques to achieve professional-quality finishes.',
        imageUrl: paintingImage,
        links: ['https://www.youtube.com/watch?v=lP7B9B7WX1E', 'https://www.youtube.com/watch?v=6KEthELQfro&ab_channel=FixThisBuildThat']
      },
      {
        title: 'Plumbing',
        description: 'Addressing common plumbing issues, from fixing leaks and unclogging drains to installing fixtures.',
        imageUrl: plumbingImage,
        links: ['https://www.youtube.com/watch?v=lP7B9B7WX1E', 'https://www.youtube.com/watch?v=6KEthELQfro&ab_channel=FixThisBuildThat']
      },
    ];

    function extractVideoID(url) {
      const regex = /[?&]v=([^?&]+)/;
      const match = url.match(regex);
      if (match && match[1]) {
        return match[1];
      } else {
        return null;
      }
    }

    useEffect(() => {
      var seebuttons = Array.from(document.getElementsByClassName('video-button'))
      seebuttons.map((button, idx) => (
        button.addEventListener('click', () => {
          var vidContainer = document.querySelector('.vid-container');
          vidContainer.innerHTML = ""
          vidContainer.display = 'flex'
          cardDataArray[idx].links.forEach((link) => {
            var videoid = extractVideoID(link)
            var thumbnailurl = 'https://img.youtube.com/vi/' + videoid + '/0.jpg'
            const trialcard = `
            <div class="card">
              <a href=${link} target="_blank">
                <img class="thumbnail" src=${thumbnailurl} alt="Video Thumbnail">
              </a>
              <div class="card-content">
                  <h2>Video Title</h2>
                  <p>Description of the video goes here.</p>
              </div>
            </div>`
            const tempContainer = document.createElement('div');
            tempContainer.className = 'temp'
            tempContainer.innerHTML = trialcard;
            vidContainer.appendChild(tempContainer)
          })
        })
      ))
    })
  
    return (
      <div id="Resources">
        <h1 style={{ padding: '12px'}}>Volunteer Resources</h1>
        <div className="card-container">
        {cardDataArray.map((data, index) => (
            <ResourceCard key={index} data={data} />
        ))}
        </div>
        <div className="vid-container"></div>
      </div>
      
    );
  };

export default Resources;