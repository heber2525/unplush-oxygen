import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Update() {
  const favoritesPhotos = useSelector((state) => state.favPhotos.listFavPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  });
  return (
    <>
      <form action="">
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" />
        <input type="text" />
      </form>
    </>
  );
}
export default Update;
