// COMPOSANTS FONCTIONNELS

// function ListeTaches({taches}) {
//     return (
//         <ul>
//             {taches.map((tache, index) => <li key={index}>{tache}</li>)}
//         </ul>
//     );
// }
// export default ListeTaches;

// COMPOSANTS DE CLASSE

import React from 'react';

class ListeTaches extends React.Component {
  render() {
    return (
      <ul>
        {this.props.taches.map((tache, index) => (
          <li key={index}>{tache}</li>
        ))}
      </ul>
    );
  }
}

export default ListeTaches;
