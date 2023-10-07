import { bottom } from '@popperjs/core';
import { useState } from 'react';

function FormList(props) {
  const [tags, setTags] = useState(props.lists);
  const [currTag, setCurrTag] = useState('');

  const updateTags = (event) => {
    const newestTag = currTag;
    const newTags = props.lists.concat(newestTag);
    setTags(newTags);
    props.updateTags(newTags);

    // Clear the input field
    setCurrTag('');

    event.preventDefault();
  }

  return (
    <form>
      <h3>Skills Needed</h3>
      <div className="row-format">
        <input style = {{padding: 15, width: 350, height: 20}} name="links" onChange={(e) => setCurrTag(e.target.value)} value={currTag} />
        <div style = {{padding: 10}}>
          <button type="submit" onClick={updateTags}>Add</button>
        </div>
      </div>
      <br />
      <ul>
        {tags.map((element) => <li>{element}</li>)}
      </ul>
    </form>
  );
}

export default FormList;
