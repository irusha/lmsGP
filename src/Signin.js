import './App.css';
import './css/Signin.css'

function Signin() {
  return (
    <div>
      <div className="body"></div>
      <nav className="navbar">
        <div className="logo">LMS</div>
        <ul className="nav-links">
          <div className="menu">
            <li><a href="/">Sign In</a></li>
            <li><a href="/">Sign Up</a></li>
            <li id="last-link"><a href="/">Contact Us</a></li>
          </div>
        </ul>
      </nav>
      <div>
        <div className="signin-body col-11">
          <h1 className="mainh1">Learning has never been this easier</h1>
        </div>
        <div className="signin-form col-5">
          <div>
            <h1>Sign In</h1>
            <br></br>
            <form>
              <label for="fname">Username:</label>
              <br></br>
              <input className="form-input" type="text" id="fname" name="fname" value="John"></input>
              <br></br>
              <br></br>
              <label for="lname">Password:</label>
              <br></br>
              <input className="form-input" type="password" id="password" name="password" value="John"></input>
              <br></br>
              <br></br>
              <input className="btn btn-light" type="submit" value="Submit"></input>
              <br></br>
              <br></br>
              Not a member? &nbsp; <a href="#" id="signup_url"
              >Sign Up!</a>
            </form>
            <br></br>
          </div>

        </div>
      </div>


    </div>
  );
}

export default Signin;
