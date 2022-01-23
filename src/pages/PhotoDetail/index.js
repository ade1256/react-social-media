import React, { useEffect, useState } from "react";
import { GET_PHOTO_DETAIL } from "../../redux/photos/photosAPI";
import { isEmpty } from "lodash";
import { PhotoDetailContainer } from "./style";

const PhotoDetailPage = (props) => {
  const photoId = props.match.params.id;
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await GET_PHOTO_DETAIL(photoId);
      setPhoto(response.data);
    };
    fetchPhoto();
  }, [photoId]);
  return (
    !isEmpty(photo) ? (
      <PhotoDetailContainer>
        <h4>{photo.title}</h4>
        <img src={photo.url} alt={photo.title} />
      </PhotoDetailContainer>
    ) :
    (
      <div>loading...</div>
    )
  );
};

export default PhotoDetailPage;
