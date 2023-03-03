export const validateName = (name) => {
    const regexName = new RegExp(/[a-zA-Z][a-zA-Z]+[a-zA-Z]$/)
    return regexName.test(name);
}

export const validateEmail = (email) => {
    const regexName = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    return regexName.test(email);
}

export const validatePassword = (pass) => {
  const regexName = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
  return regexName.test(pass);
};

export const validateInstitute = (institute) => {
  return (institute === "IIST" || institute === "IIP" || institute === "IIMR");
}


export const  validateMobileNumber= (mobileNumber) => {
  // Remove any non-digit characters from the string
  const cleanedNumber = mobileNumber.replace(/\D/g, '');
  // Check if the cleaned string is a valid mobile number
  if (cleanedNumber.length === 10 && ['7', '8', '9'].includes(cleanedNumber[0])) {
    // If it is, parse it as an integer and return it
    return parseInt(cleanedNumber, 10);
  } else {
    // If it's not a valid mobile number, throw an error or return a default value
    throw new Error('Invalid mobile number provided');
  }
}