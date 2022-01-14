import React from 'react';
import {login} from '../utils/login';
import {useHistory, Link} from 'react-router-dom';

export default function Register () {
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
                    <h3 className="display-4 mb-5">Register</h3>
                    <form>
                      <div className="form-group mb-3">
                        <input
                          id="firstName"
                          type="text"
                          placeholder="First name"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
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
                          id="phoneNumber"
                          type="text"
                          placeholder="Phone number"
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
                      <Link to="/signin">
                        <p className="mt-3">Already have and account? To Sign In</p>
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
