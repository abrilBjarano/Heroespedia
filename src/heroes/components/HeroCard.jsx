import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
}) => {

  const heroImageUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <div className="col mb-2 animate__animated animate__fadeInLeftBig animate__faster">
      <div className="card h-100">
        <div className="row no-gutters h-100">

          <div className="col-2">
            <img src={ heroImageUrl } alt={ superhero } className="card-img h-100" />
          </div>

          <div className="col-10 d-flex flex-column justify-content-center align-items-center text-center p-3">
            <h5 className="mb-3">{ superhero }</h5>
            <p className="text-wrap text-muted">{ alter_ego }</p>

            <Link 
              to={`/hero/${ id }`} 
            >
              info
          </Link>
          </div>

          

        </div>
      </div>
    </div>
  );
}
