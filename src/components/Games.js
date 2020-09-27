import React, { Component } from 'react';
import Modal from "./Game";

class Games extends Component {
  constructor() {
		super();
		this.state = {
			games: [],
      modal: false,
      modalInputName: "",
      showModal: {},
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  getModal = value => {//still using variable from `data.id`
      console.log(value);
      let key_to_update = {};
      key_to_update[value] = true;
      this.setState( {
          showModal: Object.assign( {}, this.state.showModal, key_to_update )
      } );
  }

  componentDidMount() {
		// Production
		let dataURL = 'https://disneydidfine.wpengine.com/wp-json/wp/v2/games?_embed';

		fetch(dataURL)
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					games: res,
				});
			});
	}

  render() {
    let audio = new Audio("/tick.mp3");

    const start = () => {
      console.log("playing")
      audio.play()
    }

    let games = this.state.games.map((game, index) => {
      return(
        <div className={index}>
          <a href="javascript:;" className="App-link game" onClick={this.showModal}>{game.title.rendered}</a>
          <br/>
          <Modal show={this.state.show} handleClose={this.hideModal} game={game} />
        </div>
      )
    });
    return(
      <div>{games}</div>
    )
  }
}

export default Games;
