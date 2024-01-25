import React from 'react'


const SuccessRegisterModal = ({showSuccessRegisterModal, closeSuccessRegisterModal}) => {

  return (
    <>
      {showSuccessRegisterModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
              </div>
              <div className="modal-body text-center">
                <h3>Your account has been created successfully!</h3>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeSuccessRegisterModal}>
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

export default SuccessRegisterModal