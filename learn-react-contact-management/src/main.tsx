import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout.tsx";
import UserRegister from "./components/user/UserRegister.tsx";
import UserLogin from "./components/user/UserLogin.tsx";
import DashboardLayout from "./components/DashboardLayout.tsx";
import UserProfile from "./components/user/UserProfile.tsx";
import UserLogout from "./components/user/UserLogout.tsx";
import ContactCreate from "./components/contact/ContactCreate.tsx";
import ContactListEx from "./components/contact/ContactListEx.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/register" element={<UserRegister/>}/>
                  <Route path="/login" element={<UserLogin/>}/>
              </Route>
              <Route path="/dashboard" element={<DashboardLayout/>}>
                  <Route path="users">
                      <Route path="profile" element={<UserProfile/>}/>
                      <Route path="logout" element={<UserLogout/>}/>
                  </Route>

                  <Route path="contacts">
                      <Route index element={<ContactListEx/>}/>
                      <Route path="create" element={<ContactCreate/>}/>
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
