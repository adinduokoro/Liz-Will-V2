import React from "react";
import styles from "./BlogPost.module.css";
import { Header } from "../../components";
import { useParams } from "react-router-dom";
import { posts } from "../../components/blogSection/data";

const BlogPost = () => {
  const { id } = useParams(); // Get the ID from the URL
  const post = posts.find((post) => post.id === id); // Find the post with the matching ID

  return (
    <div className={styles.blogPost}>
      <Header subHeading={post.heading} />
      <section className={styles.blogPostSection}>
        <div className="container">
          <div className={styles.blogPostSectionContent}>
            <h2>hello world</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
