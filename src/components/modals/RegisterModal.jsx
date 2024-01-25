import React, { useEffect, useRef, useState } from 'react';
import { validation } from '../../validation/Validation';

const RegisterModal = ({ registerUser, closeRegisterModal, showRegisterModal, userData }) => {
  const [formData, setFormData] = useState({
  });


  const addAlert = (target) => {
    const alertId = `${target.id}.alert`;
    const alert = document.getElementById(alertId);

    // Remove existing alert if it exists
    if (alert) {
      alert.remove();
    }

    // Create a new alert element
    const fieldAlert = document.createElement("p");
    fieldAlert.innerText = `Invalid`;
    fieldAlert.classList.add('alert', 'alert-danger', 'text-center');    fieldAlert.setAttribute("id", alertId);
    // Set the initial visibility state
    fieldAlert.style.display = 'block';
    target.parentElement.appendChild(fieldAlert);
  }

// Removes an alert for invalid form fields
  const removeAlert = (form) => {
    const alert = document.getElementById(`${form.id}.alert`);
    if (alert !== null) {
      alert.remove();
    }
  }

  const handleValidField = (target, fieldValue) => {
    removeAlert(target);
    formData[target.id] = fieldValue;
    if (userData.hasOwnProperty(target.id)) {
      userData[target.id] = fieldValue
    }
  };

  const handleInvalidField = (target) => {
    addAlert(target);
    formData[target.id] = null;
  };

    const formInputHandler = (formData, target) => {
        const fieldValue = target.type === "checkbox" ? target.checked : target.value;
        const fieldId = target.id;

        switch (fieldId) {
            case "firstName":
            case "lastName":
                if (validation.isValidName(fieldValue)) {
                    handleValidField(target, fieldValue);
                } else {
                    handleInvalidField(target);
                }
                break;
            case "email":
                if (validation.isValidEmail(fieldValue)) {
                    handleValidField(target, fieldValue);
                } else {
                    handleInvalidField(target);
                }
                break;
            case "dob":
                if (validation.isValidDateOfBirth(fieldValue)) {
                    handleValidField(target, fieldValue);
                } else {
                    handleInvalidField(target);
                }
                break;
            case "maleGender" || "femaleGender":
                const maleRadio = document.getElementById("maleGender");
                const femaleRadio = document.getElementById("femaleGender");

                if (maleRadio.checked || femaleRadio.checked) {
                    // At least one gender option is selected
                    handleValidField(target, fieldValue);
                    formData.gender = 'Yes'
                } else {
                    // No gender option is selected
                    handleInvalidField(target);
                }
                break;
            case "agreeTerms":
                if (fieldValue) {
                    // Checkbox is checked
                    handleValidField(target, fieldValue);
                } else {
                    // Checkbox is not checked
                    handleInvalidField(target);
                }
                break;
            case "password":
                if (validation.isValidPassword(fieldValue)) {
                    handleValidField(target, fieldValue);
                } else {
                    handleInvalidField(target);
                }
                break;
            case "passwordMatch":
                if (fieldValue === formData.password) {
                    handleValidField(target, fieldValue);
                } else {
                    handleInvalidField(target);
                }
                break;
            // Add cases for other fields as needed
        }
    };


  const enabledClass = 'btn btn-primary w-full mt-5 p-2 text-white uppercase font-bold';
  const disabledClass = 'btn btn-secondary w-full mt-5 p-2 text-white uppercase font-bold';

  const toggleSubmit = (submitButton) => {
    if (validation.validForm(formData)) {
      submitButton.removeAttribute('disabled');
      submitButton.setAttribute('class', enabledClass);
    } else {
      submitButton.setAttribute('disabled', true);
      submitButton.setAttribute('class', disabledClass);
    }
  };

  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    dob: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    maleGender: useRef(null),
    femaleGender: useRef(null),
    agreeTerms: useRef(null)
  };

  useEffect(() => {
    const submitButton = document.getElementById('create-account_button');

    // Assign the actual HTML elements to the refs after the component is rendered
    inputRefs.firstName.current = document.getElementById("firstName");
    inputRefs.lastName.current = document.getElementById("lastName");
    inputRefs.email.current = document.getElementById("email");
    inputRefs.dob.current = document.getElementById("dob");
    inputRefs.password.current = document.getElementById("password");
    inputRefs.confirmPassword.current = document.getElementById("passwordMatch");
    inputRefs.maleGender.current = document.getElementById("maleGender");
    inputRefs.femaleGender.current = document.getElementById("femaleGender");
    inputRefs.agreeTerms.current = document.getElementById("agreeTerms")


    if (submitButton) {
      loadEventListeners();
      toggleSubmit(submitButton)
    }

    function loadEventListeners() {
      Object.values(inputRefs).forEach(ref => {
        ref.current.addEventListener('input', (e) => {
          formInputHandler(formData, e.target);
          toggleSubmit(submitButton);
        });
      });

      submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        await registerUser(formData);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          dob: '',
          password: '',
          passwordMatch: '',
          gender: '',
          agreeTerms: ''
        })
      });
    }
  }, [formData]);

  return (
    <>
      {showRegisterModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register</h5>
              </div>
              <div className="modal-body text-center">
                <form>
                  <div className="input-fields">
                    <div className="input-field">
                      <label htmlFor="firstName">First name</label>
                      <input type="text" id="firstName" className="form-control" placeholder="Enter your first name" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="lastName">Last name</label>
                      <input type="text" id="lastName" className="form-control" placeholder="Enter your last name" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" className="form-control" placeholder="dd/mm/yyyy" />
                    </div>
                    <div className="input-field">
                        <input type="radio" id="maleGender" name="gender" value="male" className="form-check-input m-2" />
                        <label htmlFor="genderMale" className="form-check-label">Male</label>

                        <input type="radio" id="femaleGender" name="gender" value="female" className="form-check-input m-2" />
                        <label htmlFor="genderFemale" className="form-check-label">Female</label>
                    </div>
                    <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input type="text" id="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="passwordMatch">Confirm Password</label>
                      <input type="text" id="passwordMatch" className="form-control" placeholder="Confirm your password" />
                    </div>
                  </div>
                  <div className="terms-of-service-and-privacy-policy mt-2">
                    <div id="by-creating-an-account-you-agree-to-our">
                      By creating an account, you agree to our{" "}
                    </div>
                    <div className="terms-of-service">
                      <a href="#">Terms of Service</a>
                    </div>
                    <div className="and">and </div>
                    <div className="privacy-policy">
                      <a href="#">Privacy Policy</a>
                    </div>
                    <div className="input-field">
                        <input type="checkbox" id="agreeTerms" className="form-check-input" />
                        <label htmlFor="agreeTerms" className="form-check-label">I agree to the terms</label>
                    </div>
                  </div>
                  <div className="button-create-account">
                    <button type="submit" className="btn btn-primary m-2" id="create-account_button">Create Account</button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeRegisterModal}>
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

export default RegisterModal;
