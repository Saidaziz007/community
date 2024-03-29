import React from "react";
import "./Bloginner.css";
import inner from "../../assets/images/inner.png";
import user from "../../assets/images/blog-user.png";

function Bloginner() {
  return (
    <section>
      <div className="container">
        <div className="inner-all">
          <div className="inner-img">
            <img src={inner} alt="" />
          </div>
          <div className="inner-info">
            <div className="container-570 inner-info-1">
              <div className="inner-info-top">
                <img src={user} alt="" />
                <p>Andrew Jonson</p>
                <p>Posted on 27th January 2021</p>
              </div>
              <h1>Breaking the code How did we build our Figma plugin </h1>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged and categorized with a voice and tone variation
                ranging from plain, casual to playful. The intention to build
                this Figma plugin originated from our Medium blog post,
                ‘Designing voice and tone for error messages.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged and categorized with a voice and tone variation
                ranging from plain, casual to playful. The intention to build
                this Figma plugin originated from our Medium blog post,
                ‘Designing voice.
              </p>
              <h1>
                Transform Your Idea Into Reality with Ether a Leading Digital
                Agency
              </h1>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged and categorized with a voice and tone variation
                ranging from plain, casual to playful. The intention to build
                this Figma plugin originated from our Medium blog post,
                ‘Designing voice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bloginner;
