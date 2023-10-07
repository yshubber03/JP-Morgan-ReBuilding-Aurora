import {useState} from 'react';
function Admin(props) {
    const [myEvent,setMyEvent] = useState([]);
    const [currName, setCurrName] = useState('');
    const [currTime, setCurrTime] = useState('');
    const [currDate, setCurrDate] = useState('');
    const [currCount, setCurrCount] = useState(1);
    const [links, setLinks] = useState([]); //could replicate links for resources
    const [currLink, setCurrLink] = useState('');
    
    const submitForm = event => {
        const new_name = event.target.name.value;
        const new_time = event.target.time.value;
        const new_date = event.target.date.value;
        
        const newEventList = myEvent.concat({
            count: currCount,
            name: new_name,
            date: new_date,
            time: new_time,
            link: links 
         });
        setMyEvent(newEventList);
        setCurrCount(currCount+1);
        setCurrName(new_name); // I think this is behind
        setCurrTime(new_time);
        setCurrDate(new_date);
        setLinks([]);
        props.parentCallback(myEvent);

        event.preventDefault();
    };
    const updateLinks = () => {
        const newestLink = currLink;
        const newLinkList = links.concat(newestLink);
        setLinks(newLinkList);
        
    }
    return (
        <>
            <h1>Sign up page</h1>
            <form onSubmit={submitForm}>
                <p>Name of Event</p>
                <input name="name"/> 
                <p>Date of Event</p>
                <input value={props.eventDate} name="date"/> 
                <p>Time of Event</p>
                <input name="time"/>
                {/*<p>Video Resources</p>
                <input name="links" onChange={(e)=>setCurrLink(e.target.value)}/>
                <button onClick={updateLinks}>Add</button>
                <br/>
                <ul>
                    {links.map((element)=> <li>{element}</li>)}
                </ul> */}
                <button type="submit">Register Form</button> 
                <br/>
                
            </form>
            {myEvent.map((element)=> <><h1>{"Event #" + element.count}</h1><p>{element.name+" "+element.date+" "+element.time}</p></>)}
            
            
        </>
    );
}

export default Admin;