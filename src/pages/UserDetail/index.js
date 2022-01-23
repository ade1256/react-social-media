import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALBUM } from "../../redux/albums/albumsAPI";
import { listAlbums, setAlbumData } from "../../redux/albums/albumSlice";
import { GET_USER } from "../../redux/users/usersAPI";
import { UserDetailContainer } from "./style";
import { isEmpty } from "lodash";
import { AlbumItem } from "../../components";

const UserDetailPage = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const albums = useSelector(listAlbums);
  const userId = props.match.params.userId;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await GET_USER(userId);
      setUser(response.data);
    };
    const fetchAlbums = async () => {
      const response = await GET_ALBUM(userId);
      dispatch(setAlbumData(response.data));
    };
    
    fetchUser();
    fetchAlbums();
  }, []);

  return (
    <UserDetailContainer>
      {!isEmpty(user) ? (
        <>
          <div className="userHeader">
            <div className="userHeader__avatar">
              <img
                src={`https://ui-avatars.com/api/?name=${user.name}&size=128`}
                alt={user.name}
              />
              <h4>{user.name}</h4>
              <p>@{user.username}</p>
            </div>
            <p>
              <i className="fa fa-envelope"></i> {user.email}
            </p>
            <p>
              <i className="fa fa-home"></i> {user.address.suite},{" "}
              {user.address.street}, {user.address.zipcode}, {user.address.city}
            </p>
            <p>
              <i className="fa fa-briefcase"></i> {user.company.name}
            </p>
          </div>
          <div className="user-album">
            <h3>Albums</h3>
            {
              albums.map((album) => (
                <AlbumItem title={album.title} id={album.id} key={album.id} />
              ))
            }
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </UserDetailContainer>
  );
};

export default UserDetailPage;
