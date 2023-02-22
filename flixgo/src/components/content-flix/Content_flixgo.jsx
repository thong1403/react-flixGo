import "./Content.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Content() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((data) => setPost(data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(post);

  return (
    <div className="flix-go-content">
      <div className="container content-flixgo">
        <div className="row">
          <div className="col-12 title-container">
            <h2 className="title">
              <b>NEW ITEMS</b> OF THIS SEASON
            </h2>
          </div>
        </div>
        <div className="row">
          {post.map((e) => {
            return (
              <div className="col-3 post-map">
                <Link to="/detail">
                  <img src={e.image} alt="" className="img-content" />
                </Link>
                <h4>{e.title}</h4>
                <span>{e.author}</span>
                <p>
                  <b>{e.point}</b>{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
