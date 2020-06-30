import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddNewContact = inject("userStore")(observer((props) => {
  const classes = useStyles();

  const [input, setInput] = useState({
    name: "",
    phone: "",
  })

  const handleInput = e => {
    let inputVal = { ...input }
    inputVal[e.target.name] = e.target.value
    setInput(inputVal)
  }

  const addNewContact = () => {

  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="phone" label="Phone" name='phone' onChange={handleInput} />
      <TextField id="password" label="Password" name='password' onChange={handleInput} />
      <Button variant="contained" color="primary" disableElevation onClick={addNewContact}>LogIn</Button>
    </form>
  )
}))

export default AddNewContact

