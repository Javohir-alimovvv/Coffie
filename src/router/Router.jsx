import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from '../pages/layout/Layout'
import Home from "../pages/home/Home"

const Router = () => {

    return (
        <>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home/>} />
                </Route>
            </Routes>

        </>
    )
}

export default Router