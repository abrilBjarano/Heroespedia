import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const { onInputChange, onSubmit, inputValue, q, heroes } = useForm();

  
  return (
    <>
      <div className="row mt-3">
        <form 
          onSubmit={ onSubmit }
          className="col-10">
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

        <div className="col-2 btn btn-primary">
          Search
        </div>
      </div>

      <div className="mt-5">
        <h4>Results</h4>
        <hr/>

        {
          ( q === '' )
          ? <div className="alert alert-primary">Search a hero</div>
          : ( heroes.length === 0 )
            && <div className="alert alert-danger">No hero with <b>{`${ q }`}</b> </div>
        }


        <div className="row row-cols-xs-1 row-cols-1 row-cols-md-1 row-cols-lg-2 g-3 mb-4">
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
