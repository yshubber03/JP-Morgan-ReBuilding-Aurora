import {Carousel} from "react-responsive-carousel";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';


function Gallery() {
    const navigate = useNavigate();

    return (
        <div className="App container-fluid">
            
            {/* Header Section */}
            <header className="text-center py-5 bg-col hero-color text-white">
                <h1 className="display-4 mb-3">
                    Together we repair homes, revitalize communities, and rebuild lives.
                </h1>
                <p className="lead">Join us in making a difference.</p>
            </header>
            
            {/* Gallery Section */}
            <section className="mt-5">
                <h2 className="text-center mb-4">Recent Projects</h2>
                <Carousel autoPlay infiniteLoop={true} showThumbs={false} className="custom-carousel">
        <div>
            <img
                className="gallery-img"
                alt="Volenteer images1"
                src="https://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1678904790447-KUVJ42YVGHQ3FXPNRZ7X/IMG_2457.JPG?format=1000w" />
            <p className="legend">Test1</p>
        </div>
        <div>
            <img
                className="gallery-img"
                alt="Volenteer images2"
                src="https://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1678905511191-DAX5Y83RS1PWDG1LAYQD/ARE+2011+volunteers+outside+home+3.jpg?format=1000w" />

            <p className="legend">Test2</p>
        </div>
        <div>
            <img
                className="gallery-img"
                alt="Volenteer images3"
                src="https://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1678905558994-TXIUEVMO54JK7PHPAJB8/ARE+2011+volunteers.jpg?format=1000w" />
            <p className="legend">Test3</p>
        </div>
    </Carousel>
            </section>
            
            <hr />
            
            {/* Calendar Section */}
            <section className="my-5">
                <h2 className="text-center mb-4">Upcoming Events</h2>
            </section>
            
            {/* Footer Section */}
            <footer className="py-4 hero-color text-white text-center">
                <div id="icons-container" >
                </div>
                <div class="contact-container">
                    <img width="20px" src="https://icons.veryicon.com/png/o/internet--web/flatten-icon/phone-71.png" className="margins"></img>
                    <div className="margins">630-801-9044</div>
                </div>
                <div class="contact-container">
                    <img width="20px" src="https://icons.veryicon.com/png/o/internet--web/billion-square-cloud/mail-214.png" className="margins"></img>
                    <div className="margins">support@rtaurora.org</div>
                </div>
                <div class="contact-container"> Suite 307, 1 E. Benton Street Aurora IL, 60505</div>
                <p>© 2023 by Non-Profit Organization. Proudly created with love and dedication.</p>

            </footer>
        
        </div>
    );
}

export default Gallery;
