import React from "react";
import "./Blog.css";
import user from "../../assets/images/blog-user.png";
import heroImg from "../../assets/images/blog-img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { BLOG_ITEM } from "../../static";
import { NavLink, useLocation } from "react-router-dom";

function Blog() {
  let { pathname } = useLocation();
  return (
    <section>
      <div className="blog-hero">
        <div className="container">
          <div className="blog-hero-all">
            <div className="blog-hero-left">
              <div className="blog-hero-left-top">
                <img src={user} alt="" />
                <p>Andrew Jonson</p>
                <p>Posted on 27th January 2021</p>
              </div>
              <h1>Our internal process and longerm vision</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Maker is a decentralized. We aim to attain the
              </p>
              <NavLink to={"/blog-inner"}>
                <a href="">
                  Read More <FaArrowRightLong />
                </a>
              </NavLink>
            </div>
            <div className="blog-hero-right">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="container">
          <div className="posts-top">
            <h1>All posts</h1>
          </div>
          <div className="blog-wrapper">
            {BLOG_ITEM?.map((el) => (
              <div key={el.id} className="card">
                <div className="card-img">
                  <img src={el.img} alt="" />
                </div>
                <div className="card-info-1">
                  <h1>{el.title}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet eros blandit, hendrerit elit et.
                  </p>
                  <a href="">
                    Learn more <FaArrowRightLong />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
