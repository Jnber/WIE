import React from "react";
import "./Activities.css";
import ManyArticles from "../Frequently Used/manyArticles";
import { events } from "../../shared/data";

export default function AlreadyDoneEvents() {
  return (
    <main className="wrapper">
      <ManyArticles events={events}></ManyArticles>
    </main>
  );
}
