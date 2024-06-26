import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {

   const heroList = getHeroesByPublisher( publisher );

   return (
      <ul>
         { heroList.map( hero => (
            <li key={ hero.id }>{ hero.superhero }</li>
         ))}
      </ul>
   )
}
