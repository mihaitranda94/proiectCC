import React, {useState} from 'react';
import {login} from '../utils/login';
import {useHistory, Link} from 'react-router-dom';

export default function SignIn () {
  const [signinObj, setSigninObj] = useState({
    email: "",
    password: ""
  });

  const history = useHistory ();

  const handleInputChange = (event) => {
    setSigninObj({
      ...signinObj,
      [event.target.name]: event.target.value
    });
  }

  const handleSignin = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify ({
        email: signinObj.email,
        password: signinObj.password
      }),
    };

    const signinRequest = await fetch ('http://localhost:5000/api/login', requestOptions);
    if (signinRequest.status === 200) {
      const user = await signinRequest.json();
      login(user[0].id);
      history.push ('/');
    } 
  };

  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">

          <div className="col-md-12">
            <div className="login d-flex align-items-center py-5">

              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4 mb-5">Sign In</h3>
                    <form onSubmit={handleSignin}>
                      <div className="form-group mb-3">
                        <input
                          name="email"
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleInputChange}
                          value={signinObj.email}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          name="password"
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInputChange}
                          value={signinObj.password}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign in
                      </button>
                      <Link to="/register">
                        <p className="mt-3">Don't you have an account? To Register</p>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
