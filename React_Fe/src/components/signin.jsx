import React from 'react';
import {login} from '../utils/login';
import {useHistory, Link} from 'react-router-dom';

export default function SignIn () {
  const history = useHistory ();

  const handleSignIn = () => {
    if (true) {
      login ();
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
                    <form>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        onClick={handleSignIn}
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
