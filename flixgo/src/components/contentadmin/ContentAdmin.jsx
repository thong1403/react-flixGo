import "./ContentAdmin.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ContentAdmin() {
  const [top, setTop] = useState([]);
  const [Latest, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
      .then((data) => setTop(data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/user").then((data) => setUser(data.data));
  }, []);
  console.log(top);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <p>Unique views this month</p>
            <h1>5 678</h1>
          </div>
          <div className="col-3">
            <p>Items added this month</p>
            <h1>172</h1>
          </div>
          <div className="col-3">
            <p>New comments</p>
            <h1>20573</h1>
          </div>
          <div className="col-3">
            <p>New reviews</p>
            <h1>1 021</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 table-topItem">
            <h2>Top Items</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">TITLE</th>
                  <th scope="col">RATING</th>
                </tr>
              </thead>
              {top.map((e) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{e.id}</th>
                      <td>{e.title}</td>

                      <td>{e.point}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="col-6 table-topItem">
            <h2>Latest Items</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">TITLE</th>
                  <th scope="col">STATUS</th>

                  <th scope="col">RATING</th>
                </tr>
              </thead>
              {top.map((e) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{e.id}</th>
                      <td>{e.title}</td>
                      <td>{e.status}</td>
                      <td>{e.point}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="col-6 table-topItem">
            <h2>Latest Items</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">EMAIL</th>
                  <th>USERNAME</th>
                </tr>
              </thead>
              {Latest.map((e) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{e.id}</th>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>USERNAME</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="col-6 table-topItem">
            <h2>Latest reviews</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">TITLE</th>
                  <th> AUTHOR</th>
                  <th scope="col">RATING</th>
                </tr>
              </thead>
              {top.map((e) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{e.id}</th>
                      <td>{e.title}</td>
                      <td>John Doe</td>
                      <td>{e.point}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentAdmin;
