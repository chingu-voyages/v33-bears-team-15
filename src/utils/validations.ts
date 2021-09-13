import * as Yup from 'yup';

const passwordValidation = Yup.string()
  .min(8, 'Password must be at least 8 characters long!')
  .max(28, 'Password must be 28 characters at most!')
  .test({
    name: 'minNumber',
    message: 'Password must contain at least one number!',
    test: (val) => (val.match(/[0-9]/g) || []).length >= 1,
  })
  .test({
    name: 'minUppercase',
    message: 'Password must contain at least one uppercase character!',
    test: (val) => (val.match(/[A-Z]/g) || []).length >= 1,
  })
  .test({
    name: 'minLowercase',
    message: 'Password must contain at least one lowercase character!',
    test: (val) => (val.match(/[a-z]/g) || []).length >= 1,
  })
  .test({
    name: 'minSymbol',
    message: 'Password must contain one special character!',
    test: (val) => (val.match(/[^a-zA-Z0-9\s]/g) || []).length >= 1,
  })
  .required('Password is a required field!');

const emailValidation = Yup.string()
  .email('Email address must have a valid format!')
  .required('Email address is a required field!');

export const SIGNIN_SCHEMA = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export const SIGNUP_SCHEMA = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
  fullName: Yup.string()
    .min(4, 'Full name must be at least 4 characters long!')
    .max(54, 'Password must be 54 characters at most!')
    .required('Full name is a required field!'),
});
