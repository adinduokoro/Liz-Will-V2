import React, { useState } from "react";
import styles from "./BlogSection.module.css";
import { posts } from "./data";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const POSTS_PER_PAGE = 6; // 3x2 grid
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatePosts = () => {
    // Sort posts by date in descending order
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return sortedPosts.slice(start, end);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }

    // Scroll to the top of the blog section
    document.querySelector(`.${styles.blogSectionContent}`).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const renderPagination = () => {
    const pages = [];

    // Add previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
    );

    // Always show the first page
    if (currentPage > 2) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={currentPage === 1 ? styles.active : ""}
        >
          1
        </button>
      );
    }

    // Add "..." if there's a gap between the first page and the current set
    if (currentPage > 3) {
      pages.push(<span key="start-ellipsis">...</span>);
    }

    // Add previous page
    if (currentPage > 1) {
      pages.push(
        <button
          key={currentPage - 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      );
    }

    // Add current page
    pages.push(
      <button key={currentPage} className={styles.active}>
        {currentPage}
      </button>
    );

    // Add next page
    if (currentPage < totalPages) {
      pages.push(
        <button
          key={currentPage + 1}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      );
    }

    // Add "..." if there's a gap between the current set and the last page
    if (currentPage < totalPages - 2) {
      pages.push(<span key="end-ellipsis">...</span>);
    }

    // Always show the last page
    if (currentPage < totalPages - 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Add next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    );

    return pages;
  };

  return (
    <section>
      <div className="container">
        <div className={styles.blogSectionContent}>
          <div className={styles.gridContainer}>
            {paginatePosts().map((post, index) => (
              <div className={styles.post} key={index}>
                <div>
                  <h3 className={styles.heading}>{post.heading}</h3>
                  <p className={styles.date}>{post.date}</p>
                  <p className={`${styles.content} text-regular`}>
                    {post.contentSnippet}
                  </p>
                </div>
                <div>
                  <Link to={`/blog/${post.id}`}>
                    <button>
                      <p>Read Full Post</p>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.paginationContainer}>
            {renderPagination()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
