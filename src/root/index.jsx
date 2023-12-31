import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { navbar } from "../utils/navbar";
import NavbarPage from "../components/navbar";

export const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavbarPage />}>

                    {
                        navbar.map(({ path, element, id }) => {
                            return <Route key={id} path={path} element={element} />
                        })
                    }
                </Route>
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                <Route path='/' element={<Navigate to={'/home'} />} />
            </Routes>

        </BrowserRouter>
    )
};
export default Root;