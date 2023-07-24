import "../styles/accueil.css";
import logoSvg from "../assets/img1_the_tribe.svg";

export default function Accueil() {
  return (
    <div className="container">
      <div className="left-container">
        <div className="container-title">
          <h1>
            La tech est le produit au service de la
            <br />
            <span>réussite de votre business</span>
          </h1>
        </div>
        <div className="container-subtitle">
          <p className="p-acc1">
            Notre mission est de co-construire avec vous
            <br />
            des applications web & mobile qui auront un impact fort
            <br />
            pour vos utilisateurs finaux et la croissance
            <br />
            de votre business.
          </p>
        </div>
        <div className="container-button">
          <a id="contact" href="/">
            Discutons de votre projet !
          </a>
        </div>
      </div>
      <div className="right-container">
        <div>
          <img src={logoSvg} alt="Logo" className="img" />
        </div>
      </div>
    </div>
  );
}
