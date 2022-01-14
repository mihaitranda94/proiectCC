import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';

export default function Register() {
  const [registerObj, setRegisterObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: ""
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    setRegisterObj({
      ...registerObj,
      [event.target.name]: event.target.value
    });
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify ({
        first_name: registerObj.firstName,
        last_name: registerObj.lastName,
        email: registerObj.email,
        password: registerObj.password,
        phone: registerObj.phoneNumber
      }),
    };

    const registerRequest = await fetch ('api/users/register', requestOptions);
    if (registerRequest.status === 200) {
      history.push ('/signin');
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
                    <form onSubmit={handleSignUp}>
                      <div className="form-group mb-3">
                        <input
                          name="firstName"
                          id="firstName"
                          type="text"
                          placeholder="First name"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleInputChange}
                          value={registerObj.firstName}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          name="lastName"
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleInputChange}
                          value={registerObj.lastName}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          name="email"
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleInputChange}
                          value={registerObj.email}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          name="phoneNumber"
                          id="phoneNumber"
                          type="text"
                          placeholder="Phone number"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleInputChange}
                          value={registerObj.phoneNumber}
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
                          value={registerObj.password}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign in
                      </button>
                      <Link to="/signin">
                        <p className="mt-3">
                          Already have and account? To Sign In
                        </p>
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
