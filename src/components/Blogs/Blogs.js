import React, { useEffect, useState } from 'react'
import { contentfulService } from '../../services/contentfulService'
import { Col, Row } from 'react-bootstrap'
import './blogs.css'
import CustomLinkText from '../CustomLinkText/CustomLinkText'


const blogItem = ({ title, publishDate, thumbnailUrl }) => (
  <Row className='mt-4'>
    <Col md={6}>
      <img src={thumbnailUrl} className='blog-thumbnail' />
    </Col>
    <Col md={6}>
      <CustomLinkText text={title} href={''} />
      <p className='font-small text-muted'>{new Date(publishDate).mmddyyyy()}</p>
    </Col>
  </Row>
)

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState({})
  useEffect(() => {
    fetchContentfulBlogs()
  }, [])


  const fetchContentfulBlogs = async () => {
    if (!blogPosts.items) {
      const posts = await contentfulService.getEntries()
      console.log(posts, 'posts CE:TEST');
      setBlogPosts(posts)
    }
  }

  return (
    <div>
      {blogPosts && blogPosts.items && blogPosts.items.map(item => {
        const {
          fields: {
            title,
            publishDate,
            thumbnail: {
              fields: {
                file: {
                  url: thumbnailUrl
                }
              }
            }
          } = {}
        } = item || {}
        return (
          blogItem({ title, publishDate, thumbnailUrl })
        )
      })}
    </div>
  )
}

export default Blogs