import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

class Article extends PureComponent {
  openModal = () => {
    const { desc, handleOpenModal, titlee } = this.props;
    handleOpenModal({ desc, titlee });
  };

  render = () => (
    <div className="scenario">
      <li key={this.titlee}>
        <figure>
          <img src={this.img} alt={this.titlee}></img>
          <figcaption>
            <h3>{this.titlee}</h3>
          </figcaption>
        </figure>
        <p>{this.desc}</p>

        <Button
          variant="outlined"
          color="primary"
          className="browsers"
          onClick={this.openModal}
        >
          Show more
        </Button>
      </li>
    </div>
  );
}

Article.propTypes = {
  desc: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  titlee: PropTypes.string.isRequired,
};

export default Article;
