import './App.css';
import BeauSite from './composants/BeauSite';
 
function App() {
  let arrServices = [
    { title: 'Développement Web', description: 'Nous créons des sites web réactifs et modernes pour toutes les plateformes.' },
    { title: 'Design UI/UX', description: 'Un design esthétique et intuitif pour améliorer l\'expérience utilisateur.' },
    { title: 'Consulting', description: 'Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie numérique.' }
  ];

  let arrImages = [
    { image:  require('../src/assets/images/image1.png') },
    { image:  require('./assets/images/image2.png') },
    { image:  require('./assets/images/image3.png') },
    { image:  require('./assets/images/image4.png') }
  ];

  return (
    <>
      <BeauSite services={arrServices} images={arrImages} /> {/* Pass both services and images */}
    </>
  );
}

export default App;