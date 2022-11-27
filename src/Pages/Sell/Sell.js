import "./Sell.css";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import UplaodImg from "../../Resuseable/UploadImg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAdvertisement } from "../../redux/Slice/advertisementSlice";
const validationSchema = function (values) {
  return Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    details: Yup.string().required("Details is required!"),
    color: Yup.string().required("Color is required!"),
    city: Yup.string().required("City is required!"),
    gender: Yup.string().required("Gender is required!"),
    age: Yup.number().integer().default(0).required("Name is required!"),
    ecologicalFactor: Yup.string().required("Ecological Factor is required!"),
    price: Yup.number().integer().required("Name is required!"),
    image: Yup.string().required("Image is required!"),
    phone: Yup.string().required("Phone is required!"),
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
export default function Sell() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { logedIn } = useSelector((state) => state.login);
  const onSubmit = (values, { setSubmitting }) => {
    alert(values);
    console.log("values", values);
    dispatch(createAdvertisement({ values, setSubmitting, navigate }));
  };
  return (
    <div className="sell">
      <div className="sell-background">
        <h3 className="sell-ad">Post Your Ad</h3>
        <div className="line-4">
          <hr />
        </div>
        <div className="sell-details">
          <h5>Include Some Details</h5>
          <Formik
            initialValues={{
              name: "",
              details: "",
              color: "",
              city: "",
              gender: "",
              age: "",
              ecologicalFactor: "",
              price: "",
              image: "",
              phone: "",
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
              setFieldValue,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <div className="my-4 col-md-4">
                    <UplaodImg field={setFieldValue} image="image" />
                  </div>
                  <div className="my-1 col-md-8">
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
                      required
                    />
                    <div className="text-danger">
                      {errors.name && touched.name && errors.name}
                    </div>
                    <div className="form-group row">
                      <div className="my-1 col-md-12" style={{ padding: "0" }}>
                        <label htmlFor="details">Details</label>
                        <div class="form-outline mb-4">
                          <textarea
                            class="form-control"
                            id="details"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.details}
                            rows="4"
                          ></textarea>
                          <div className="text-danger">
                            {errors.details &&
                              touched.details &&
                              errors.details}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="color">Color</label>
                    <input
                      type="text"
                      className="form-control"
                      id="color"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.color}
                      placeholder="Blue"
                      required
                    />
                    <div className="text-danger">
                      {errors.color && touched.color && errors.color}
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      placeholder="0300-1234567"
                      required
                    />
                    <div className="text-danger">
                      {errors.phone && touched.phone && errors.phone}
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="gender">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      placeholder="Male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.gender}
                      required
                    />
                    <div className="text-danger">
                      {errors.gender && touched.gender && errors.gender}
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="price">Price</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="validationTooltipUsernamePrepend"
                        >
                          $
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div className="text-danger">
                        {errors.price && touched.price && errors.price}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-4 mb-3">
                    <label for="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      placeholder="Lahore"
                      required
                    />
                    <div className="text-danger">
                      {errors.city && touched.city && errors.city}
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="ecologicalFactor">Ecological Factor</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ecologicalFactor"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ecologicalFactor}
                      placeholder="Cold"
                      required
                    />
                    <div className="text-danger">
                      {errors.ecologicalFactor &&
                        touched.ecologicalFactor &&
                        errors.ecologicalFactor}
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="age">Age</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="ageValidate">
                          Month
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                        aria-describedby="ageValidate"
                        required
                      />
                      <div className="text-danger">
                        {errors.age && touched.age && errors.age}
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <button
                      className="btn btn-primary col-md-3"
                      type="submit"
                      disabled={isSubmitting || !isValid}
                    >
                      {isSubmitting ? "Wait..." : "Post"}
                    </button>
                  </div>
                </div>{" "}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
