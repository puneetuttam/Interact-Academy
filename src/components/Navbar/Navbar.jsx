import React from "react";
import logo from "../../assets/intract_text.svg";
import "./Navbar.css";
import feed from "../../assets/feed.svg";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <section className="max-width-conatiner section-style">
        <div className="navbar-content-section">
          <a aria-current="page" href="">
            <img src={logo} alt="" />
          </a>
          <div className="navlinks">
            <div id="nav1" className="dropdown position-relative">
              <span className="position-relative"></span>
              <div className="navlink">Compass</div>
            </div>
            <div id="nav2" className="navlink">
              Explore
            </div>
            <div id="nav3" className="navlink active">
              Academy<div className="badge ms-2">New</div>
            </div>
            <div id="nav4" className="navlink">
              NFTs
            </div>
            <div id="nav5" className="navlink">
              <div className="dropdown position-relative">
                <span className="position-relative">
                  <div className="navlink">For Projects</div>
                </span>
              </div>
            </div>
          </div>
          <div className="d-md-flex gap-2 position-relative navbar-endholder right-style">
            <div className="search-bar-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
              <input
                type="text"
                placeholder="Search for ecosystem, trending quests etc.,"
              />
            </div>
            <div className="navlink feed-sigin-style">
              <div className="feed-sigin-inside">
                <div></div>
                <section className="alpha-feed-icon">
                  <div>
                    <img src={feed} alt="" />
                  </div>
                </section>
                <div className="ms-auto">
                <span className="button btn-sm px-3 px-sm-4 navbar-button w-button w--current">Sign In</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-item-center"></div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
