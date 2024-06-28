import { Navigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers";

export const HeroPage = () => {

  const { id, ...rest } = useParams();

  const hero = getHeroesById( id );

  if( !hero ) {
    return <Navigate to="/" />
  }

  return (
    <>
      <h1>HeroPage</h1>
    </>
  )
}
