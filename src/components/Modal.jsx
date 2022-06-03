import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { editPhoto } from "../slices/favPhotoSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ idPhoto, open, onClose }) {
  // const favoritePhoto = useSelector((state) => state.favPhotos.listFavPhotos);

  const favoritePhoto = useSelector((state) => state.favPhotos.listFavPhotos.find((e) => e.id === idPhoto));

  console.log(favoritePhoto.user.first_name);
  if (!open || !idPhoto) {
    return null;
  }

  //   dispatch(getPhoto(photo));
  //   console.log("click a delete");
  // };
  // const handleChange = (element) => {
  //   dispatch(editPhoto(element));
  // };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <span>Author: {}</span>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <span>{favoritePhoto.user.first_name}</span>
              {/* <span> {favoritePhoto.updated_at}</span>
              <span> {favoritePhoto.username}</span>
              <span> {favoritePhoto.location}</span>
              <span>{favoritePhoto.description}</span> */}
            </Typography>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
          </form>
          {/* <button onClick={() => handleChange()}>Change</button> */}
        </Box>
      </Modal>
    </div>
  );
}
