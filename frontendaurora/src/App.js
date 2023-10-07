import ImageSlider from './landing/ImageSlider'
import {SliderData} from "./landing/gallery";
import calender from './landing/calender.js';
function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
        <ImageSlider slides={SliderData} />

    </div>
  );
}

export default App;