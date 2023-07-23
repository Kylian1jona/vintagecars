    import React from "react";
import Navbar from "./Navbar";
    function Form(){
return(
    <>
    <Navbar/>
          <form method="post" className="was-validated">
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
                <div className="form-check mb-3" style={{width:"400px"}}>
                    <label for="remember" className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" required/> Do you agree to our terms and condition?
                    <div className="valid-feedback">Thank you for agreeing our terms and conditions</div>
                    <div className="invalid-feedback">Hey, You dont agree our terms and conditions? Agree it otherwise we will kick you out </div>
                    </label>
                </div>
                
            <button type="submit" className="btn btn-info">Submit</button>
            </form>
                      <form method="post" className="was-validated">
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="text" className="form-label">Bride Name</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter Bride Name" name="text" required/>
                    <div className="valid-feedback">Correct Bride Name</div>
                    <div className="invalid-feedback">Please enter your Bride Name</div>
                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="text" className="form-label">Groom Name</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter Groom Name" name="text" required/>
                    <div className="valid-feedback">Correct Groom Name</div>
                    <div className="invalid-feedback">Please enter your Groom Name</div>
                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="date" className="form-label">Bride's Date of Birth</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter Groom Date of Birth" name="date" required/>
                    <div className="valid-feedback">Correct Bride Date of Birth</div>
                    <div className="invalid-feedback">Please enter your Bride's Date Birth</div>
                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="date" className="form-label">Groom Date of Birth</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter Groom Date of Birth" name="date" required/>
                    <div className="valid-feedback">Correct Groom Date of Birth</div>
                    <div className="invalid-feedback">Please enter your Groom's Date Birth</div>
                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="date" className="form-label">Date of Marrige</label>
                    <input type="date" className="form-control" id="text" placeholder="Enter Date of Marrige" name="date" required/>
                    <div className="valid-feedback">Valid Date of Marrige</div>
                    <div className="invalid-feedback">Invalid Date of Marrige  </div>
                </div>
                <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="text" className="form-label">Address of Marrige</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter Address of Marrige" name="text" required/>
                    <div className="valid-feedback">Correct Address</div>
                    <div className="invalid-feedback">Incorrect Address</div>
                    </div>
                    <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="text" className="form-label">State Of Marrige</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter State Of Marrige" name="text" required/>
                    <div className="valid-feedback">Correct State Of Marrige</div>
                    <div className="invalid-feedback">Incorrect State Of Marrige</div>
                    </div> 
                    <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="text" className="form-label">Country Of Marrige</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter Country Of Marrige" name="text" required/>
                    <div className="valid-feedback">Correct Country Of Marrige</div>
                    <div className="invalid-feedback">Incorrect Country Of Marrige</div>
                    </div> 
                    <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="number" className="form-label">Registration Number</label>
                    <input type="number" className="form-control" id="number" placeholder="Registration Number" name="number" required/>
                    <div className="valid-feedback">Correct Registration Number</div>
                    <div className="invalid-feedback">Incorrect Registration Number</div>
                    </div> 
                    <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="number" className="form-label">Mobile Number</label>
                    <input type="number" className="form-control" id="number" placeholder="Enter Mobile Number" name="number" required/>
                    <div className="valid-feedback">Correct Mobile Number</div>
                    <div className="invalid-feedback">Incorrect Mobile Number</div>
                    </div>
                    <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="text" className="form-label">Religion</label>
                    <input type="text" className="form-control" id="number" placeholder="Religion" name="text" required/>
                    <div className="valid-feedback">Correct Religion</div>
                    <div className="invalid-feedback">Incorrect Religion</div>
                    </div> 
                    <div className="mb-3 mt-3" style={{width:"400px"}}>
                    <label for="file" className="form-label">Upload Documents</label>
                    <input type="file" className="form-control" id="number" placeholder="Upload Documents" name="file" required/>
                    <div className="valid-feedback">Correct Uploaded Documents</div>
                    <div className="invalid-feedback">Incorrect Uploaded Documents</div>
                    </div>
                <div className="form-check mb-3" style={{width:"400px"}}>
                    <label for="remember" className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" required/> Do you agree to our terms and condition?
                    <div className="valid-feedback">Thank you for agreeing our terms and conditions</div>
                    <div className="invalid-feedback">Hey, You dont agree our terms and conditions? Agree it otherwise we will kick you out </div>
                    </label>
                </div>
                
            <button type="submit" className="btn btn-info">Submit</button>
            <button type="reset" className="btn btn-danger">Reset</button>
            </form>
            
    </>
);
    }
    export default Form;