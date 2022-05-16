// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const inputRef = React.useRef()

  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleSubmit = e => {
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    e.preventDefault()
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value

    // const value = e.target.elements.username.value //with vanilla js input value
    const value = inputRef.current.value //with useRef
    onSubmitUsername(value)
    // 🐨 Call `onSubmitUsername` with the value of the input
  }
  const handleChange = e => {
    const {value} = e.target
    setUsername(value.toLowerCase())
  }

  return (
    // 🐨 add the onSubmit handler to the <form> below
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>

        {/* // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input */}
        <input
          ref={inputRef}
          onChange={handleChange}
          id="username"
          type="text"
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
