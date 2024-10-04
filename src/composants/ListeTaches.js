function ListeTaches({taches}) {
    return (
        <ul>
            {taches.map((tache, index) => <li key={index}>{tache}</li>)}
        </ul>
    );
}
export default ListeTaches;