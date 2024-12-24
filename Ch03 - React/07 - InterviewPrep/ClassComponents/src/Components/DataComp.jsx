import React from 'react'

function DataComp(props) {

    console.log("props ::: ", props);

  return (
    <div>
        <h1>Data Loaded</h1>
        <p onClick={props.alterTheme}>{props.data}</p>
    </div>
  )
}

export default DataComp