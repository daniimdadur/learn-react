import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router";
import {store} from "./store.ts";
import Counter from "./Counter.tsx";
import ListTodo from "./ListTodo.tsx";
import AddTodo from "./AddTodo.tsx";
import UpdateTodo from "./UpdateTodo.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={"/todo-list"} element={<ListTodo/>}/>
                <Route path={"/todo-list/add"} element={<AddTodo/>}/>
                <Route path={"/todo-list/:id/edit"} element={<UpdateTodo/>}/>
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
