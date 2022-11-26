import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import UplaodImg from "../../../Resuseable/UploadImg";
import UploadAudio from "../../../Resuseable/UploadAudio";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { Formik } from "formik";
import * as Yup from "yup";
import "./AddQuiz.scss";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz } from "../../../redux/Slice/quizSlice";
import Sidebar from "../../../Components/Sidebar/SidebarAdmin";
import Navbar from "../../../Components/NavBar/NavbarAdmin";
import Container from "@mui/material/Container";
const validationSchema = function (values) {
  return Yup.object().shape({
    type: Yup.string(),
    text: Yup.string()
      .min(8, `Title has to be at least ${8} characters!`)
      .required("Title is required!"),
    media: Yup.string(),
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
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [optState, setOptState] = useState(true);
  const [type, setType] = useState("visual");
  // useEffect(()=>{

  // },[])
  const onSubmit = (values, { setSubmitting }) => {
    delete values.type;
    if (type == "simple") {
      delete values.media;
    }
    const data = { ...values, answers: [...answers], type: type };
    console.log("this is data", data);
    dispatch(addQuiz({ data, setSubmitting }));
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
    <div className="admin-main">
      <div className="container-div">
        <Formik
          initialValues={{
            text: "",
            type: "",
            // answers: [{ text: "", correct: false }],
            media: null,
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
              <div className="form-group my-2">
                <label for="type">Type</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  onChange={(e) => {
                    setFieldValue("type", e.value);
                    setType(e.value);
                    if (e.value == "simple") {
                      setFieldValue("media", "");
                    }
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
              <div className="form-group">
                <label for="text">Title</label>
                <input
                  id="text"
                  name="text"
                  type="text"
                  className="form-control"
                  value={values.text}
                  onChange={handleChange}
                />
              </div>
              <div className="text-danger">
                {errors.text && touched.text && errors.text}
              </div>

              <div className="form-group my-2">
                <label for="options">Options</label>
                <CreatableSelect
                  name="options"
                  // isClearable
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  onChange={(newValue) => {
                    setValue(newValue);
                    // console.log("This is opions", options);
                    let array = [];
                    for (const option of options.splice(1, options.length)) {
                      // console.log("thishsishs", option.label);
                      if (newValue.label == option.label) {
                        array.push({
                          text: option.label,
                          correct: "true",
                        });
                      } else {
                        array.push({
                          text: option.label,
                          correct: "false",
                        });
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
                {type == "visual" ? (
                  <UplaodImg field={setFieldValue} image="media" />
                ) : (
                  type == "audio" && (
                    <UploadAudio field={setFieldValue} audios="media" />
                  )
                )}
              </div>

              <div className="form-group"></div>
              <button
                className="btn btn-primary my-4"
                type="submit"
                disabled={isSubmitting || !isValid || optState}
              >
                {isSubmitting ? "Wait..." : "Submit"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddQuiz;
