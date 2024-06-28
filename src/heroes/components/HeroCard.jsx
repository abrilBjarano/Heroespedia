export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImageUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <div className="col mb-2">
      <div className="card h-100">
        <div className="row no-gutters h-100">

          <div className="col-2">
            <img src={ heroImageUrl } alt={ superhero } className="card-img h-100" />
          </div>

          <div className="col-10 d-flex flex-column justify-content-center align-items-center text-center p-3">
            <h1 className="mb-3">{superhero}</h1>
            <p className="text-wrap">{characters}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
