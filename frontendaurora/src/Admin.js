import {useState} from 'react';
import FormList from './FormList';
import {db} from './firebase'
import { onValue, set, ref } from 'firebase/database'

function Admin(props) {
    const [myEvent,setMyEvent] = useState(props.data);
    const [currName, setCurrName] = useState('');
    const [currTime, setCurrTime] = useState('');
    const [currDate, setCurrDate] = useState('');
    const [currCount, setCurrCount] = useState(1);
    const [currList, setCurrList] = useState([]);
    const [clearTags, setClearTags] = useState(false);

    console.log("step3")
    const query = ref(db, 'events/');
    onValue(query, (snapshot)=>{
      const data = snapshot.val();

      console.log(myEvent)
    })


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
    const updateTagList = (newTagList) => {
        setCurrList(newTagList);
    }
    return (
        <>
            {/* <h1>Sign up page</h1> */}
            <form onSubmit={submitForm}>
                <h3>Name of Event</h3>
                <input name="name"/> 
                <h3>Date of Event</h3>
                <input value={props.eventDate} name="date"/> 
                <h3>Time of Event</h3>
                <input name="time"/>
                <h3>Number of Volunteers Needed</h3>
                <input name="volunteers"/>
                <br/>
                <FormList lists={currList} clear={currCount+1} updateTags={updateTagList} />
                <button type="submit">Register Form</button> 
                <br/>
                
            </form>
            {myEvent.map((element)=> <><h1>{"Event #" + element.count}</h1><p>{element.name+" "+element.date+" "+element.time}</p></>)}
        </>
    );
}

export default Admin;