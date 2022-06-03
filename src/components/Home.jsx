import "./home.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../slices/photoSlice";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addToFavorites } from "../slices/favPhotoSlice";
import Search from "./Search";

const Home = () => {
  const allPhotos = useSelector((store) => store.photos);
  console.log(allPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleAddFavorites = (element) => {
    dispatch(addToFavorites(element));
  };

  const breakpoint = {
    default: 3,
    850: 1,
  };

  return (
    <>
      <div className="home-container">
        <Masonry breakpointCols={breakpoint} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {allPhotos.listPhotos.map((e, index) => (
            <div key={index} className="photos-container">
              <img key={e.id} src={e.urls.small} alt="" />
              <div className="hover-action-icons">
                <span className="icon-border-heart">
                  <FavoriteBorderIcon onClick={() => handleAddFavorites(e)} />
                </span>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};
export default Home;
