import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from "./Home.tsx";
import About from "./About.tsx";
import Customer from "./Customer.tsx";
import Product from "./Product.tsx";
import Seller from "./Seller.tsx";
import Data from "./Data.tsx";
import DataLayout from "./DataLayout.tsx";
import ProductDetail from "./ProductDetail.tsx";
import Image from "./Image.tsx";
import NotFound from "./NotFound.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/images/*" element={<Image/>}/>
            <Route path="/data" element={<DataLayout/>}>
                <Route index element={<Data/>}/>
                <Route path="customers" element={<Customer/>}/>
                <Route path="products" element={<Product/>}/>
                <Route path="sellers" element={<Seller/>}/>
                <Route path="products/:id" element={<ProductDetail/>}/>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
