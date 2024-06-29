import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  return (
    <>
      <div className="row  mt-3">

        <div className="col-5">
          <form>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
          </form>

          <div className="btn btn-primary mt-2">
            Search
          </div>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero with <b>ABC</b>
          </div>

          {/* <HeroCard /> */}

        </div>

      </div>
    </>
  )
}
