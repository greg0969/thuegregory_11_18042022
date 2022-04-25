import { NavLink } from "react-router-dom";
import "../styles/index.scss";

function CardSection({ logementCard }) {
  return (
    <section className="cardSection">
      {logementCard.map((ficheLogement) => (
        <div className="card-container">
          <NavLink key={ficheLogement.id} to={ficheLogement.id}>
            <figure className="card">
              {/* <img className="card__img"  /> */}
              <figcaption>
                <h2 className="card__title">{ficheLogement.title}</h2>
              </figcaption>
            </figure>
          </NavLink>
        </div>
      ))}
    </section>
  );
}

export default CardSection;
