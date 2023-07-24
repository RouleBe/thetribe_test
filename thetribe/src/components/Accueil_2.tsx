import "../styles/Accueil_2.css";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import Icon4 from "../assets/icon4.svg";
import Compagny1 from "../assets/compagny1.svg";
import Compagny2 from "../assets/compagny2.png";
import Compagny3 from "../assets/compagny3.png";
import Compagny4 from "../assets/compagny4.svg";

export default function Accueil() {
  return (
    <div className="container-acc2">
      <div className="subtitle">
        <h3>
          Découvrez les 4 offres
          <span id="subtitle-span"> Adaptées à vos besoin</span>
        </h3>
      </div>
      <div className="bloc">
        <div className="item-1">
          <div className="item-1">
            <div className="subitem">
              <div>
                <a href="/">
                  <span>
                    <img src={Icon1} alt="icon-1" className="shape" />
                  </span>
                </a>
              </div>
              <div>
                <div>
                  <strong>Produit sur mesure</strong>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Mettre entre les mains de vos utilisateurs le bon produit,
                    en un minimum de temps grâce à la bonne équipe / méthodo.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    <li>En savoir plus sur cette offre</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="subitem">
              <div>
                <a href="/">
                  <span>
                    <img src={Icon2} alt="icon-2" className="shape" />
                  </span>
                </a>
              </div>
              <div>
                <div>
                  <strong>Renfort en expertises</strong>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Vous apporter les expertises tech, produit et design qui
                    vous manquent pour la réussite de votre projet.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    <li>En savoir plus sur cette offre</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="subitem">
              <div>
                <a href="/">
                  <span>
                    <img src={Icon3} alt="icon-3" className="shape" />
                  </span>
                </a>
              </div>
              <div>
                <div>
                  <strong>Refonte</strong>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Le meilleur de nos méthodologies produit et tech pour
                    garantir le succès de votre projet de refonte.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    <li>En savoir plus sur cette offre</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="subitem">
              <div>
                <a href="/">
                  <span>
                    <img src={Icon4} alt="icon-4" className="shape" />
                  </span>
                </a>
              </div>
              <div>
                <div>
                  <strong>Mobile</strong>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Développer avec vous l’application mobile dont vous avez
                    besoin pour développer votre business.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <ul>
                    <li>En savoir plus sur cette offre</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="subtitle">
        <h3>
          ils nous ont fait
          <span id="subtitle-span"> Confiance pour ces missions</span>
        </h3>
      </div>
      <div className="bloc">
        <div className="item-2">
          <div className="subitem">
            <div className="object-img">
              <span>
                <img src={Compagny1} alt="compagny1" />
              </span>
            </div>
            <div className="object-para">
              <div>
                <p>
                  <span>
                    Lancer un MVP en 3 mois pour réinventer le recrutement sur
                    des métiers en tension
                  </span>
                </p>
              </div>
            </div>
            <div className="object-link">
              <a href="" className="btn">Découvrir</a> {/*cas-client*/}
            </div>
          </div>

          <div className="subitem">
            <div className="object-img">
              <span>
                <img src={Compagny2} alt="compagny2" />
              </span>
            </div>
            <div className="object-par">
              <div>
                <p>
                  <span>
                    Accélérer sa roadmap et structurer une équipe tech après une
                    levée de fond
                  </span>
                </p>
              </div>
            </div>
            <div className="object-link">
              <a href="" className="btn">Découvrir</a> {/*cas-client*/}
            </div>
          </div>
          <div className="subitem">
            <div className="object-img">
              <span>
                <img src={Compagny3} alt="compagny3" />
              </span>
            </div>
            <div className="object-para">
              <div>
                <p>
                  <span>
                    Développer en 3 mois un MVP qui crée directement de l’impact
                    business
                  </span>
                </p>
              </div>
            </div>
            <div className="object-link">
              <a href="" className="btn">Découvrir</a> {/*cas-client*/}
            </div>
          </div>
          <div className="subitem">
            <div className="object-img">
              <span>
                <img src={Compagny4} alt="compagny4" />
              </span>
            </div>
            <div className="object-para">
              <div>
                <p>
                  <span>
                    Développer un MVP commercialisable à partir d’un projet
                    scientifique
                  </span>
                </p>
              </div>
            </div>
            <div className="object-link">
              <a href="/" className="btn">Découvrir</a> {/*cas-client*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
