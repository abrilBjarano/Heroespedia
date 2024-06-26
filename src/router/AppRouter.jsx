import { Navigate, Route, Routes } from "react-router-dom";

import { MarvelPage, DCPage } from "../heroes";
import { LoginPage } from "../auth";

import { Navbar } from "../ui";


export const AppRouter = () => {


    const routes = [
      { path: '/marvel', name: 'Marvel' },
      { path: '/dc', name: 'DC' },
    ]


    return (
      <>

        <Navbar routes={ routes } />

        <Routes>
          <Route path="marvel" element={ <MarvelPage/> } />
          <Route path="dc" element={ <DCPage /> } />
          <Route path="login" element={ <LoginPage /> } />

          <Route path="/*" element={ <Navigate to='marvel' /> } />
        </Routes>
      </>
    )
}
