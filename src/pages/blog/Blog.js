import React from 'react'
import styles from "./Blog.module.css"
import { Header, BlogSection } from '../../components'

const Blog = () => {
  return (
    <div className={styles.blog}>
        <Header name={"Blog"}/>
        <BlogSection />
    </div>
  )
}

export default Blog