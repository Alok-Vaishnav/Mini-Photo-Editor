import React from 'react'
import Styles from '../Styles/Edit.module.css'

function Edit() {
  return (
    <div className={Styles.Main}>
      <div className={Styles.Container}>
        <h1>Edit Your Photo</h1>
        <div className={Styles.EditDiv}>
          <p>Drag an image here</p>
        </div>
      </div>
    </div>
  )
}

export default Edit;