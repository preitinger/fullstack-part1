import { useState } from 'react'

const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  // now with the conditional body the guard is actually outdated ;-/
  const guard = x => (all === 0 ? 'not yet available' : x)

  const head = (
    <h1>statistics</h1>
  )


  const body = (
    <table>
      <tbody>
    {

      // please forgive me... but I had to try map ;-)
      [
        {key: 'good',     value: good                       },
        {key: 'neutral',  value: neutral                    },
        {key: 'bad',      value: bad                        },
        {key: 'average',  value: guard((good - bad) / all)  },
        {key: 'positive', value: guard(good * 100.0 / all + ' %')},
      ].map(item =>
         <StatisticLine key={item.key} text={item.key} value={item.value} />
      )
    }
      </tbody>
    </table>
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
        <Button onClick={() => setGood(good + 1)} label='good' />
        <Button onClick={() => setNeutral(neutral + 1)} label='neutral' />
        <Button onClick={() => setBad(bad + 1)} label='bad' />
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
