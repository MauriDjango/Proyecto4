

class Validation {
    __nameRegex = /^[a-zA-Z'-]+$/;
    __emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    __phoneRegex = /^(\+\d{1,})?(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4})$/;
    __usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    __passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    __dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    isValidName = (firstName) => {
        return this.__nameRegex.test(firstName);
    };

    isValidEmail = (email) => {
        return this.__emailRegex.test(email);
    };

    isValidPhone = (phoneNumber) => {
        return this.__phoneRegex.test(phoneNumber);
    };

    isValidUsername = (username) => {
        return this.__usernameRegex.test(username);
    };

    isValidPassword = (password) => {
        return this.__passwordRegex.test(password);
    };

// Adjust your existing date format regex

// Example validation function
    isValidDateOfBirth(dateString) {
        return this.__dateRegex.test(dateString);
    }

    validForm(formData) {
      console.log("validForm", formData)
        const requiredFields = ['firstName', 'lastName', 'email', 'dob', 'password', 'passwordMatch', 'gender', 'agreeTerms'];

        return requiredFields.every(field => formData[field]);
    }
}


export const validation = new Validation