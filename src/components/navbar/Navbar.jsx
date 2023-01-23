import "./navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="Navbar local-bootstrap">
      <div className="container-fluid shadow">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <a className="navbar-brand fw-semibold" href="#">
              Food App
            </a>
          </div>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <ion-icon name="cart-outline"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
