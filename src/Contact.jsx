import React from "react";
import Navbar from "./Navbar";
function Contact()
{
    return(
<>
<Navbar/>
<center>
  <div className="card-group">
 <div className="card">
                    <div className="card-body text-center">
       
<p>


500 Terry Francine Street
<br/>
San Francisco, CA 94158

 <br/>
<br/>
info@mysite.com
<br/>
<br/>
Tel: 123-456-7890
<br/>
<br/>
<br/>
OPENING HOURS:
<br/>
<br/>
Mon - Fri: 7am - 10pm<br/>

​​Saturday: 8am - 10pm<br/>

​Sunday: 8am - 11pm<br/>
<br/>
</p>
<br/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form method="post">
                            <label for="fname">First Name</label><br/>
                            <input type="text" name="fname"/>
                            <br/>
                            <label for="lname">Last Name</label><br/>
                            <input type="text" name="lname"/>
                            <br/>
                            <label for="em">Email</label><br/>
                            <input type="email" name="em"/>
                            <br/>
                            <label for="sub">Subject</label><br/>
                            <input type="text" name="sub"/>
                            <br/>
                            <label for="msg">Message</label><br/>
                            <textarea rows="4" cols="30"></textarea>
                            <br/>
                        <input type="submit" value="submit"/>
                        </form>
  </div>
  </div>
  </div>
  </center>
  
</>
    );
}
export default Contact;