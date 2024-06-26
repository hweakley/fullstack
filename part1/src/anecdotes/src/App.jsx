import {useState} from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
	{props.text}
    </button>
)
    
let initialVotes = new Uint8Array(8)

const App = () => {
    const anecdotes = [
	'If it hurts, do it more often.',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definnition, not smart enough to debug it.',
	'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
	'The only way to go fast, is to go well.'
    ]
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(initialVotes)
    const mostVotes = votes[0]
    const topAnecdote = anecdotes[0]
    const handleNextClick = (max) => {
	setSelected(Math.floor(Math.random() * max))
    }
    const handleVoteClick = (selected) => {
	const nextVote = votes.map((c, i) => {
	    if(i === selected) {
		return c + 1
	    }
	    else {
		return c
	    }
	})
	setVotes(nextVote)
	for (let a = 1; a < votes.length; a++)
	    if(votes[a] > mostVotes) {
		mostVotes = votes[a]
		topAnecdote = anecdotes[a]
	    }	
    }
    
	
    return (
	<div>
	    <h1>Anecdote of the day</h1>
	    {anecdotes[selected]}
	    <p>has {votes[selected]} votes</p>
	    <p>
		<Button handleClick={() => handleVoteClick(selected)} text = "vote" />
		<Button handleClick={() => handleNextClick(8)} text="next anecdote" />
	    </p>
	    <h1>Anecdote with most votes</h1>
	    <p>{topAnecdote}</p>
	    <p>has {mostVotes} votes</p>
	</div>
    )
}

export default App
