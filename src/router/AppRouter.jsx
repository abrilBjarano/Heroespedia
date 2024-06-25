import { Navigate, Route, Routes } from "react-router-dom";

import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DCPage } from "../heroes/pages/DCPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {


    return (
      <>
        <Routes>
          <Route path="marvel" element={ <MarvelPage/> } />
          <Route path="dc" element={ <DCPage /> } />

          <Route path="login" element={ <LoginPage /> } />

          <Route path="/*" element={ <Navigate to='marvel' /> } />
        </Routes>
      </>
    )
}
