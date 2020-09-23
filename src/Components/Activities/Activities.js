import React from "react";
import "./Activities.css";
import ManyArticles from "../Frequently Used/manyArticles";
import { events } from "../../shared/data";

export default function AboutUs() {
  return (
    <main class="wrapper">
      <section class="hero">
        <h1>Curious about what s coming?</h1>
        <article>
          <a href="#breweries" className="browsers">
            See What s coming
          </a>
        </article>
      </section>
      <ManyArticles events={events}></ManyArticles>
    </main>
  );
}
