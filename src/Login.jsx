import React from "react";
import Navbar from "./Navbar";
function Login(){
    return(
        <>

        <Navbar/>
        <form method="post" className="was-validated">
            <div>
            <div className="mb-3 mt-3" style={{width:"400px"}}>
                <label for="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required/>
                    <div className="valid-feedback">Correct Email</div>
                    <div className="invalid-feedback">Please enter your Email</div>
                </div>
                <div className="mb-3" style={{width:"400px"}}>
                    <label for="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
                    <div className="valid-feedback">Correct pasword</div>
                    <div className="invalid-feedback">Please enter your password</div>
                </div>
            </div>
            <div className="form-check mb-3" style={{width:"400px"}}>
                    <label for="remember" className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" required/> Do you agree to our terms and condition?
                    <div className="valid-feedback">Thank you for agreeing our terms and conditions</div>
                    <div className="invalid-feedback">Hey, You dont agree our terms and conditions? Agree it otherwise we will kick you out </div>
                    </label>
                </div>
        </form>
        </>
    );
}
export default Login;