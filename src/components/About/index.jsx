import React, { Component } from 'react';
import './style.css';
import img from './about.png';

class About extends Component {

    render() {
        return( 
            <div className='about'>
                <div className="container">
                    <div className='abouts'>
                        <div className="content">
                            <h2>About Us</h2>
                            <h3>Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos laudantium distinctio nostrum iure autem odit maxime unde blanditiis veniam veritatis vel delectus, pariatur exercitationem, doloribus voluptates at suscipit! Reiciendis, itaque!</p>
                            <button>Read More</button>
                        </div>
                        <div className="image">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default About;