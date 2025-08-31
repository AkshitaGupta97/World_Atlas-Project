import { Outlet } from "react-router-dom"
import { Footers } from "./UI/Footer"
import { Headers } from "./UI/Header"

export const AppLayout = () => {
    return (
        <div>
            <Headers/>
            <Outlet/>
            <Footers/>
        </div>
    )
}