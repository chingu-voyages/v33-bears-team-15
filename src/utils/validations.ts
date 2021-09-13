import * as Yup from "yup";

export const SIGNUP_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email("Email address has a wrong format")
    .required("Email address is a required field"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long!")
    .max(24, "Password must be 24 characters at most!")
    .required("Password is a required field"),
});
