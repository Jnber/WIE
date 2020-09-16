import  React from 'react';
import './Activities.css';
import image from "../../Images/2.jpg"
import h from '../../Images/horizon.jpg'



const events = [
    {
        title: "Star Program",
        img: image,
        state:"done",
        desc : "Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death."
    },
    {
        title: "Pink October",
        img : image,
        state:"done",
        desc : "Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death."
    },
    {
        title: "WIE Orientate",
        img: image,
        state:"done",
        desc: "Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death."
    },
    {
        title: "She Solves",
        img: image,
        state:"done",
        desc: "Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death."
    }
]

export default function AboutUs (){
    
    return(
        <main class="wrapper">
            <section class="hero">
                <h1>Curious about what s coming?</h1>
                <article>
                    
                    <a href="#breweries" className="browsers">See What s coming</a>
                </article>
            </section>
            <section class="breweries" id="breweries">
                <ul>
                    {events.map((e) => (
                         <li>
                        <figure>
                            <img src={e.img} alt="Several hands holding beer glasses"></img>
                            <figcaption><h3>{e.title}</h3></figcaption>
                        </figure>
                        <p>
                            {e.desc}
                        </p>
                        <p className="state">
                            {e.state}
                        </p>
                        <a href="#" className="browsers">Show more</a>
                    </li>
                    ))}
                   
 
                </ul>
            </section>
        </main>
    );
}