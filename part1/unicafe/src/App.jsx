import {useState} from 'react'

const StatisticLine = (props) => {
    if (props.text === "positive") {
	return (
	    <tr>
		<td>{props.text}</td><td>{props.value} % </td>
	    </tr>
	)
    }
    
    return (
	<tr>
	    <td>{props.text} </td><td>{props.value}</td>
	</tr>
    )
}

const Statistics = (props) => {
    const average = (props.good * 1) + (props.neutral * 0) + (props.bad * -1)
    const averageScore = average/props.total
    const positive = (props.good / props.total) * 100
    
    if(props.total === 0) {
	return (
	    <div>
		No feedback given
	    </div>
	)
    }
    
    return (
	<div>
	    <table>
		<tbody>
		    <StatisticLine text="good" value={props.good} />
		    <StatisticLine text="neutral" value={props.neutral} />
		    <StatisticLine text="bad" value={props.bad} />
		    <StatisticLine text="all" value={props.total} />
		    <StatisticLine text="average" value={averageScore} />
		    <StatisticLine text="positive" value={positive} />
		</tbody>
	    </table>
	</div>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
	{props.text}
    </button>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGoodClick = () => {
	const updatedGood = good + 1
	setGood(updatedGood)
	setTotal(updatedGood+neutral+bad)
    }
    const handleNeutralClick = () => {
	const updatedNeutral = neutral + 1
	setNeutral(updatedNeutral)
	setTotal(good+updatedNeutral+bad)
    }
    const handleBadClick = () => {
	const updatedBad = bad + 1
	setBad(updatedBad)
	setTotal(good+neutral+updatedBad)
    }
    
    return (
	<div>
	    <h1>give feedback</h1>
	    <Button handleClick={handleGoodClick} text="good" />
	    <Button handleClick={handleNeutralClick} text="neutral" />
	    <Button handleClick={handleBadClick} text="bad" />
	    <h1>statistics</h1>
	    <Statistics total={total} good={good} neutral={neutral} bad={bad} />
	</div>   
    )
}

export default App
