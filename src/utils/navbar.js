import React from "react";
import useId from "../hooks/useId";
//import HouseItem from "../components/HouseItem";
// import ProportiesPage from "../pages/Proporties";
//import ProportiesPage from "../pages/Proporties";
//import HomePage from "../pages/Home";
const ProportiesPage = React.lazy(() => import("../pages/Proporties"));
const HomePage = React.lazy(() => import("../pages/Home"));
const HoumeItem = React.lazy(() => import("../pages/HouseItem"));

// import Proporties from "../pages/Proporties";


export const navbar = [
    {
        id: useId,
        element: (
            <React.Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
                <HomePage />
            </React.Suspense>

        ),
        title: "Home",
        path: '/home',
        private: false,
        hidden: false,
    },
    {
        id: useId,
        element: (
            <React.Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
                <ProportiesPage />
            </React.Suspense>
        ),
        title: "Proporties",
        path: '/proporties',
        private: false,
        hidden: false,
    },

    {
        id: useId,
        element: (
            <React.Suspense fallback={<React.Fragment>loading...</React.Fragment>}>
                <HoumeItem />
            </React.Suspense>
        ),
        title: "Single House",
        path: '/proporties/:id',
        private: false,
        hidden: true,
    },

    {
        id: useId,
        element: <h1>Generic sign in</h1>,
        title: "Sign In",
        path: '/sigin',
        private: false,
        hidden: true,
    },
    {
        id: useId,
        element: <h1>Generic sign up</h1>,
        title: "Sign In",
        path: '/sigin',
        private: false,
        hidden: true,
    },

];
