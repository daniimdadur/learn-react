import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from "./Home.tsx";
import About from "./About.tsx";
import Customer from "./Customer.tsx";
import Product from "./Product.tsx";
import Seller from "./Seller.tsx";
import Data from "./Data.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/data">
                <Route index element={<Data/>}/>
                <Route path="customers" element={<Customer/>}/>
                <Route path="products" element={<Product/>}/>
                <Route path="sellers" element={<Seller/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
