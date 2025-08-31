import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
  //  console.log(error);
    
    return (
        <div>
            <h1>OOps! An error Occurred. </h1>
            {<h2>error && {error.data}</h2>}
            <NavLink to='/'><button>Go Back...</button></NavLink>
        </div>
    )
}