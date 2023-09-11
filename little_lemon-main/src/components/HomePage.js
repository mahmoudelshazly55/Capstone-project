import Nav from './Nav'
import CallToAction from './CallToAction';
import Specials from './Specials';
import Footer from './Footer';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const HomePage = () => {
    return (
        <>
            <Nav />
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
            <Footer />
        </>
    )
}

export default HomePage;