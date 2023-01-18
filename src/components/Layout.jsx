import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { Navigation } from "./Navigation/Navigation";

export const Layout = () => {
    return (
        <>
            <Navigation />

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
}