import React, { Button } from "react";

const Modal = ({ handleClose, show, game, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {game.title.rendered} <br />
        <p dangerouslySetInnerHTML={{__html: game.content.rendered}}></p> <br />
        <img src={game._embedded['wp:featuredmedia'][0].media_details.sizes
										.medium.source_url}/><br />
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
