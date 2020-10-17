import React from "react";
import "./Activities.css";
import ManyArticles from "../Frequently Used/manyArticles";
import { Soon } from "../../shared/data";
import { ArrowDownward } from "@material-ui/icons";

export default function Activities() {
  return (
    <main className="wrapper">
      <div className="hero">
        <h1>Curious about what we achieved already?</h1>
        <article>
          <a href="/AlreadyDoneEvents" className="browsers">
            See what you missed
          </a>
        </article>
      </div>
      <div className="goingdown">
        <a href="#p" className="coloraman">
          <ArrowDownward></ArrowDownward>
        </a>
      </div>
      <h2 className="soon" id="p">
        Coming soon
      </h2>
      <ManyArticles events={Soon}></ManyArticles>
    </main>
  );
}
