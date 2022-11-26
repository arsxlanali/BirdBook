import { useState } from "react";
import "./Quiz.css";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import { increaseScore, nextQustion } from "../../redux/Slice/quizSlice";
export default function QuizCard({
  options,
  text,
  setCurrentQuestion,
  currentQuestion,
  length,
  media,
  type,
}) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  return (
    <div className="quizQuestion">
      {type == "visual" && (
        <img src={media} alt="A bird pic for Quiz" width={300} height={200} />
      )}
      {type == "audio" && (
        <audio controls className="audio-height">
          <source src={media} type="audio/ogg" />
        </audio>
      )}

      <FormControl>
        <h5 id="demo-radio-buttons-group-label">{text}</h5>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={() => setDisable(false)}
        >
          {options.map((option) => {
            return (
              <FormControlLabel
                value={option.text}
                control={<Radio />}
                label={option.text}
                key={option._id}
                onClick={() => {
                  setDisable(false);
                  setSelectedValue(option.correct);
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        style={{ position: "absolute", right: 50, bottom: 50, width: 100 }}
        disabled={disable}
        onClick={() => {
          if (currentQuestion < length) {
            setCurrentQuestion(currentQuestion + 1);
            if (selectedValue) {
              dispatch(increaseScore());
            }
            setDisable(true);
          }
        }}
      >
        <span class="cil-contrast btn-icon mr-2"></span>
        Next
      </button>
    </div>
  );
}
