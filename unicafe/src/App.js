import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  // now with the conditional body the guard is actually outdated ;-/
  const guard = x => (all === 0 ? 'not yet available' : x)

  const head = (
    <h1>statistics</h1>
  )
  const body = (
    <>
    <div>
      good {good}
    </div>
    <div>
      neutral {neutral}
    </div>
    <div>
      bad {bad}
    </div>
    <div>
      all {all}
    </div>
    <div>
      average {guard((good - bad) / all)}
    </div>
    <div>
      positive {guard(good * 100.0 / all + ' %')}
    </div>
    </>
  )

  return (
    <>
      {head}
      {all === 0 ? 'No feedback given' : body}
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
