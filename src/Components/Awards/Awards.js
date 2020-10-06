import React from "react";
import { awards } from "../../shared/data";
import { makeStyles } from "@material-ui/core/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#662992",
    padding: "1em",
    textAlign: "center",
  },
  image: {
    width: "20vw",
    height: "20vw",
  },
}));

export default function Awards() {
  const classes = useStyles();

  return (
    <main className={classes.wrapper}>
      <h1 className={classes.title}>Awards</h1>
      <VerticalTimeline>
        {awards.map((e, index) => (
          <div key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={e.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<School />}
              position={e.position}
            >
              <h3 className="vertical-timeline-element-title">{e.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{e.desc}</h4>
              <img src={e.img} alt={e.date} className={classes.image}></img>
            </VerticalTimelineElement>
          </div>
        ))}
      </VerticalTimeline>
    </main>
  );
}
