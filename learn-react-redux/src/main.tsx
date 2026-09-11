import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router";
import {store} from "./store.ts";
import Counter from "./Counter.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/counter" element={
                    <>
                        <Counter/>
                        <Counter/>
                    </>
                } />
            </Routes>
        </BrowserRouter>
    </Provider>
  </StrictMode>
)
