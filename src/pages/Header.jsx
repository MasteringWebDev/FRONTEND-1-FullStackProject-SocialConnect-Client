import { Button } from 'react-bootstrap'
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
    border: 'none'
  },
  signIn: {
    background: 'linear-gradient( #ee2a7b, #6228d7)',
    border: 'none'
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
      <Button 
        variant="secondary" 
        style={styles.signUp}
        className='mx-1 btn-lg'
      >Sign up</Button>
      <Button 
        variant="secondary"
        style={styles.signIn}
        className='mx-1 btn-lg'
      >Sign in</Button>
    </div>
  )
}

export default Header