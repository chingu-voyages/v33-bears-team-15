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
  username: Yup.string()
    .lowercase('Username must be lowercase only!')
    .min(3, 'Username must be at least 3 characters long!')
    .max(12, 'Username must be at most 12 characters long!')
    .required('Username is a required field!')
    .strict(),
  fullName: Yup.string()
    .min(4, 'Full name must be at least 4 characters long!')
    .max(54, 'Password must be 54 characters at most!')
    .required('Full name is a required field!'),
});

export const CREATE_BOOK_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Name must have at least 5 characters!')
    .max(256, 'Name must be at most 256 characters!')
    .required('Name must not be empty!'),
  description: Yup.string()
    .min(54, 'Description must have at least 54 characters!')
    .max(4096, 'Description must be at most 4096 characters!')
    .required('Description must not be empty!'),
  isbn: Yup.number().required('ISBN must not be empty!'),
  cover: Yup.mixed().required('Cover image is required'),
  file: Yup.mixed().required('Book PDF file is required'),
});

export const CREATE_CATEGORY_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must have at least 3 characters!')
    .max(256, 'Name must be at most 256 characters!')
    .required('Name must not be empty!'),
  description: Yup.string()
    .min(20, 'Description must have at least 20 characters!')
    .max(2048, 'Description must be at most 2048 characters!')
    .required('Description must not be empty!'),
});

export const CREATE_AUTHOR_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must have at least 3 characters!')
    .max(256, 'Name must be at most 256 characters!')
    .required('Name must not be empty!'),
  biography: Yup.string()
    .min(20, 'Description must have at least 20 characters!')
    .max(4096, 'Description must be at most 4096 characters!')
    .required('Description must not be empty!'),
  avatar: Yup.mixed().required('Avatar image is required'),
});
