import React, { useState } from 'react'
import FileUpload from './components/FileUpload'
import './App.css'
import OutputScreen from './components/OutputScreen'


const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    display: "row",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 100
  },
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: "3em",
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    fontSize: "1.5em",
    padding: "0.5em",
    margin: "0.5em",
    borderRadius: "0.5em",
    border: "none",
    backgroundColor: "#002CFE",
    color: "#f4f4f4",
    cursor: "pointer",
  },
  
}

const App = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => setClicked(!clicked)
    return (
      <div style={styles.mainContainer}>
        <h1 style={styles.heading}>LIAN</h1>
        <div style = {styles.container}>
          <div style={styles.app}>
            <FileUpload clicked = {clicked}/>
            <div style={styles.btnContainer}>
              <button
                style={styles.btn}
                onClick = {() => handleClick()}
              >Clear Image</button>
              <button style={styles.btn}>Process Image</button>
            </div>
          </div>
          <div>
            <OutputScreen/>
          </div>
        </div>
      </div>
  )
}

export default App