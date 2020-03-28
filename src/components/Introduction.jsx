import React from "react";

import S from "./StyledComponents";

const Home = () => {
  return (
    <S.Introduction>
      <h1>Reuben Alldridge</h1>
      <p>
        Music tuition available now with professional musician and teacher
        Reuben Alldridge. Using the online platform Zoom, lessons can be
        arranged flexibly for you and without the need for travel.
      </p>
      <p>
        I am experienced and qualified in taking musicians from their first
        notes right up to grade 8 and diploma standard, or whatever suits
        aspirations of the individual.
      </p>
      <p>
        Please enquire to
        <br />
        <div>
          <span className="contactInfo">
            <a className="email" href="mailto:reubenthetrombonist@yahoo.com">
              <i class="far fa-envelope"></i> reubenthetrombonist@yahoo.com
            </a>
          </span>
          <br />
          or alternatively by text or call to
          <br />
          <span className="contactInfo phoneNumber">
            <i class="fas fa-mobile-alt"></i> +44 (0) 7891 136 078
          </span>
        </div>
      </p>
    </S.Introduction>
  );
};

export default Home;
