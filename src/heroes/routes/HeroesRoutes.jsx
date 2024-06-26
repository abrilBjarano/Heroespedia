import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { DCPage, MarvelPage } from "../pages";

export const HeroesRoutes = () => {

   const routesHeroes = [
      { path: '/marvel', name: 'Marvel' },
      { path: '/dc', name: 'DC' },
    ];

   return (
      <>
         <Navbar routes={ routesHeroes } />

         <div className="container">
            <Routes>
               <Route path="marvel" element={ <MarvelPage/> } />
               <Route path="dc" element={ <DCPage /> } />
               <Route path="/*" element={ <Navigate to='marvel' /> } />
            </Routes>
         </div>
      </>
   )
}
