import "./header.scss";

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-container__logo">
        <img src="https://seeklogo.com/images/U/unsplash-logo-50F0DCF9BD-seeklogo.com.png" alt="" />
      </h1>
      <div className="header-container__search">
        <input type="text" placeholder="search" />

        <span className="header-container__favoritesPhotoLink">Favorite Photos</span>

        {/* <button className="header-container__button" type="submit">
          Search
        </button> */}
      </div>
    </div>
  );
}

export default Header;
