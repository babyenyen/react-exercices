function ListeTaches() {
    let arrTaches = [
        '8h - 9h Cours de 3D',
        '9h - 12h Cours de PHP',
        '14h - 16h Cours de javascript '
    ]
    return (
        <ul>
            {arrTaches.map((tache, index) => <li key={index}>{tache}</li>)}
        </ul>
    );
}
export default ListeTaches;