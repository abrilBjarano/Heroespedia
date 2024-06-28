import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

   // const heroList = getHeroesByPublisher( publisher );
   const heroList = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

   // console.log('Me volví a generar');

   return (
      <div className="row rows-cols-1 row-cols-md-1 g-3 mt-2">
         { heroList.map( hero => (
            <HeroCard 
               key={ hero.id }
               { ...hero }
            />
         ))}
      </div>
   )
}
