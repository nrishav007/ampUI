import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./output.css"
import { useEffect, useState } from "react";
const LandingPage = () => {
  const navigate = useNavigate();
  const [modalview, setModalView] = useState(false);
  const [waitlist, setWaitList] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    socialMediaType: "",
    socialMediaUserName: "",
  });
  const handleWaitList = (e) => {
    let { name, value } = e.target;
    let temp = { ...waitlist };
    temp[name] = value;
    setWaitList(temp);
  };
  const handleWaitSubmit = () => {
    try {
      const emailValidation = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (
        waitlist.email === "" ||
        waitlist.firstName === "" ||
        waitlist.lastName === "" ||
        waitlist.number === "" ||
        waitlist.socialMediaType === "" ||
        waitlist.socialMediaUserName === "" ||
        waitlist.userType === ""
      ) {
        showToast("Fill all fields");
      } else {
        if (emailValidation.test(waitlist.email) === true) {
          if (waitlist.number.length < 10) {
            showToast("Incorrect Number");
          } else {
          }
        } else {
          showToast("Invalid E-mail");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const showToast = (text) => {
    var toast = document.getElementById("toast");
    toast.innerText = text;
    toast.style.display = "block";
    setTimeout(function () {
      toast.style.display = "none";
    }, 3000); // Hide the toast after 3 seconds (adjust the duration as needed)
  };
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
      <div
        id="toast"
        style={{
          display: "none",
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#333",
          color: "#fff",
          padding: "15px",
          borderRadius: "5px",
          zIndex: "999",
        }}
      ></div>
      <div
        class="modal-container"
        id="modal_container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: modalview ? 1 : 0,
          pointerEvents: modalview ? "auto" : "none",
          zIndex: "400",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.2)",
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          class="modal"
          style={{
            backgroundColor: "#fff",
            width: "600px",
            maxWidth: "100%",
            borderRadius: "5px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              padding: "20px 0px",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0086FF",
              color: "white",
            }}
          >
            <div
              style={{
                color: "black",
                width: "97%",
                textAlign: "right",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => setModalView(!modalview)}
            >
              <i className="fa fa-close"></i>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "40px",
                gap: "1px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0086FF",
                color: "white",
              }}
            >
              <h1>A</h1>
              <h1>M</h1>
              <h1>P</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "16px",
                  height: "auto",
                  width: "auto",
                  padding: "10px",
                  letterSpacing: "3px",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "black",
                  paddingTop: "5px",
                  paddingRight: "7px",
                }}
              >
                <text border>SP</text>
                <text style={{ margin: "-8px" }}>OT</text>
              </div>
            </div>
            <text style={{ fontSize: "14px" }}>Join Wait List</text>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginLeft: "20px",
            }}
          >
            <label style={{ textAlign: "left", fontSize: "14px" }}>
              Select User Type
            </label>
            <select
              name="userType"
              value={waitlist.userType}
              onChange={(e) => handleWaitList(e)}
              style={{
                width: "170px",
                height: "40px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            >
              <option hidden value=""></option>
              <option value="customer">Customer</option>
              <option value="dj">DJ</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginLeft: "20px",
              marginTop: "-10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <label style={{ textAlign: "left" }}>First Name</label>
              <input
                value={waitlist.firstName}
                name="firstName"
                onChange={(e) => handleWaitList(e)}
                style={{
                  width: "170px",
                  height: "30px",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textIndent: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginLeft: "10px",
              }}
            >
              <label style={{ textAlign: "left" }}>Last Name</label>
              <input
                value={waitlist.lastName}
                name="lastName"
                onChange={(e) => handleWaitList(e)}
                style={{
                  width: "170px",
                  height: "30px",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textIndent: "10px",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginLeft: "20px",
              }}
            >
              <label style={{ textAlign: "left", fontSize: "14px" }}>
                Email
              </label>
              <input
                type="email"
                value={waitlist.email}
                name="email"
                onChange={(e) => handleWaitList(e)}
                style={{
                  width: "230px",
                  height: "40px",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textIndent: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginLeft: "10px",
              }}
            >
              <label style={{ textAlign: "left", fontSize: "14px" }}>
                Number
              </label>
              <input
                type="tel"
                maxLength="10"
                value={waitlist.number}
                name="number"
                onChange={(e) => handleWaitList(e)}
                style={{
                  width: "230px",
                  height: "40px",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textIndent: "10px",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginLeft: "20px",
              }}
            >
              <label style={{ textAlign: "left" }}>Social Media Type</label>
              <select
                value={waitlist.socialMediaType}
                name="socialMediaType"
                onChange={(e) => handleWaitList(e)}
                style={{
                  width: "230px",
                  height: "40px",
                  border: "2px solid black",
                  borderRadius: "10px",
                }}
              >
                <option hidden value=""></option>
                <option value="tiktok">TikTok</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginLeft: "10px",
              }}
            >
              <label style={{ textAlign: "left" }}>Social Media Username</label>
              <input
                value={waitlist.socialMediaUserName}
                name="socialMediaUserName"
                onChange={(e) => handleWaitList(e)}
                style={{
                  width: "230px",
                  height: "40px",
                  border: "2px solid black",
                  borderRadius: "10px",
                  textIndent: "10px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0px 30px",
              gap: "15px",
            }}
          >
            <button
              id="submit"
              style={{
                border: "3px solid black",
                marginBottom: "30px",
                width: "70%",
                fontSize: "20px",
                backgroundColor: "#0086FF",
                borderRadius: "15px",
                padding: "10px 0px",
                fontWeight: "bold",
                color: "white",
                fontFamily: "Puritan sans-serif",
              }}
              onClick={handleWaitSubmit}
            >
              Join
            </button>
          </div>
        </div>
      </div>
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
