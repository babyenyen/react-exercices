import Header from './Header';
import Apropos from './Apropos';
import Services from './Services';
import Images from './Images';

function BeauSite(props) { // Props destructurées
    return (
        <>
          <Header />
          <div className="container">
            <Apropos />
            <Services services={props.services} /> {/* Pass services prop */}
            <Images images={props.images} /> {/* Pass images prop */}
          </div>
        </>
    );
}

export default BeauSite;