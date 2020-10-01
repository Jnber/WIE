import React from "react";
import "./Activities.css";
import ManyArticles from "../Frequently Used/manyArticles";
import { events } from "../../shared/data";

export default function Activities() {
  return (
    <main class="wrapper">
      <section class="hero">
        <h1>Curious about what we achieved already?</h1>
        <article>
          <a href="/AlreadyDoneEvents" className="browsers">
            See what you missed
          </a>
        </article>
      </section>
      <h2 className="soon">Coming soon</h2>
      <ManyArticles events={events}></ManyArticles>
    </main>
  );
}
