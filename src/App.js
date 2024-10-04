import './App.css';
import Agenda from './composants/Agenda';
 
function App() {
  let arrTaches = [
    '8h - 9h Cours de 3D',
    '9h - 12h Cours de PHP',
    '14h - 16h Cours de javascript '
]
    return (
        <>
          <Agenda name="Claire" age="25" taches={arrTaches}/>
        </>
  );
}
 
export default App;