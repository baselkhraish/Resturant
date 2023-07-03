import React, { Component } from 'react';
import './style.css';

class LandingPage extends Component {
    render() {
        return (
            <div className='landing'>
                <header>
                    <nav>
                        <div className='logo'>
                            <svg width="79" height="76" viewBox="0 0 79 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 27">
                                <path id="Vector" d="M46.9749 21H48V51.3158C48 52.246 47.3881 53 46.6333 53H45.9499C45.195 53 44.5831 52.246 44.5831 51.3158V42.8947H43.2164C43.2164 23.5263 46.9749 21 46.9749 21ZM35.0159 53H34.3325C33.5776 53 32.9657 52.246 32.9657 51.3158V34.4737C32.5101 34.4737 32.0546 34.4737 31.4851 33.7017C30.9156 32.9299 30.4031 31.386 30.0614 29.4913C29.7197 26.0526 30.9156 21 30.9156 21L31.7698 29.0001H32.1115L33.3074 21.0001L34.5033 29.0001H34.845L36.0409 21L37.2368 29.0001H37.5785L38.4327 21C38.4327 21 39.6287 26.0526 39.287 29.4912C38.9453 31.3859 38.4327 32.9299 37.8633 33.7017C37.2938 34.4737 36.8382 34.4737 36.3826 34.4737V51.3158C36.3826 52.246 35.7707 53 35.0159 53Z" fill="#FFFFCC"/>
                                <rect id="Rectangle 5" x="-0.00516728" y="3.18507" width="46.2261" height="46.258" transform="matrix(0.769818 0.638264 -0.771885 0.635763 42.0226 1.16342)" stroke="#FFFFCC" stroke-width="5"/>
                                <rect id="Rectangle 6" x="-0.00516728" y="3.18507" width="46.2261" height="46.258" transform="matrix(0.769818 0.638264 -0.771885 0.635763 42.0226 11.8797)" stroke="#FFFFCC" stroke-width="5"/>
                                </g>
                            </svg>
                        </div>
                        <div className='tags'>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Special</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li>
                                    <a href="#">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="akar-icons:search">
                                        <path id="Vector" d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#A08040" stroke-width="2" stroke-linecap="round"/>
                                        </g>
                                    </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='button'>--Book Now--</div>
                    </nav>
                </header>
                <section>
                    <h1> Welcome To </h1>
                    <h2> Golden View Dine </h2>
                    <p>Explore the authentic vegan dishes with your friends and family</p>
                    <button>Read More</button>
                </section>
            </div>
            
        );
    }
}

export default LandingPage;