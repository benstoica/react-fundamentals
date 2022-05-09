// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = ({
  classToApply = '',
  bgColor,
  fontStyle,
  textToDisplay,
  ...otherProps
}) => {
  return (
    <div
      className={`${classToApply} box`}
      style={{backgroundColor: `${bgColor}`, fontStyle: `${fontStyle}`}}
    >
      {textToDisplay}
    </div>
  )
}

const smallBox = (
  <Box
    classToApply="box--small"
    bgColor="lightblue"
    fontStyle="italic"
    textToDisplay="small lightblue box"
  ></Box>
)
const mediumBox = (
  <Box
    classToApply="box--medium"
    bgColor="pink"
    fontStyle="italic"
    textToDisplay="medium pink box"
  ></Box>
)
const largeBox = (
  <Box
    classToApply="box--large"
    bgColor="orange"
    fontStyle="italic"
    textToDisplay="large orange box"
  ></Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
