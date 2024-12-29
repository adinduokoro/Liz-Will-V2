import React from "react";
import styles from "./BlogSection.module.css";
import { posts } from "./data";

const BlogSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.blogSectionContent}>
          {posts.map((post, index) => (
            <div className={styles.post} key={index}>
              <div>
                <h3 className={styles.heading}>{post.heading}</h3>
                <p className={styles.date}>{post.date}</p>
                <p className={`${styles.content} text-regular`}>{post.contentSnippet}</p>
              </div>
              <div>
                <button><p>Read Full Post</p></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
