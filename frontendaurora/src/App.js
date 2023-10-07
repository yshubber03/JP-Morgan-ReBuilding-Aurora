import ImageSlider from './landing/ImageSlider'
import calender from './landing/calender.js';
import {Carousel} from "react-responsive-carousel";
import {render} from "react-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Gallery from "./landing/gallery";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
        <Gallery />
    </div>
  );
}

export default App;