import React, { Button } from "react";

const Modal = ({ handleClose, show, game }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2 className="game-title"> {game.title.rendered} - {game.acf.release_year} <button onClick={handleClose}>close</button></h2> <br />
        <img src={game._embedded['wp:featuredmedia'][0].media_details.sizes
										.medium.source_url}/><br />
        <p dangerouslySetInnerHTML={{__html: game.content.rendered}}></p> <br />
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
