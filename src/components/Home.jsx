import "./home.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../slices/photoSlice";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
// import { Link } from "react-router-dom";

const Home = () => {
  const allPhotos = useSelector((store) => store.photos);
  console.log(allPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);
  const breakpoint = {
    default: 3,
    740: 1,
  };

  return (
    <>
      <div className="home-container">
        <Masonry breakpointCols={breakpoint} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {allPhotos.listPhotos.map((e) => (
            <div className="photos-container">
              <img src={e.urls.small} alt="" />
              <div className="hover-action-icons">
                <span className="icon-border-heart">
                  {/* <FavoriteBorderIcon className="heart" /> */}
                  <FavoriteBorderIcon />
                </span>
                <div className="container-icon-trash">
                  <span className="icon-trash">
                    <DeleteOutlineIcon />
                  </span>
                  <span className="icon-pencil">
                    <EditIcon />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      <masonry></masonry>
    </>
  );
};
export default Home;
