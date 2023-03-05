import { images } from "../imageList";
import like from "../images/like.svg";

const Gallery = () => {
  const imageList = images;
  console.log(imageList);

  const pinImage = (image) => {
    let alreadyPinnedImages = [];
    alreadyPinnedImages = JSON.parse(localStorage.getItem("pinnedImages"));
    if (alreadyPinnedImages === null) {
      alreadyPinnedImages = [];

      alreadyPinnedImages.push(image.name);
      localStorage.setItem("pinnedImages", JSON.stringify(alreadyPinnedImages));
      console.log("alreadyPinnedImages", alreadyPinnedImages);
    }
    if (
      alreadyPinnedImages != null &&
      !alreadyPinnedImages.includes(image.name)
    ) {
      alreadyPinnedImages.push(image.name);
      console.log("alreadyPinnedImages", alreadyPinnedImages);
      localStorage.setItem("pinnedImages", JSON.stringify(alreadyPinnedImages));
    }
    if (alreadyPinnedImages.includes(image.name)) {
      console.log("alreadyPinnedImages", alreadyPinnedImages);
      localStorage.setItem("pinnedImages", JSON.stringify(alreadyPinnedImages));
    }

    localStorage.setItem("pinnedImages", JSON.stringify(alreadyPinnedImages));
    console.log("items", alreadyPinnedImages);
    // }
  };

  // map and display images
  const imageElements = imageList.map((image, id) => {
    return (
      <div key={image.id} className="col-12 col-md-6 py-2">
        <div className="card p-card p-1 p-lg-2" onClick={() => pinImage(image)}>
          <div className="card-title fw-bold">Click <span className="text-capitalize">{image.name}'s</span> card to pin to favorites.</div>
          <img
            src={image.url}
            alt={image.name}
            className="card-img-bottom cd-img"
          />
          <div className="card-img-overlay p-0 w-100 h-100 middle">
            <img src={like} alt="like" className="m-auto heart align-middle" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{imageElements}</div>
    </div>
  );
};

export default Gallery;
