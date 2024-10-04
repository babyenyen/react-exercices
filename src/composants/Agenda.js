import DateHeure from './DateHeure';
import Header from './Header';
import ListeTaches from './ListeTaches';

function Agenda(props) {
    return (
        <div>
        <Header name={props.name}>
            <p>Bienvenue dans l'agenda de {props.name}</p>
        </Header>
        <DateHeure/>
        <ListeTaches taches={props.taches}/>
        </div>
    );
}

export default Agenda;