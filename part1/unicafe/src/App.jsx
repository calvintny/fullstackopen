import { useState } from 'react'

const Button = ({text,handleClick}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    )

}

const Statistic = ({resultArray}) => {
  if(resultArray[0] + resultArray[1] + resultArray[2] === 0){return (
    <div><p>No feedback given</p></div>)
  }
  else {
    const average = (resultArray[0]*1 + resultArray[1] * 0 +  resultArray[2]* -1)/(resultArray[0]+ resultArray[1] +  resultArray[2])
    const positive = ((resultArray[0])/(resultArray[0]+ resultArray[1] +  resultArray[2]) * 100).toString() + "%"
    return(
      <div>
        <table>
        <StatisticLine text={"good"} value={resultArray[0]}/>
        <StatisticLine text={"neutral"} value={resultArray[1]}/>
        <StatisticLine text={"bad"} value={resultArray[2]}/>
        <StatisticLine text={"average"} value={average}/>
        <StatisticLine text={"positive"} value={positive}/>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addValue = (value) => {
    if(value === "good") setGood(good+1)
    if(value === "neutral") setNeutral(neutral+1)
    if(value === "bad") setBad(bad+1)
  }
 
  let resultArray = [good, neutral, bad]
  
  return (
    <div>
      <Button text="good" handleClick={() => addValue("good")}/>
      <Button text="neutral" handleClick={() => addValue("neutral")}/>
      <Button text="bad" handleClick={() => addValue("bad")}/>
      <Statistic resultArray={resultArray} />
    </div>
  )
}

export default App