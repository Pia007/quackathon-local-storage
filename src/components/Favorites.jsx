import { useState } from "react";
import { images } from "../imageList";
import dislike from "../images/dislike.svg";

const Favorites = () => {
  const [newList, setNewList] = useState([]);

  let alreadyPinnedImages = JSON.parse(localStorage.getItem("pinnedImages"));
  console.log("alreadyPinnedImages", alreadyPinnedImages);

  // check images array for images that are in pinnedImages array
  const foundImages = images.filter((image) => {
    return alreadyPinnedImages.includes(image.name);
  });
  console.log("foundImages", foundImages);

  // remove image from pinned Immages array
  const removeImage = (image) => {
    let alreadyPinnedImages = JSON.parse(localStorage.getItem("pinnedImages"));
    console.log("alreadyPinnedImages", alreadyPinnedImages);

    // remove the image from foundImages array
    const updatedImages = foundImages.filter((foundImage) => {
      return foundImage.name !== image.name;
    });
    console.log("updatedImages", updatedImages);

    // remove the image from pinnedImages array
    const updatedPinnedImages = alreadyPinnedImages.filter((pinnedImage) => {
      return pinnedImage !== image.name;
    });
    console.log("updatedPinnedImages", updatedPinnedImages);

    // update the pinnedImages array in local storage
    localStorage.setItem("pinnedImages", JSON.stringify(updatedPinnedImages));

    let newItems = JSON.parse(localStorage.getItem("pinnedImages"));
    console.log("newItems", newItems);

    setNewList(updatedImages);
  };

  // map and display images
  const pinnedImages = foundImages.map((image, id) => {
    return (
      <div key={image.id} className="col-12 col-md-6 py-2">
        <div
          className="card p-card p-1 p-lg-2"
          onClick={() => removeImage(image)}
        >
          <div className="card-title fw-bold">
            Click <span className="text-capitalize">{image.name}'s </span> card
            to upnin.
          </div>
          <img
            src={image.url}
            alt={image.name}
            className="card-img-bottom cd-img"
          />
          <div className="card-img-overlay p-0 w-100 h-100 middle">
            <img
              src={dislike}
              alt="like"
              className="m-auto heart align-middle"
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    // conditionally render the pinned images
    <div className="container">
      {pinnedImages.length === 0 ? (
        <div className="row">
          <h1 className="text-light">No Favorites!</h1>
        </div>
      ) : (
        <div className="row">
          <h1 className="text-light">Favorites!</h1>

          {pinnedImages}
        </div>
      )}
    </div>
  );
};

export default Favorites;
