import React from "react";

import S from "./StyledComponents";

const Home = () => {
  return (
    <S.Introduction name="contact" id="contact">
      <h1>Reuben Alldridge</h1>
      <p>
        Music tuition available now with professional musician and teacher
        Reuben Alldridge. Using the online platform Zoom, lessons can be
        arranged flexibly for you and without the need for travel.
      </p>
      <p>
        I am experienced and qualified in taking musicians from their first
        notes right up to grade 8 and diploma standard, or whatever suits the
        aspirations of the individual.
      </p>
      <p>
        Please enquire to
        <div>
          <div className="contactInfo">
            <a
              className="contactDetail"
              href="mailto:reubenthetrombonist@yahoo.com"
            >
              <i class="far fa-envelope"></i> reubenthetrombonist@yahoo.com
            </a>
          </div>
          <div>or alternatively by text or call to</div>
          <div className="contactInfo phoneNumber">
            <a className="contactDetail" href="tel:+447891136078">
              <i class="fas fa-mobile-alt"></i> +44 (0) 7891 136 078
            </a>
          </div>
        </div>
      </p>
    </S.Introduction>
  );
};

export default Home;
