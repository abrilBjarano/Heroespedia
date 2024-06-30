import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const { onInputChange, onSubmit, inputValue, q, heroes } = useForm();

  
  return (
    <>
      <div className="row mt-3">

        <div className="col-3">
          <form onSubmit={ onSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ inputValue }
              onChange={ onInputChange }
            />
          </form>

          <div className="btn btn-primary mt-2">
            Search
          </div>
        </div>

        <div className="col-9">
          <h4>Results</h4>
          <hr/>

          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero with <b>{`${ q }`}</b>
          </div>

          { heroes.map( heroe => (
            <HeroCard
              key={ heroe.id }
              { ...heroe }
            />
          ))}
        </div>

      </div>
    </>
  )
}
