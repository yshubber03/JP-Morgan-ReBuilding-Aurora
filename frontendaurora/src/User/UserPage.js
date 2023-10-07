import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import EventCard from './EventCard';
import './UserPage.css'
import _Navbar from '../_Navbar';
import {db} from '../firebase'
import { onValue, set, ref } from 'firebase/database'
// import firebase from 'firebase/app';
// import 'firebase/firestore';

const UserPage = ({ initialName }) => {
  var [name, setName] = useState(''); // Set initial placeholder
  var [eventData, setEventData] = useState([]);
  var [userData, setUserData] = useState({});
  var email = localStorage.getItem('email')
  

  const totalTasks = 10;
  const completedTasks = 5;
  const tasksLeft = totalTasks - completedTasks; 


  // Hardcoded events for now
  const userEvents = [
    {
      id: 1,
      description: "Exterior Paint",
      date: "2023-11-01",
      time: "15:00",
      location: "Aurora, IL",
      latitude: "41.7606",
      longitude: "-88.3201",
      tools: ["Rollers, Brushes, Trays"]
    },
    {
      id: 2,
      description: "Gutter Cleaning",
      date: "2023-11-04",
      time: "16:00",
      location: "Aurora, IL",
      latitude: "41.8781",
      longitude: "-87.6298",
      tools: ["Ladder, Gloves, Trash Bags"]
    }
  ];

  function logout(){
    console.log('logging out')
    localStorage.setItem('email', '')
    window.location.reload();
  }

  useEffect(() => {

    if(localStorage.getItem('email') == ''){
      document.querySelector('.Welcome').innerHTML = `
      <div>You must be logged in to view this</div>
      `
    }
    
  })

  // Commented out Firebase logic to fetch user's name from Firestore
  
  useEffect(()=>{
    const query = ref(db, 'event/');
    return onValue(query, (snapshot)=>{
      const data = snapshot.val();
      console.log(data)
      console.log(snapshot.exists())
      if(snapshot.exists()){
        Object.values(data).map((event)=>{
          eventData.push({
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

    const query2 = ref(db, 'user/');
    return onValue(query2, (snapshot)=>{
      const data = snapshot.val();
      console.log(snapshot.exists())
      if(snapshot.exists()){
        Object.values(data).map((event)=>{
          if(event.user_email === email) {
            setName(event.user_name);
          }
          // console.log(event)
          // setAdminData((events)=>[...events, event]);
          
        })
      }
      console.log("step5")
    })
  }, []);
  
});


  // Commented out Firebase logic to fetch events from Firestore
  /*
  useEffect(() => {
    const db = firebase.firestore();
    
    db.collection("events").get().then((querySnapshot) => {
      const eventsData = [];
      querySnapshot.forEach((doc) => {
        eventsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setEvents(eventsData);
    });

  }, []);
  */
 function handleCancelRSVP(eventid){
  document.getElementById(eventid).innerHTML = ""
 }

  return (
    <div  className="futureParent">
        <div className="Welcome text-center">
        <h1>Welcome, {name}!</h1>
        <hr></hr>

        <div className="progressSection container">

        {/* Row for ProgressBar */}
        <div className="row">
          <div className="col-md-12" style={{ width: "200px" }}>
            <ProgressBar bgcolor="green" completed={(completedTasks / totalTasks) * 100} />
          </div>
        </div>

        {/* Row for goalMessage */}
        <div className="row">
          <div className="col-md-12 goalMessage">
            <span className="goalNumber">{tasksLeft}</span>
            <div>more and you've hit your goal</div>
          </div>
        </div>
        
      </div>
      <div>
        {eventData.map((element) => 
            <div className="futureEventsSection">
                <h4>{element.name}</h4>
                <p>{element.date}</p>
                <p>{element.skills}</p> 
                {/* <button onClick={() => AddEvent(element)}>Sign Up!</button> */}
            </div>
            
        )}
    </div>
      <button className="outbutton" onClick={logout}>Sign out</button>
      
      
      {/* Render the users events */}
      <div className="userEventsSection">
        {userEvents.map(event => (
          <EventCard 
            key={event.id}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            latitude={event.latitude}  
            longitude={event.longitude}
            tools={event.tools}
            onCancelRSVP={() => handleCancelRSVP(event.id)}
          />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      
      
    </div>
  </div>
  );
};

export default UserPage;





