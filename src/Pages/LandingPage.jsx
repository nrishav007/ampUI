import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
const LandingPage = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState("");
  const [modalview, setModalView] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  function myFunction() {
    var x = document.getElementById("mbMenu");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  useEffect(() => {
    if (user) {
      if (user?.data?.user?.userType === "dj") {
        navigate("/dj-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    }
  }, []);

  var settings = {
    slidesToShow: 1,
    SlidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  };

  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">
            <img src="./assets/images/images/Frame.png" />
          </div>

          <div className="nav-menu">
            <ul>
              <li>
                <a href="#">Discover</a>
              </li>

              <li>
                <a onClick={() => setModalView(!modalview)}>Wait-List</a>
              </li>
            </ul>
          </div>

          <div className="menumobile">
            <button className="mobile-menu" onClick={myFunction}>
              <i className="fa fa-bars"></i>
            </button>
          </div>

          <div id="mbMenu">
            <ul>
              <li>
                <a href="#">Discover</a>
              </li>

              <li>
                <a
                  class="hover:cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </a>
              </li>

              <li>
                <a
                  class="hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="first-ele">
        <div className="first-elerow">
          <div className="col-1">
            <h3>Welcome to Amp Spot Co.</h3>
            <h1 class="my-[65px]">WHERE ENJOYMENT BEGINS.</h1>
            <p>
              It’s already difficult planning your event however, we just made
              it easier for you.
            </p>
            <div className="button">
              <button
                className="btn2"
                style={{ letterSpacing: "1px" }}
                onClick={() => setModalView(!modalview)}
              >
                Join Wait-List
              </button>
            </div>
          </div>

          <div className="col-2">
            <img src="./assets/images/images/Ellipse 43.png" className="img1" />
            <img
              src="./assets/images/images/Rectangle 210.png"
              className="img2"
            />
            <img
              src="./assets/images/images/Screenshot 2022-12-14 at 4.44 1.png"
              className="img3"
            />
            <div className="rating-bx">
              <div className="rating-img">
                <img src="./assets/images/images/Ellipse 25.png" />
              </div>
              <div className="rating-desc">
                <h2>G Babe</h2>
                <p>123 ST, MH</p>
                <div className="rate-icon">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i> (71)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="number-sec">
        <div className="number-row">
          <h2 class="my-[50px]">HOW IT WORKS</h2>
          <div className="num-row">
            <div className="num-col">
              <h2>1</h2>
              <p>Search</p>
            </div>

            <div className="num-col">
              <h2>2</h2>
              <p>Book</p>
            </div>

            <div className="num-col">
              <h2>3</h2>
              <p>Review</p>
            </div>
          </div>
        </div>
      </div>

      <div className="serv-sec">
        <div className="serv-cont">
          <h2 class="my-[50px]">SERVICE PROVIDED</h2>

          <div className="serv-row">
            <div className="serv-col">
              <div className="ser-img">
                <img src="./assets/images/images/Search.png" />
              </div>
              <p>
                Search and <br />
                Book DJs
              </p>
            </div>

            <div className="serv-col">
              <div className="ser-img">
                <img src="./assets/images/images/Secure.png" />
              </div>
              <p>
                Secure <br />
                Payments
              </p>
            </div>
            <div className="serv-col">
              <div className="ser-img">
                <img src="./assets/images/images/Message.png" />
              </div>
              <p>
                Secure <br />
                Messaging
              </p>
            </div>
            <div className="serv-col">
              <div className="ser-img">
                <img src="./assets/images/images/Rating.png" />
              </div>
              <p>
                View <br />
                DJ Ratings
              </p>
            </div>

            <div className="serv-col">
              <div className="ser-img">
                <img src="./assets/images/images/Calendar.png" />
              </div>
              <p>
                View <br />
                DJ Calendar
              </p>
            </div>
          </div>
        </div>
      </div>

      <Slider className="dj-slider" {...settings}>
        <div className="rozay-sec">
          <div className="rozay-row">
            <div className="rozay-col">
              <img src="./assets/images/images/“.png" />
              <h1>I JUST WANT DJ AND BE GREAT..</h1>
            </div>
          </div>
        </div>

        <div className="rozay-sec">
          <div className="rozay-row">
            <div className="rozay-col">
              <img src="./assets/images/images/“.png" />
              <h1>I JUST WANT DJ AND BE GREAT..</h1>
            </div>
          </div>
        </div>

        <div className="rozay-sec">
          <div className="rozay-row">
            <div className="rozay-col">
              <img src="./assets/images/images/“.png" />
              <h1>I JUST WANT DJ AND BE GREAT..</h1>
            </div>
          </div>
        </div>
      </Slider>

      <div className="ft-logo">
        <img class="mx-auto" src="./assets/images/images/Frame.png" />
      </div>
    </div>
  );
};

export default LandingPage;
