import "./header.scss";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchFav from "./SearchFav";

function Header() {
  const location = useLocation();
  return (
    <div className="header-container">
      <Link to="/">
        <h1 className="header-container__logo">
          <img src="https://seeklogo.com/images/U/unsplash-logo-50F0DCF9BD-seeklogo.com.png" alt="" />
        </h1>
      </Link>

      <div className="header-container__search">
        {location.pathname === "/" ? (
          <Search className="header-container__search-component" />
        ) : (
          <SearchFav className="header-container__search-component" />
        )}

        <Link to="/favorites">
          <p className="header-container__favorites">
            My
            <span>
              <CameraAltIcon />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
