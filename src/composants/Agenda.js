import DateHeure from './DateHeure';
import Header from './Header';
import ListeTaches from './ListeTaches';
import React from 'react';

// COMPOSANTS FONCTIONNELS

// function Agenda(props) {
//     return (
//         <div>
//         <Header name={props.name}>
//             <p>Bienvenue dans l'agenda de {props.name}</p>
//         </Header>
//         <DateHeure/>
//         <ListeTaches taches={props.taches}/>
//         </div>
//     );
// }

// export default Agenda;

// COMPOSANTS DE CLASSE

class Agenda extends React.Component {
    render() {
      return (
        <div>
          <Header name={this.props.name}>
            <p>Bienvenue dans l'agenda de {this.props.name}</p>
          </Header>
          <DateHeure />
          <ListeTaches taches={this.props.taches} />
        </div>
      );
    }
  }
  
  export default Agenda;