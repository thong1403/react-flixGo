import Content from "../content-flix/Content_flixgo";
import NavBar from "../navbar/NavBar";
import Items from "../new_item/Item";
import "./Flixgo.css"

function Flixgo() {
  return <>
  <div className="flix-go">
    <NavBar/>
    <Content/>
    <Items/>
  </div>
  
  </>;
}

export default Flixgo;
