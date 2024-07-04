import React, { useContext, useEffect, useState } from "react";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { AuthLogin } from "../../App";
import apiData from "../../data/data";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [Loader, setLoader] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthLogin);

  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/home/${id}`);
  };

  // const raw = JSON.stringify({
  //   category: "movies",
  //   language: "kannada",
  //   genre: "all",
  //   sort: "voting",
  // });

  const handleData = async () => {
    // api does not the reason of cors

    try {
      // const response = await fetch("https://hoblist.com/api/movieList", {
      //   mode: "no-cors",
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: raw,
      // });

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // const data = await response.json();

      // console.log("Item Data", data);

      setMovies(apiData.result); // Ensure you set the correct part of the response
      setLoader(false);
    } catch (error) {
      console.log("Data not Found:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  if (isLoggedIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "gainsboro",
        }}
      >
        <div className="productsmainparent">
          {Loader
            ? "loading ..."
            : movies.map((item) => (
                <div key={item._id} className="product_1stChild">
                  <div className="leftrightcenter">
                    <div className="leftvote">
                      <span style={{ cursor: "pointer" }}>
                        <VscTriangleUp />
                      </span>
                      <span>{item.totalVoted}</span>
                      <span style={{ cursor: "pointer" }}>
                        <VscTriangleDown />
                      </span>
                      <span style={{ fontSize: "9px" }}>Votes</span>
                    </div>

                    <div className="rightcontent">
                      <div className="leftImage">
                        <img
                          className="MoviePosterHeightImage"
                          src={item?.poster}
                          alt=""
                        />
                      </div>
                      <div className="rightmaincontent">
                        <div className="headingandcontent">
                          <span>{item.title}</span>
                          <span style={{ color: "GrayText" }}>
                            Genre:{" "}
                            <span style={{ color: "black" }}>{item.genre}</span>
                          </span>
                          <span
                            style={{
                              color: "GrayText",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Director:{" "}
                            <span
                              style={{
                                color: "black",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {item.director[0]}
                            </span>
                          </span>
                          <span
                            style={{
                              color: "GrayText",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Starring:{" "}
                            <span
                              style={{
                                color: "black",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {item.stars[0]}
                            </span>
                          </span>
                          <span>Mins | Eng | 2Apr</span>
                        </div>
                        <div className="votesandstuff">
                          <span style={{ color: "#2196F3" }}>
                            {item.pageViews} views | Voted by {item.voting}{" "}
                            People
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="watchtrailer">
                    <button
                      onClick={() => handleNavigation(item._id)}
                      className="btndesign"
                    >
                      Watch Trailer
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Login First</h1>
      </div>
    );
  }
};

export default Home;
