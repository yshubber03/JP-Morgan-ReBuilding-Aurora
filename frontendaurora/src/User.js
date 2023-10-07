import {useState, useEffect} from 'react';
import FormList from './FormList';
import {db} from './firebase'
import { onValue, set, ref } from 'firebase/database'

function User(props) {
    const [possibleEvent,setPossibleEvent] = useState([{
        count: 1,
        name: "Plubming Task",
        date: "October 7, 2023",
        time: "7:00 PM (CST)",
        tags: "Plumbing",
        volunteers: 6
      },{
            count: 1,
            name: "Adding Accessibility Features",
            date: "October 2, 2023",
            time: "2:00 PM (CST)",
            tags: "Installing Rails/Bars",
            volunteers: 3
          }]);
    const [myEvent, setMyEvent] = useState([]);
    const [currName, setCurrName] = useState('');
    const [currTime, setCurrTime] = useState('');
    const [currDate, setCurrDate] = useState('');
    const [currCount, setCurrCount] = useState(1);
    const [currList, setCurrList] = useState([]);
    const [clearTags, setClearTags] = useState(false);
    const [userEvents, setUserEvents] = useState([]);

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
    const AddEvent=(event,element) => {
        const new_li = [...myEvent, element];
        //push to database here
        //loop through events and update the key of the number of volunteers. if less than or equal to 0, remove element completely
        
        setMyEvent(new_li);
    }
    return (
        <>
            {/* <h1>Sign up page</h1> */}
            {possibleEvent.map((element) => 
            <div>
                <h3>{element.name}</h3>
                <p>{element.date}</p>
                <p>{element.date}</p>
                <button onClick={() => AddEvent(element)}>Sign Up!</button>
            </div>
            
            )}
            
            
        </>
    );
}

export default User;