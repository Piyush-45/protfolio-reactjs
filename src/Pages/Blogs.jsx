import React from "react";
import { blogs } from "../data";

const Blogs = () => {
  return (
    <main className="about_middle blog_middle">
      <h2 className="blogs_h2">
        My <span className="me">Blogs</span>
      </h2>

      {blogs.map(({ id, blogDate, blogImage, blogTitle }) => {
        return (
          <div className="blogs_container"  >
            <div className="blog">
              <img src={blogImage} alt="" className="blog_image" />
              <div className="text_area">
                <div className="blog_details">
                <p className="blog_date">{blogDate}</p>
                <a
                  href="https://piyushtyagidev.hashnode.dev/javascript-variables-under-the-hood-how-var-let-and-const-impact-hoisting-scoping-and-shadowing"
                  target="_"
                >
                  <h4 className="blog_title">{blogTitle}</h4>
                </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Blogs;
