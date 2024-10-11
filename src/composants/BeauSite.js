import Header from './Header';
import Apropos from './Apropos';
import Services from './Services';
import Images from './Images';

function BeauSite(props) {
    return (
        <>
          <Header />
          <div className="container">
            <Apropos />
            <Services services={props.services} /> {/* Pass services prop */}
            <Images images={props.images} /> {/* Assurez-vous que c'est 'images' */}
          </div>
        </>
    );
}

export default BeauSite;
