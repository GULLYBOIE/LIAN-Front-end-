import React, {useEffect} from 'react'
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files"

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
  },
  dropMessageStyle: {
    height: "25em",
    width: "20em",
  },
}

const fileTypes = ["JPEG", "PNG", "GIF"];

const FileUpload = ({clicked}) => {
  useEffect(() => handleChange(null),[clicked])
  const [file, setFile] = useState(null);
  const handleChange = (file) => setFile(file)
  
  return (
      <div style = {styles.container}>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          fileOrFiles = {file}
          dropMessageStyle = {styles.dropMessageStyle}
        />
        <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
      </div>
  )
}

export default FileUpload