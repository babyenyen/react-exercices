// COMPOSANTS FONCTIONNELS

// function Header({name, children}) {
//     return (
//     <h1>Agende de {name}
//     {children}
//     </h1>
    
//   );
// }
// export default Header;

// COMPOSANTS DE CLASSE

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1>
        Agenda de {this.props.name}
        {this.props.children}
      </h1>
    );
  }
}

export default Header;
