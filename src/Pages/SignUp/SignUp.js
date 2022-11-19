import "./SignUp.css";

import Modal from "react-bootstrap/Modal";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import * as Yup from "yup";
import { Formik } from "formik";
import { signup } from "../../redux/Slice/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/Slice/loginSlice";
const validationSchema = function (values) {
  return Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, `Password has to be at least ${8} characters!`)
      .matches(
        /(?=.*\d)(?=.*[a-z]).{8,}/,
        "Password must contain: numbers, uppercase and lowercase letters\n"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([values.password], "Passwords must match")
      .required("Password confirmation is required"),
    accept: Yup.boolean()
      .required("* required")
      .test("accept", "You have to check the box!", (value) => value === true),
  });
};
const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};
const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};
export default function SignUp(props) {
  const dispatch = useDispatch();
  const onSubmit = (values, { setSubmitting }) => {
    delete values.confirmPassword;
    delete values.accept;
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    dispatch(signup({ values, setSubmitting }));
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div className=" card">
          <div className="row g-0 ">
            <div className="col-md-6 Signup-form">
              <div className="card-body ">
                <h4 className="card-title card-tittle">Sign Up</h4>
              </div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  accept: false,
                }}
                validate={validate(validationSchema)}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  isValid,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="forms">
                      <div className="my-1">
                        <label htmlFor="name" className="form-label">
                          Name*
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          className="form-control"
                          placeholder="Steve Jobs"
                          required
                        />
                      </div>
                      <div className="text-danger">
                        {errors.email && touched.email && errors.email}
                      </div>
                      <div className="my-1">
                        <label htmlFor="email" className="form-label">
                          Email*
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className="form-control"
                          placeholder="jobs@example.com"
                          required
                        />
                      </div>
                      <div className="text-danger">
                        {errors.email && touched.email && errors.email}
                      </div>
                      <div className="my-1">
                        <label htmlFor="password" className="form-label">
                          Password*
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className="form-control"
                          id="password"
                          placeholder="**********"
                        />
                      </div>
                      <div className="text-danger">
                        {errors.password && touched.password && errors.password}
                      </div>
                      <div className="my-1">
                        <label htmlFor="confirmPassword" className="form-label">
                          Re-Type Password*
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          className="form-control"
                          id="confirmPassword"
                          placeholder="**********"
                        />
                      </div>
                      <div className="text-danger">
                        {errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword}
                      </div>
                      <div className="form-check my-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="accept"
                          required
                          // valid={!errors.accept}
                          // invalid={touched.accept && !!errors.accept}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label className="form-check-label" htmlFor="accept">
                          By Clicking the button your are agreeing to term and
                          serveces of our company
                        </label>
                      </div>
                      <div className="text-danger my-1">{errors.accept}</div>
                      <button
                        className="btn btn-primary btn-signup"
                        type="submit"
                        disabled={isSubmitting || !isValid}
                      >
                        {isSubmitting ? "Wait..." : "Sign up"}
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <hr className="line"></hr>
              <div>
                <button
                  className="btn btn-primary btn-signupgoogle"
                  type="submit"
                >
                  <FaGoogle /> Continue with Google
                </button>
                <button
                  className="btn btn-primary btn-signupfacebook"
                  type="submit"
                >
                  <FaFacebook /> Continue with Facebook
                </button>
              </div>
            </div>
            <div className="col-md-6 ">
              <img
                src="https://res.cloudinary.com/dpxrvbatm/image/upload/v1668791238/dominik_khbyta.webp"
                className="img-fluid rounded-start signup-image"
                alt="..."
              />
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={props.onHide}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
