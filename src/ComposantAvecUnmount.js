// ComposantAvecUnmount.js
import React from 'react';

class ComposantAvecUnmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Ce composant est affiché !" // État initial
    };
  }

  componentDidMount() {
    console.log("Composant ajouté au DOM");
    
    // Simule un changement après 3 secondes
    this.timeout = setTimeout(() => {
      this.setState({ message: "Ce composant sera retiré du DOM après quelques secondes." });
    }, 3000);
  }

  componentDidUpdate() {
    console.log("Composant mis à jour");
  }

  componentWillUnmount() {
    console.log("Composant retiré du DOM");
    clearTimeout(this.timeout); // Annule le délai
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p> {/* Affiche le message */}
      </div>
    );
  }
}

export default ComposantAvecUnmount;
