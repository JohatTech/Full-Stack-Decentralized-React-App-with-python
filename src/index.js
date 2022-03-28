import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
/** IMPORTING REACT STATES **/
import { useState } from 'react'
import copy from 'copy-to-clipboard'

function PasswordDisplay() {
  return (
    <section className='PasswordGenerator'>
      <div className='container-fluid'>
        <h1 className='Title'>Password Generator </h1>
        <h3 style={{ textAlign: 'center' }}> </h3>
        <AskUser />
      </div>
    </section>
  )
}

const AskUser = () => {
  /**DECLARING STATES */
  var [value, setValue] = useState()
  /**SET A FUNCTION FOR RECIEVE THE VALUE FROM THE USER */
  function getData(val) {
    setValue(val.target.value)
    console.log(val)
  }
  /**FUNCTION FOR RECIEVE THE PASSWORD */
  const [Password, setPassword] = useState(0)
  const handFormSubmit = () => {
    fetch('https://pass-genetator.herokuapp.com/password', {
      method: 'POST',
      body: JSON.stringify({
        content: value,
      }),
    }).then((response) =>
      response.json().then((datas) => {
        setPassword(datas.result)
        console.log(datas.result)
      })
    )
  }
  /*FUNCTION FOR HANDLE THE SUBMIT */
  const handleSubmit = (event) => {
    event.preventDefault()
    handFormSubmit()
  }
  /*FUNCTION FOR COPY THE PASSWORD */
  const [copyText, setCopyText] = useState()
  const copyPassword = () => {
    setCopyText(Password)
    copy(copyText)
  }
  return (
    <div className='ButtonAction'>
      <article>
        <h1 value={copyText}>&#128170; {Password} &#128170;</h1>
      </article>
      <form onSubmit={handleSubmit}>
        <input className='form-control' name='length' onChange={getData} />
        <input
          className='submit'
          type='submit'
          value='Get your Password!'
        ></input>
      </form>
      <button className='btn' onClick={() => copyPassword()}>
        Double click to copy your password
      </button>
    </div>
  )
}

ReactDOM.render(
  <PasswordDisplay></PasswordDisplay>,
  document.getElementById('root')
)
