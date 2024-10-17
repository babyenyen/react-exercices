function Images({ images }) {
    return (
        <section id="gallery">
            <h2>Galerie de projets</h2>
            <div className="gallery-images">
                {images.map((imageObj, index) => ( // on utilise map pour afficher chaque image
                    <img 
                        key={index}
                        src={imageObj.src} // on utilise src pour afficher l'image, require donne l'url de l'image donc .default est inutile
                        alt={`Projet ${index + 1}`} 
                        className="gallery-image"
                    />
                ))}
            </div>
        </section>
    );
}

export default Images;
