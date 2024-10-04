import { useState } from 'react'

const Button = ({text, onClick}) => {
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const emptyVotes = Array(anecdotes.length).fill(0)

   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(emptyVotes)
  const [bestAnecdote, setBestAnecdote] = useState(0)

  const voteAnecdote = () => {
    const copy = {...votes}
    copy[selected] += 1
    setVote(copy)
    if(copy[selected] >= copy[bestAnecdote] )
    setBestAnecdote(selected)
  }

  const nextAnecdote = () => {
    setSelected( Math.floor(Math.random()*7))
  }

  // const maxVote = () => {
  //   const bestAnecdote = Math.max(votes)
  //   console.log(bestAnecdote)
  //   return(bestAnecdote)
    
  // }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text="vote" onClick={() => voteAnecdote()}></Button>
      <Button text="next anecdote" onClick = {() => nextAnecdote()}></Button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[bestAnecdote]}</p>
      <p>has {votes[bestAnecdote]} votes</p>
    </div>
  )
}

export default App