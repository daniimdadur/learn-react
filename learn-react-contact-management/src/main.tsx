import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout.tsx";
import UserRegister from "./components/user/UserRegister.tsx";
import UserLogin from "./components/user/UserLogin.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/register" element={<UserRegister/>}/>
                  <Route path="/login" element={<UserLogin/>}/>
              </Route>
              <Route path="/dashboard">

              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
