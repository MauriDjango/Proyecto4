import React, { useState } from 'react';


const LoginModal = ({ setLoginInfo, closeLoginModal, showLoginModal, openRegisterModal }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginInfo(loginData);
    closeLoginModal();
  };

  console.log("LoginModalComponent, ", showLoginModal
  )

  return (
    <>
      {showLoginModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
              </div>
              <div className="modal-body text-center">
                <form onSubmit={handleLoginSubmit}>
                  <div className="d-flex flex-column align-items-center">
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" id="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary">Log In</button>
                    </div>
                  </div>
                </form>
                <div className="mb-2">Or sign in with:</div>
                <div className="me-2">
                  <button className="btn btn-danger m-1">Google</button>
                </div>
                <div className="me-2">
                  <button className="btn btn-info m-1">Twitter</button>
                </div>
                <div className="d-flex flex-column">
                  <div className="mt-2">
                    Don't have an account? <br/>
                  </div>
                  <button type="button" className="btn btn-link" onClick={openRegisterModal}>
                    Register here
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeLoginModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
