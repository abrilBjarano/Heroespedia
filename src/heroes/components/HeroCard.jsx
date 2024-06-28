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
    <div className="col">
      <div className="card h-100">
        <div className="row no-gutters h-100">
          <div className="col-2">
            <img src={ heroImageUrl } alt={ superhero } className="card-img h-100" />
          </div>
          <div className="col-10 d-flex justify-content-center align-items-center">
            <h1>{superhero}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
