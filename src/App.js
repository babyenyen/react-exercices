import './App.css';
import BeauSite from './composants/BeauSite';

function App() {
  let arrServices = [
    { title: 'Développement Web', description: 'Nous créons des sites web réactifs et modernes pour toutes les plateformes.' },
    { title: 'Design UI/UX', description: 'Un design esthétique et intuitif pour améliorer l\'expérience utilisateur.' },
    { title: 'Consulting', description: 'Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie numérique.' }
  ];

  // objet de l'imagr est src pour qu'on sache que la valeur est un chemin
  let arrImages = [
    { src: require('./assets/images/image1.png') }, // require est utilisé pour importer des images
    { src: require('./assets/images/image2.png') },
    { src: require('./assets/images/image3.png') },
    { src: require('./assets/images/image4.png') }
  ];

  return (
    <>
      <BeauSite services={arrServices} images={arrImages} />
    </>
  );
}

export default App;
