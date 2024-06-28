import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

   const heroList = getHeroesByPublisher( publisher );

   return (
      <div className="row rows-cols-1 row-cols-md-3 g-3">
         { heroList.map( hero => (
            <HeroCard 
               key={ hero.id }
               { ...hero }
            />
         ))}
      </div>
   )
}
