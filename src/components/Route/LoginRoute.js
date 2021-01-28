import React from "react";
import { Route, Redirect } from "react-router-dom";
 const LoginRoute = ({ component: Component , ...rest})=>{
    return (
        <Route {...rest}  component={(props)=>(
            <div>
                <Component {...props} />
            </div>
        )}
        />
    )
}
export default LoginRoute