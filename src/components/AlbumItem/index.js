import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { GET_PHOTOS } from '../../redux/photos/photosAPI';
import { isEmpty } from 'lodash';
import { AlbumItemContainer } from './style';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AlbumItemComponent = (props) => {
  const history = useHistory()
  const [photos, setPhotos] = useState([])
  const _renderThumbnails = () => {
    const elements = []
    photos.map((photo) => {
      elements.push(
        <div className="thumbnail" key={photo.id} onClick={() => history.push(`/photos/${photo.id}`)}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      )
      return ''
    })
    return elements
  }
  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await GET_PHOTOS(props.id);
      setPhotos(response.data)
    }
    fetchPhoto()
  }, [])
  return (
    <AlbumItemContainer>
      <h4>{props.title}</h4>
      <div className="album-item">
        {!isEmpty(photos) && _renderThumbnails()}
      </div>
    </AlbumItemContainer>
  )
}

AlbumItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
}

export default AlbumItemComponent
