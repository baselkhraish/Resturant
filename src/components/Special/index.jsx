import React, { Component } from 'react';
import './style.css';
import img_1 from './1.png';
import img_2 from './2.png';
import img_3 from './3.png';

class Special extends Component {
    render() {
        return (
            <div className='special '>
                <h2>Special</h2>
                <h3>What makes us special</h3>
                <div className="app container">
                    <div className="child">
                        <img src={img_1} />
                        <p>Fresh food</p>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero mollitia modi, dignissimos totam reiciendis enim debitis eveniet perferendis eaque possimus ratione itaque perspiciatis. Illum cumque cupiditate sequi dolor. Sunt.</span>
                    </div>
                    <div className="child">
                        <img src={img_2} />
                        <p>skilled Chef</p>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero mollitia modi, dignissimos totam reiciendis enim debitis eveniet perferendis eaque possimus ratione itaque perspiciatis. Illum cumque cupiditate sequi dolor. Sunt.</span>
                    </div>
                    <div className="child">
                        <img src={img_3} />
                        <p>Exotic dishes</p>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero mollitia modi, dignissimos totam reiciendis enim debitis eveniet perferendis eaque possimus ratione itaque perspiciatis. Illum cumque cupiditate sequi dolor. Sunt.</span>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Special;