import React from "react";
import "./Career.css";
import hero from "../../assets/images/home-img.png";
import circle from "../../assets/images/circle.svg";
import { FaAngleRight } from "react-icons/fa6";
import { CARDS_ITEM, POSITION_ITEMS } from "../../static";
import cardimg from "../../assets/images/card-1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Career() {
  return (
    <section>
      <div className="hero">
        <div className="container">
          <div className="hero-all">
            <div className="hero-left">
              <h1>
                We hired people who are very passionate about what they do
              </h1>
              <p>
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw.
              </p>
              <button className="btn-1">View Positions</button>
            </div>
            <div className="hero-right">
              <img className="hero-right-img" src={hero} alt="" />
              <div className="hero-right-left"></div>
              <img className="circle" src={circle} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="position">
        <div className="container">
          <div className="position-title">
            <h1>See our open positions</h1>
          </div>
          <div className="position-wrapper">
            {POSITION_ITEMS?.map((el) => (
              <div key={el.id} className="position-card">
                <h1>{el.title}</h1>
                <p>{el.info}</p>
                <Link to={`/careers/${el.id}`}>
                  <a href="">
                    Apply now <FaAngleRight />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <div className="news-top">
            <h1>Latest Blog & News</h1>
          </div>
          <div className="card-wrapper">
            {CARDS_ITEM?.map((el) => (
              <div key={el.id} className="card">
                <div className="card-img">
                  <img src={el.img} alt="" />
                </div>
                <div className="card-info">
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

export default Career;
