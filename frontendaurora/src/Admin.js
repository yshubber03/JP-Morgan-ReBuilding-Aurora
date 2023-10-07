import {useState} from 'react';
import FormList from './FormList';
function Admin(props) {
    const [myEvent,setMyEvent] = useState([]);
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
        
        const newEventList = myEvent.concat({
            count: currCount,
            name: new_name,
            date: new_date,
            time: new_time,
            tags: currList
         });
        setMyEvent(newEventList);
        setCurrCount(currCount+1);
        setCurrName(new_name); // I think this is behind
        setCurrTime(new_time);
        setCurrDate(new_date);
        props.parentCallback(myEvent);
        setCurrList([]);
        event.preventDefault();
    };
    const updateTagList = (newTagList) => {
        setCurrList(newTagList);
    }
    return (
            <h1>Sign up page</h1>
            <form onSubmit={submitForm}>
                <p>Name of Event</p>
                <input name="name"/> 
                <p>Date of Event</p>
                <input value={props.eventDate.toDateString()} name="date"/> 
                <p>Time of Event</p>
                <input name="time"/>
                <br/>
                <FormList lists={currList} clear={currCount+1} updateTags={updateTagList} />
                <button type="submit">Register Form</button> 
                <br/>
                
            </form>
            {myEvent.map((element)=> <><h1>{"Event #" + element.count}</h1><p>{element.name+" "+element.date+" "+element.time}</p></>)}
            
        </div>
    );
}

export default Admin;