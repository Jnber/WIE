import React from "react";
import "../Activities/Activities.css";

export default function ManyArticles(props) {
  const { events } = props;
  return (
    <section class="breweries" id="breweries">
      <ul>
        {events.map((e) => (
          <li key={e.titlee}>
            <figure>
              <img src={e.img} alt="Several hands holding beer glasses"></img>
              <figcaption>
                <h3>{e.titlee}</h3>
              </figcaption>
            </figure>
            <p>{e.desc}</p>
            <p className="state">{e.state}</p>
            <a href="/Article" className="browsers" component={e}>
              Show more
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
