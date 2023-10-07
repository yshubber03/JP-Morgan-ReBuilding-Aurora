import {useState, useEffect} from 'react';
import FormList from './FormList';
import {db} from './firebase'
import { onValue, set, ref } from 'firebase/database'

function User(props) {
    const cardDataArray = [
        {
          title: 'Carpentry',
          description: 'Learn how to craft custom furniture, build shelving units, and construct wooden fixtures.',
          links: ['https://www.youtube.com/watch?v=y8W7KbJTg7A','https://www.youtube.com/watch?v=Ls1ayLoDedI&ab_channel=TrainingHandsAcademy', 'https://www.youtube.com/watch?v=7VpzUYln8g4']
        },
        {
          title: 'Drywall/Plaster Work',
          description: 'Master the art of repairing wall cracks, applying smooth plaster finishes, and installing drywall.',
          links: ['https://www.youtube.com/watch?v=7VpzUYln8g4', 'https://www.youtube.com/watch?v=LyngzAYIuZs&ab_channel=POUSEaroundtheHOUSE']
        },
        {
          title: 'Electrical',
          description: 'Safely wire lighting fixtures, outlets, and switches while troubleshooting electrical issues.',
          links: ['https://www.youtube.com/watch?v=hEDto-bnHKw', 'https://www.youtube.com/watch?v=syaGf_XUMxA&ab_channel=BrettleyBuilt']
        },
        {
          title: 'Flooring',
          description: 'Safely wire lighting fixtures, outlets, and switches while troubleshooting electrical issues.',
          links: ['https://www.youtube.com/watch?v=lP7B9B7WX1E', 'https://www.youtube.com/watch?v=6KEthELQfro&ab_channel=FixThisBuildThat']
        },
      ];
    // const [videoLinkList, setVideoLinkList] = useState([]);
    const [myEvent,setMyEvent] = useState([{
        count: 1,
        name: "Re-painting Mr. Smith's Wall",
        date: "October 7, 2023",
        time: "7:00 PM (CST)",
        tags: ["Plaster"],
        volunteers: 6
      },{
            count: 1,
            name: "Fixing Ms. Smith's Floors",
            date: "October 2, 2023",
            time: "2:00 PM (CST)",
            tags: ["Flooring", "Carpentry"],
            volunteers: 3
          }]);
    const [currName, setCurrName] = useState('');
    const [currTime, setCurrTime] = useState('');
    const [currDate, setCurrDate] = useState('');
    const [currCount, setCurrCount] = useState(1);
    const [currList, setCurrList] = useState([]);
    const [clearTags, setClearTags] = useState(false);

    const submitForm = event => {
        
        const new_name = event.target.name.value;
        const new_time = event.target.time.value;
        const new_date = event.target.date.value;
        const new_volun = event.target.volunteers.value;
        
        const newEventList = myEvent.concat({
            count: currCount,
            name: new_name,
            date: new_date,
            time: new_time,
            tags: currList,
            volunteers: new_volun
         });
        setMyEvent(newEventList);
        setCurrCount(currCount+1);
        setCurrName(new_name); 
        setCurrTime(new_time);
        setCurrDate(new_date);
        props.parentCallback(newEventList);
        setCurrList([]);
        event.preventDefault();
        
    };
    // const resourceButton = (currentTask) => {
    //     const new_list = [];
    //     currentTask.tags.map((keyword) => 
    //     cardDataArray.map((element) => {
    //         if (element === keyword) {
    //             element.links.map((link => {
    //                 setVideoLinkList([...videoLinkList, link]);
    //             }))
    //         }
    //     }
    //     )

    //     );
    //     console.log(videoLinkList);
    // }
    useEffect(()=>{
        const query = ref(db, 'event/');
        return onValue(query, (snapshot)=>{
          const data = snapshot.val();
    
          
          console.log(snapshot.exists())
          if(snapshot.exists()){
            Object.values(data).map((event)=>{
                myEvent.push({
                count: event.calendarCount,
                name: event.calendarName,
                date: event.calendarDate,
                time: event.calendarTime,
                tags: event.calendarSkills,
                volunteers: event.calendarVolun
              })
              // console.log(event)
              // setAdminData((events)=>[...events, event]);
              
            })
          }
          
        })
      }, []);
    return (
        <>
            {/* <h1>Sign up page</h1> */}
            {myEvent.map((element, index) => 
            <div id={index}>
                <h3>{element.name}</h3>
                <p>{element.date}</p>
                {element.tags.map((tag)=> <><p>{tag}</p></>)}
                <button onClick={resourceButton(element)}>Sign Up!</button>
            </div>

            )}
            {/* {videoLinkList.map((element) => <a>{element}</a>)}
             */}
        </>
    );
}

export default User;