import "./listquiz.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useDispatch, useSelector } from "react-redux";
const ListQuiz = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const [age, setAge] = React.useState("Ten");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <main className="admin-main">
      <div className="select-div">
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Select Type
          </InputLabel>
          <NativeSelect
            defaultValue={"visual"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value="visual">Visual</option>
            <option value="audio">Audio</option>
            <option value="simple">Simple</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div className="container-div">fsafdfsd</div>
    </main>
  );
};
export default ListQuiz;
