import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { DCPage, MarvelPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes = () => {

   const routesHeroes = [
      { path: '/marvel', name: 'Marvel' },
      { path: '/dc', name: 'DC' },
      { path: '/search', name: 'Search' },
    ];

   return (
      <>
         <Navbar routes={ routesHeroes } />

         <div className="container">
            <Routes>
               <Route path="marvel" element={ <MarvelPage/> } />
               <Route path="dc" element={ <DCPage /> } />
               <Route path="search" element={ <SearchPage /> } />
               <Route path="hero" element={ <HeroPage /> } />

               <Route path="/*" element={ <Navigate to='marvel' /> } />
            </Routes>
         </div>
      </>
   )
}
