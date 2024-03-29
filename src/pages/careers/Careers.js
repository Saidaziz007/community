import React from "react";
import "./Careers.css";
import { useParams } from "react-router-dom";
import { POSITION_ITEMS } from "../../static";

function Careers() {
  let { id } = useParams();
  let product = POSITION_ITEMS?.find((el) => el.id === +id);
  return (
    <section>
      <div className="container">
        <div className="careers">
          <div className="careers-top">
            <h1>{product?.title}</h1>
            <div className="careers-top-1">
              <div className="careers-top-1-left">
                <h1>Job Discription</h1>
                <p>
                  Remote, India , 4 to 5 Years Of Experience Department: Website
                  Design 5 Positions Available.
                </p>
              </div>
              <div className="careers-top-1-right">
                <h1>Salary</h1>
                <p>$30000 Per Anum </p>
              </div>
            </div>
          </div>
          <div className="careers-detail">
            <div className="careers-detail-left">
              <h2 className="hh-22">Details</h2>
              <h2>Requirements</h2>
              <h2>Responsibilities</h2>
            </div>
            <div className="careers-detail-right">
              <p>
                Design & Create highly engaging industry-related content in both
                photo, gif & video format Publish Posts on various social media
                channels Promote content on social networks and monitor
                engagement (e.g. comments and shares) Research industry-related
                topics Editing audio and sound design on projects Engage in
                opportunities to develop original content and concepts for web
                and mobile Create motion graphics and animations using 2D and 3D
                applications for marketing and promotional usage.
              </p>
              <p>
                Manage the day-to-day handling of all social media channels such
                as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
                YouTube, adapting content to suit different channels
              </p>
            </div>
          </div>
          <div className="careers-bottom">
            <h1>Apply Now</h1>
            <div className="careers-input">
              <form action="">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email Id" />
                <input type="number" placeholder="Mobile No" />
              </form>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Why do you thing you are good fit for Ether?"
              ></textarea>
              <button className="btn-1">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;
