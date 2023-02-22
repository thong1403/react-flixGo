import NavBar from "../navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Detail.css";

function Detail() {
  const [comment, setComment] = useState([]);
  const [usercomment, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.comment.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
      .then((data) => setComment(data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        <NavBar />
        <div className="container">
          <div className="row margin-detail">
            {comment.length === 0 ? (
              "Loading..."
            ) : (
              <div className="col-6 detail">
                <h2>{comment[0].title}</h2>
                <div className="detail-content">
                  <img src={comment[0].image} alt="" />
                  <div className="content-detail">
                    <h6>
                      <b>{comment[0].point}</b>
                    </h6>
                    Genre: <span> {comment[0].action}</span>
                    <p>Release year: {comment[0].year}</p>
                    <p>Running time: {comment[0].time}</p>
                    Country:<span> {comment[0].Country}</span>
                    <p>{comment[0].content}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="col-6">
              <video width="100%" height="70%" controls className="video">
                <source
                  src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="comment">
            <div className="row title-comment-top">
              <h1>DISCOVER</h1>
              <div className="col-2">COMMENT</div>
              <div className="col-2">RIVIEWS</div>
            </div>
            <div className="row">
              <div className="col-8">
                {usercomment.map((e) => {
                  return (
                    <div className="user-comment">
                      <div className="icon-user">
                        <i class="fa-solid fa-circle-user"></i>
                        <span>
                          <b>{e.name}</b>
                        </span>
                      </div>
                      <p>{e.comment}</p>
                    </div>
                  );
                })}
                <div className="input-comment">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="comment"
                      placeholder="Add comment"
                      className="input-user-comment"
                    />
                    <button className="btn-comment">
                      <b>SEND</b>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-4">
                <h1>You may also like...</h1>
                <div className="row">
                  {comment.map((e) => {
                    return (
                      <div className="col-6">
                        <img src={e.image} alt="" className="image-content" />
                        <h6>
                          <b>{e.title}</b>
                        </h6>
                        <span>{e.action}</span>
                        <h5>{e.point}</h5>
                      </div>
                    );
                  })}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
