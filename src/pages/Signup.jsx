import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/common.css'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { signupUser } from '../store/userSlice'

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { 
    token, 
    error 
  } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(token) {
      navigate('/feed')
    }
  }, [token])

  useEffect(() => {
    if(error) {
      alert(error)
    }
  }, [error])

  const handleSubmit = () => {
    dispatch(signupUser(user))
    setUser({
      username: '',
      email: '',
      password: ''
    })
  }

  return (
    <Form className='mx-auto mt-5 form-container'>
      <h1 className='display-5 mb-4'>Signup</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="soham.maruti" 
          value={user.username}
          onInput={(e) => setUser({
            ...user,
            username: e.target.value
          })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="soham.maruti@gmail.com" 
          value={user.email}
          onInput={(e) => setUser({
            ...user,
            email: e.target.value
          })}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="" 
          value={user.password}
          onInput={(e) => setUser({
            ...user,
            password: e.target.value
          })}
        />
      </Form.Group>
      <Button 
        variant="primary" 
        type="button" 
        className='social-connect-button'
        onClick={handleSubmit}
      >
        Sign up
      </Button>
    </Form>
  )
}

export default Signup