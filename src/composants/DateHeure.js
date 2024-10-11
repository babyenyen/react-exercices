// COMPOSANTS FONCTIONNELS

// function DateHeure() {
//     const currentDate = new Date();
//     const date = currentDate.toLocaleDateString();
//     const time = currentDate.toLocaleTimeString();
//     return (
//         <div>
//             <p>Date: {date}, Heure: {time}</p>
//         </div>
//     );
// }

// export default DateHeure;

// COMPOSANTS DE CLASSE

// import React from 'react';

// class DateHeure extends React.Component {
//   render() {
//     const currentDate = new Date();
//     const date = currentDate.toLocaleDateString();
//     const time = currentDate.toLocaleTimeString();
    
//     return (
//       <div>
//         <p>Date: {date}, Heure: {time}</p>
//       </div>
//     );
//   }
// }

// export default DateHeure;


// COMPOSANTS DE CLASSE AVEC MISE À JOUR DE L'ÉTAT

import React from 'react';

class DateHeure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date() // Initialise l'état avec la date actuelle
    };
  }

  // Démarre l'intervalle lors du montage du composant
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick(); // Appelle la fonction tick toutes les secondes
    }, 1000);
  }

  // Met à jour l'état avec la date actuelle
  tick() {
    this.setState({
      currentDate: new Date() // Met à jour l'état avec une nouvelle date
    });
  }

  // Nettoie l'intervalle lors du démontage du composant
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentDate } = this.state; // Récupère la date actuelle depuis l'état
    const date = currentDate.toLocaleDateString(); // Formate la date
    const time = currentDate.toLocaleTimeString(); // Formate l'heure

    return (
      <div>
        <p>Date: {date}, Heure: {time}</p> {/* Affiche la date et l'heure */}
      </div>
    );
  }
}

export default DateHeure;
