import React from 'react';
import {Carousel} from "react-responsive-carousel";

export default () => (
    <Carousel autoPlay infiniteLoop={true} showThumbs={false}>
        <div>
            <img
                alt="Volenteer images1"
                src="https://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1678904790447-KUVJ42YVGHQ3FXPNRZ7X/IMG_2457.JPG?format=1000w" />
            <p className="legend">Test1</p>
        </div>
        <div>
            <img
                alt="Volenteer images2"
                src="https://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1678905511191-DAX5Y83RS1PWDG1LAYQD/ARE+2011+volunteers+outside+home+3.jpg?format=1000w" />

            <p className="legend">Test2</p>
        </div>
        <div>
            <img
                alt="Volenteer images3"
                src="https://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1678905558994-TXIUEVMO54JK7PHPAJB8/ARE+2011+volunteers.jpg?format=1000w" />
            <p className="legend">Test3</p>
        </div>
    </Carousel>
);


