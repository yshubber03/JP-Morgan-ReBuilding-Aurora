import { useState } from 'react';

    return (
        <form >
            <h3>Skills</h3>
            <input name="links" onChange={(e)=>setCurrTag(e.target.value)}/>
            <button type="submit" onClick={updateTags}>Add</button>
            <br/>
            <ul>
                {tags.map((element)=> <li>{element}</li>)}
            </ul> 
        </form>
        
    );


export default FormList;