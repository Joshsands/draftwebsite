import * as React from "react";
import robImage from "../assets/images/roblippman.jpg";
import joshimage from "../assets/images/joshsands.jpg";
import stephenimage from "../assets/images/stephenfuller.jpg";
import briimage from "../assets/images/bri.jpg";
import { ListGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <section class="hero">
        <div class="hero-cta">
          <h2>NEED A QUOTE?</h2>
          <p fontcolor="blue">
            We provide all types of fire protection system quotes to general
            contractors and building owners. Reach out to us today for a quote!
          </p>
        </div>
        <div class="hero-form">
          <h3>Get a Quote Today!</h3>
          <p>
            Fill out the form below and one of our estimators will give you a
            call
          </p>

          <form>
            <label for="name">Company Name:</label>
            <input
              type="text"
              placeholder="Company Name"
              name="name"
              id="name"
              class="form-input"
            />
            <label for="name">Enter your name:</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              class="form-input"
            />
            <label for="email">Enter email address:</label>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              id="email"
              class="form-input"
            />
            <label for="phone">Enter a telephone number:</label>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              id="phone"
              class="form-input"
            />

            <button type="submit">REQUEST QUOTE</button>
          </form>
        </div>
      </section>

      <section id="what-we-do" class="intro">
        <div class="flex-row">
          <h2 class="section-title primary-border">What We Do</h2>
        </div>
        <div class="flex-row">
          <p>
            <ListGroup>

            <ListGroup.Item className="text-danger">At Primary Fire Protection, our goal is to ensure safety of both
            your occupants and property. Our fire protection / life safety
            contracting delivers the highest quality control standards by
            continuously investing in our technicians' knowledge and skill sets.
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
            Our first-rate, trade specific, expertise delivers our clients peace
            of mind knowing our products will save lives and property as they
            were designed.
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
            Our clients experience minimal
            installation/inspection downtimes, and lower overall labor costs
            delivering our customers the best possible value.
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
            Our protective electronic fire detection and alarm systems are designed by Licensed
            Alarm Planning Superintendents, and certified by NICET/State
            licensed technicians. We are well versed in a wide range of
            compliance codes, and maintain close working relationships with
            Local, County, Municipal, State, and National authorities to ensure
            that all codes and methods remain current.
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
            Readily available and
            customer oriented, we provide 24/7 service.
            </ListGroup.Item>

            </ListGroup>
          </p>
        </div>
      </section>

      <section id="your-trainers">
        <div class="flex-row">
          <h2 class="section-title primary-border">
            Meet Your Fire Protection Experts
          </h2>
        </div>
        <div class="trainers">
          <article class="trainer">
            <img src={robImage} alt="Robert Lippman" />
            <div class="trainer-bio">
              <h3>Robert Lippman</h3>
              <h4>Co-owner / Contracts</h4>
              <h4 class="trainer-name">
                <a href="mailto:rob@primaryfirepro.com">rob@primaryfirepro.com</a>
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>

          <article class="trainer">
          <img src={stephenimage} alt="Stephen Fuller" />
            <div class="trainer-bio">
              <h3>Stephen Fuller</h3>
              <h4>Co-Owner / Service</h4>
              <h4 class="trainer-name">
                <a href="mailto:stephen@primaryfirepro.com">stephen@primaryfirepro.com</a>
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>

          <article class="trainer">
          <img src={joshimage} alt="Josh Sands" />
            <div class="trainer-bio">
              <h3 class="trainer-name">Josh Sands</h3>
              <h4 class="trainer-name">Sales / Design</h4>
              <h4 class="trainer-name">
                <a href="mailto:josh@primaryfirepro.com">josh@primaryfirepro.com</a>
              </h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>

          <article class="trainer">
          <img src={briimage} alt="Brehanna McMorris" />
            <div class="trainer-bio">
              <h3 class="trainer-name">Brehanna McMorris</h3>
              <h4 class="trainer-name">Project Coordinator</h4>
              <h4 class="trainer-name">
                <a href="mailto:admin@primaryfirepro.com">admin@primaryfirepro.com</a>
              </h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>

        </div>
      </section>

      <section id="reach-out" class="contact">
        <div class="flex-row">
        <h2 class="section-title secondary-border">Reach Out</h2>
        </div>
        <div class="contact-info">
            
            <div>
                <h3>Primary Fire Protection</h3>
                <p>
                  Any questions project or service specific questions?
                  <br />
                  Let us know and we'll be happy to talk to you!
                </p>
                <address>
                    Primary Fire Protection, LLC.<br/>
                    5204 Anaheim Ave <br/>
                    Pflugerville, TX 78660<br/>
                    P: 512-554-5803 <br/>
                    E: <a href="mailto:estimating@primaryfirepro.com">estimating@primaryfirepro.com</a>
                  </address>
                </div>

        <div class="contact-form">
            <h3>Contact Us</h3>
            <form>
               <label for="contact-name">Your Name</label>
               <input type="text" id="contact-name" placeholder="Your Name" />
          
               <label for="contact-message">Message</label>
               <textarea id="contact-message" placeholder="Message"></textarea>
          
               <button type="submit">Submit</button>
              </form>
        </div>

        {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.1079747227936!2d-120.42364418397035!3d37.92790791110593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090c49129b6ac57%3A0xb56c7eb95a2cd8bd!2sMain%20St%2C%20California%2095327!5e0!3m2!1sen!2sus!4v1616426329495!5m2!1sen!2sus"
            style="border:0;" 
            allowfullscreen=""
            loading="lazy">
        </iframe> */}

        </div>
    </section>

    </div>
  );
};

export default Home;
