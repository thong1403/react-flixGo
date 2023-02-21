import "./Nav-Item.css"

function NavItem() {
  return (
    <div className="item">
      <div className="container">
        <div className="row title-nav-item">
          <div className="col-12">
            <h1>New items</h1>
          </div>
          <div className="col-2">NEW RELEASES</div>
          <div className="col-2">MOVIES</div>
          <div className="col-2">TV SERIES</div>
          <div className="col-2">CARTOONS</div>
        </div>
      </div>
    </div>
  );
}

export default NavItem;
