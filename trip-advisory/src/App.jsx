import React from 'react';

function App() {

  const password_toggle = {
    position: 'relative'
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mb-4">Login</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-outline mb-4">
                <label className="form-label" for="loginEmail">
                  Email address
                </label>
                <input type="email" id="loginEmail" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <div className="password-toggle" style={password_toggle}>
                  <label className="form-label" for="loginPassword">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control"
                    />
                    <button
                      id="togglePassword"
                      className="input-group-text"
                      type="button" 
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      checked
                      aria-describedby="loginCheckHelpText"
                    />
                    <button
                      id="forgotPassword"
                      className="btn btn-link btn-floating mx-1"
                      type="button"
                    >
                      Forgot password?
                    </button>
                    <label className="form-check-label" for="loginCheck">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>

              <p className="text-center mt-4">
                Don't have an account?{" "}
                <a href="#signup" className="text-decoration-none">
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
