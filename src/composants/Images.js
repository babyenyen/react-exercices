function Images({ images }) {
    return (
        <section id="gallery">
            <h2>Galerie de projets</h2>
            <div className="gallery-images">
                {images.map((imageObj, index) => (
                    <img 
                        key={index} // Clé unique pour chaque image
                        src={imageObj.image.default}
                        alt={`Projet ${index + 1}`} 
                        className="gallery-image" // 'class' devient 'className'
                    />
                ))}
            </div>
        </section>
    );
}

export default Images;
