import React from "react"
import './Quiz.css'

export default function QuizCard(props){
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
    
        props.setAnswer((prevFormData) => {
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
          }
        })
      }
      
    return(
        <div className="quizQuestion">
            <img
        src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRAykdyc8nO0K8By_C9EzcJ9kHtXNt-k_B2L_68o0z2W7JdqpFE0C5Zn7wXLiQ8YytYIGB7XK5qVIKTc5Y"
        alt="bird pic"
      />
            <form>
                <h5>{props.text}</h5>
                <fieldset className="Quiz--options">
                    <div>
                        <input
                            type="radio"
                            id={props.options[0].text}
                            name={props.index}
                            value={props.options[0].text}
                            checked={props.answer[props.index] === props.options[0].text}
                            onChange={handleChange}
                        />
                        <label htmlFor={props.options[0].text}>{props.options[0].text}</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id={props.options[1].text}
                            name={props.index}
                            value={props.options[1].text}
                            checked={props.answer[props.index] === props.options[1].text}
                            onChange={handleChange}
                        />
                        <label htmlFor={props.options[1].text}>{props.options[1].text}</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id={props.options[2].text}
                            name={props.index}
                            value={props.options[2].text}
                            checked={props.answer[props.index] === props.options[2].text}
                            onChange={handleChange}
                        />
                        <label htmlFor={props.options[2].text}>{props.options[2].text}</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id={props.options[3].text}
                            name={props.index}
                            value={props.options[3].text}
                            checked={props.answer[props.index] === props.options[3].text}
                            onChange={handleChange}
                        />
                        <label htmlFor={props.options[3].text}>{props.options[3].text}</label>
                    </div>
                </fieldset>
            </form>
            
        </div>
    )
}