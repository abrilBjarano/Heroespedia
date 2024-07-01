import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

   const heroList = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

   
   return (
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mt-2">
         { heroList.map( hero => (
            <HeroCard 
               key={ hero.id }
               { ...hero }
            />
         ))}
      </div>
   )
}
