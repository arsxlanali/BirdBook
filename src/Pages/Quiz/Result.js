
import {  useLocation } from "react-router-dom";
import {PieChart,Pie,Tooltip} from "recharts";
function Result() {
  
  // const params = useParams();
  // const score = params.type;
  const location = useLocation().state;
  const score = location.stateParam;
  console.log('locationData = '+location.stateParam)
  const data = [
    {name:"true",value:score},
    {name:"false",value:10-score}
  ]
  return (
    <div className="quizQuestion result">
        <h1 className="result-heading">Results</h1>
        <h2>Your result is {score} correct and {10-score} are incorrect</h2>
        <PieChart width={730} height={250}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} 
          fill="#8884d8" label/>
          <Tooltip/>
        </PieChart>
        
      </div>
  );
}
export default Result;    