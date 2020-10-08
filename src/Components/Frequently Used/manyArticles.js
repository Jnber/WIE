import React, { Component } from "react";
import "../Activities/Activities.css";
import Button from "@material-ui/core/Button";
import Article from "./Article";
import Dialogue from "./Dialogue";
import PropTypes from "prop-types";

export default class ManyArticles extends Component {
  state = { desc: "", openModal: false, titlee: "" };
  handleOpenModal = ({ desc, titlee }) => {
    this.setState({ desc, openModal: true, titlee });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  render = () => (
    <section className="breweries" id="breweries">
      <ul>
        {this.events.map((e) => (
          <Article
            key={e.titlee}
            {...e}
            handleOpenModal={this.handleOpenModal}
          />
        ))}
      </ul>
      <Dialogue {...this.state} onCloseModal={this.handleCloseModal} />
    </section>
  );
}

Article.propTypes = {
  events: PropTypes.array.isRequired,
};
