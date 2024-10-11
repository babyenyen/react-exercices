function Images({ images }) {
    return (
        <section id="gallery">
            <h2>Galerie de projets</h2>
            <div className="gallery-images">
                {images.map((imageObj, index) => (
                    <img 
                        key={index}
                        src={imageObj.src} // Utilisez simplement imageObj.src
                        alt={`Projet ${index + 1}`} 
                        className="gallery-image"
                    />
                ))}
            </div>
        </section>
    );
}

export default Images;
