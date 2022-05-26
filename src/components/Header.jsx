import "./header.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <h1 className="header-container__logo">
          <img src="https://seeklogo.com/images/U/unsplash-logo-50F0DCF9BD-seeklogo.com.png" alt="" />
        </h1>
      </Link>

      <div className="header-container__search">
        <div>
          <input type="text" placeholder="search" />
          <button className="header-container__button-submit" type="submit ">
            Search
          </button>
        </div>

        <Link to="/favorites">
          <p className="header-container__favorites">
            My
            <span>
              <FavoriteIcon />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
