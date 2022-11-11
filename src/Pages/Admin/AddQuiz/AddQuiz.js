import React, { useState } from "react";
import { Card } from "react-bootstrap";
import UplaodImg from "../../../Resuseable/UploadImg";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { Formik } from "formik";
import * as Yup from "yup";
import "./AddQuiz.css";

const validationSchema = function (values) {
  return Yup.object().shape({
    type: Yup.string(),
    title: Yup.string()
      .min(8, `Title has to be at least ${8} characters!`)
      .required("Title is required!"),
    photo: Yup.string(),
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

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

const defaultOptions = [createOption("")];

function AddQuiz() {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [optState, setOptState] = useState(true);
  const onSubmit = (values, { setSubmitting }) => {
    const obj = { ...values, answers: [...answers] };
    console.log("this is obj", obj);
    // dispatch(login({ values, setSubmitting }));
  };
  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 500);
  };
  return (
    <main>
      <Card className="card-container">
        <div className="container">
          <Formik
            initialValues={{
              title: "",
              type: "",
              // answers: [{ text: "", correct: false }],
              photo: null,
            }}
            validate={validate(validationSchema)}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              setFieldValue,
              isSubmitting,
              isValid,
              validateOnMount,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="title">Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="form-control"
                    value={values.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-danger">
                  {errors.title && touched.title && errors.title}
                </div>
                <div className="form-group my-2">
                  <label for="type">Type</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setFieldValue("type", e.value);
                    }}
                    defaultValue={{ value: "visual", label: "Visual" }}
                    name="type"
                    options={[
                      { value: "visual", label: "Visual" },
                      { value: "audio", label: "Audio" },
                      { value: "simple", label: "Simple" },
                    ]}
                  />
                </div>
                <div className="text-danger">
                  {errors.type && touched.type && errors.type}
                </div>
                <div className="form-group my-2">
                  <label for="options">Options</label>
                  <CreatableSelect
                    name="options"
                    isClearable
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    onChange={(newValue) => {
                      setValue(newValue);
                      // console.log("This is opions", options);
                      let array = [];
                      for (const option of options.splice(1, options.length)) {
                        // console.log("thishsishs", option.label);
                        if (newValue.label == option.label) {
                          array.push({ text: option.label, correct: "true" });
                        } else {
                          array.push({ text: option.label, correct: "false" });
                        }
                      }
                      setAnswers(array);
                      setOptState(false);
                    }}
                    onCreateOption={handleCreate}
                    options={options}
                    value={value}
                  />
                </div>
                <div className="form-group my-2">
                  <UplaodImg field={setFieldValue} />
                </div>

                <div className="form-group"></div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting || !isValid || optState}
                >
                  {isSubmitting ? "Wait..." : "Log In"}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </Card>
    </main>
  );
}

export default AddQuiz;
