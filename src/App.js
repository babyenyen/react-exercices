// import './App.css';
// import Agenda from './composants/Agenda';
 
// function App() {
//   let arrTaches = [
//     '8h - 9h Cours de 3D',
//     '9h - 12h Cours de PHP',
//     '14h - 16h Cours de javascript '
// ]
//     return (
//         <>
//           <Agenda name="Claire" age="25" taches={arrTaches}/>
//         </>
//   );
// }
 
// export default App;

//COMPOSANT AVEC UNMOUNT


// App.js
import React from 'react';
import ComposantAvecUnmount from './ComposantAvecUnmount';
import Agenda from './composants/Agenda';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true, // État initial pour afficher le composant
      arrTaches: [
        '8h - 9h Cours de 3D',
        '9h - 12h Cours de PHP',
        '14h - 16h Cours de Javascript '
      ]
    };
  }

  componentDidMount() {
    // Met à jour l'état après 5 secondes
    setTimeout(() => {
      this.setState({ showComponent: false });
    }, 5000);
  }

  render() {
    return (
      <div>
        <Agenda name="Claire" age="25" taches={this.state.arrTaches} />
        <h4>Exemple d'ajout et de suppression de composant du DOM</h4>
        {this.state.showComponent ? ( // Expression conditionnelle pour afficher le composant
          <ComposantAvecUnmount />
        ) : (
          <p>Composant effacé</p>
        )}
      </div>
    );
  }
}

export default App; // Assurez-vous que cette ligne est présente pour l'exportation par défaut
