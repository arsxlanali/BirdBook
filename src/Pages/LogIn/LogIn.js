import "./LogIn.css";
import Modal from "react-bootstrap/Modal";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/Slice/loginSlice";
const validationSchema = function (values) {
  return Yup.object().shape({
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

export default function LogIn(props) {
  // console.log("props", props);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.login.isOpen);
  const onSubmit = (values, { setSubmitting }) => {
    dispatch(login({ values, setSubmitting }));
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div className="card">
          <div className="row g-0 ">
            <div className="col-md-6 Signup-form">
              <div className="card-body ">
                <h4 className="card-title card-tittle">Log In</h4>
              </div>
              <Formik
                initialValues={{ email: "", password: "" }}
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
                      <div className="form-check my-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        className="btn btn-primary btn-signup"
                        type="submit"
                        disabled={isSubmitting || !isValid}
                      >
                        {isSubmitting ? "Wait..." : "Log In"}
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
            <div className="col-md-6">
              <img
                src="https://res.cloudinary.com/dpxrvbatm/image/upload/v1668791238/dominik_khbyta.webp"
                className="img-fluid rounded-start signup-image"
                alt="..."
              />
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={props.onHide}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
