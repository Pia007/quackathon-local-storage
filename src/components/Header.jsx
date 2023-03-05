import { Link } from "react-router-dom";

const Header = () => {
  // add active class to the current page
  const navLinks = document.querySelectorAll(".nav-link");
  const currentLocation = window.location.href;
  navLinks.forEach((link) => {
    if (link.href === currentLocation) {
      link.classList.add("active");
    }
  });
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex flex-row justify-content-around">
          <div className="navbar-nav d-flex flex-row">
            <div className="nav-item">
              <Link className="nav-link mx-1 " aria-current="page" to="/">
                Gallery
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link mx-1" to="/favorites">
                Favorites
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header