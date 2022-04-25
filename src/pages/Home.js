import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import "../styles/index.scss";

function Home({ logement }) {
  
  return (
    <div className="home-kasa">
      <header>
        <div className="logo">
          <Logo />
        </div>
        <Nav />
      </header>
      <Banner />
      <CardSection logementCard={logement} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
