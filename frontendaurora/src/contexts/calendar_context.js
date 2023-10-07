import {db} from '../firebase'
import React, {useContext, useState, useEffect} from 'react'

const CalendarEventContext = React.createContext()

export function useEvent(){
    console.log("step1.5")
    return useContext(CalendarEventContext)
}

export function EventsProvider({children}){
    function EventUploader(c){
        console.log("step2")
        c.map((element) =>
            function writeEventData(){
                db.set(db.ref(db, 'event/' + element.count), {
                    calendarName: element.name,
                    calendarDate: element.date,
                    calendarTime: element.time,
                    calendarSkills: element.tags
                });
                console.log("step3")
        })
    }
    
    function EventDownloader(){
        const eventRef = db.ref('/events');
        eventRef.on('value', (snapshot) => {
            let events = snapshot.val();
            let get_events = [];
            for (let event in events){
                get_events.push({
                    name: event.calendarName,
                    date: event.calendarDate,
                    time: event.calendarTime,
                    tags: event.calendarSkills
                });
            }
            return get_events
        })
        return null
    }

    const value = {
        EventUploader,
        EventDownloader
    }

    return (
        // <View>
        //     {console.log("step2.5")}
        // </View>
        <CalendarEventContext.Provider value={value}>
            {children}
        </CalendarEventContext.Provider>
    )
}