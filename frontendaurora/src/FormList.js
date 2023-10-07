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
      <p>Video Resources (Input URL)</p>
      <div className="row-format">
        <input name="links" onChange={(e) => setCurrTag(e.target.value)} value={currTag} />
        <button type="submit" onClick={updateTags}>Add</button>
      </div>
      <br />
      <ul>
        {tags.map((element) => <li>{element}</li>)}
      </ul>
    </form>
  );
}

export default FormList;
