import { useEffect } from 'react'
import '../styles/common.css'
import { Row, Col, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchPosts } from '../store/postSlice'

const Feed = () => {
  const token = useSelector((store) => store.user.token)
  const posts = useSelector((store) => store.post.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchPosts(token))
  }, [])

  useEffect(() => {
    if(!token) {
      navigate('/signin')
    }
  }, [token])

  console.log(posts)

  return (
    <Row className='mx-auto'>
      {posts.map(post => (
        <Col 
          lg={4} md={6} xs={12} 
          className='mt-2' 
          key={post._id}  
        >
          <Card className='single-feed-container'>
            <Card.Img 
              variant="top" 
              src={post.imageURL}
              style={{ aspectRatio: 4/5 }}
            />
            <Card.Body>
              <Card.Text 
                style={{ 
                  textAlign: 'left',
                  minHeight: '80px'
                }}>
                {post.caption}
                <span 
                  style={{ color: '#1877F2' }}
                  className='fw-medium'
                >
                  {post.tags}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Feed