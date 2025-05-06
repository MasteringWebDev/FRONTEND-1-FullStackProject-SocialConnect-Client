import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import headerIcon from '../assets/header.gif'

const styles = {
  brandName: {
    background: 'linear-gradient(#f9ce34, #ee2a7b, )',
    borderRadius: '10px',
    padding: '0 10px',
    marginLeft: '5px' 
  },
  signUp: {
    background: 'linear-gradient(#f9ce34, #ee2a7b)',
    border: 'none',
    color: 'white'
  },
  signIn: {
    background: 'linear-gradient( #ee2a7b, #6228d7)',
    border: 'none',
    color: 'white'
  }
}

const Header = () => {
  return (
    <div className='mt-5'>
      <h1 className='display-3'>Welcome to 
        <span style={styles.brandName }>SocialConnect</span>
      </h1>
      <img src={headerIcon} width={200} />
      <p className='lead'>Find friends and share your thoughts ... 💭</p>
      <Link
        to='/signup'
        style={styles.signUp}
        className='btn mx-1 btn-lg'
      >Sign up</Link>
      <Link
        to='/signin'
        style={styles.signIn}
        className='btn mx-1 btn-lg'
      >Sign in</Link>
    </div>
  )
}

export default Header