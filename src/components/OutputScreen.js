import React from 'react';

const styles = {
    container: {
        width: '25em',
        height: '20em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2em'
    },
    box: {
        border: '2px dotted #000000',
        width: '25em',
        height: '20em'
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

const OutputScreen = () => {
    return (
        <div style={styles.container}>
            <div style = {styles.box}></div>
            <div style = {styles.btnContainer}>
                <button style = {styles.btn}>Acceptable</button>
                <button style = {styles.btn}>Unacceptable</button>
            </div>
        </div>
    );
}

export default OutputScreen;
