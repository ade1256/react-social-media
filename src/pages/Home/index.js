import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostItem } from "../../components";
import { GET_COMMENTS } from "../../redux/comments/commentsAPI";
import {
  listComments,
  setCommentsData,
} from "../../redux/comments/commentSlice";
import { GET_POSTS } from "../../redux/posts/postAPI";
import { listPosts, setPostsData } from "../../redux/posts/postSlice";
import { GET_USERS } from "../../redux/users/usersAPI";
import { listUsers, setUsersData } from "../../redux/users/userSlice";
import { getCompanyNameById, getNamebyId, getTotalCommentByPost, getUsernameById } from "../../utility/utils";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(listPosts);
  const comments = useSelector(listComments);
  const users = useSelector(listUsers);
  const statusPosts = useSelector((state) => state.posts.status);

  const _renderPosts = () => {
    const elements = [];
    posts.map((post) => {
      elements.push(
        <PostItem
          key={post.id}
          id={post.id}
          userId={post.userId}
          name={getNamebyId(users, post.userId)}
          username={getUsernameById(users, post.userId)}
          title={post.title}
          body={post.body}
          totalComments={getTotalCommentByPost(comments, post.id)}
          company={getCompanyNameById(users, post.userId)}
        />
      );
      return "";
    });
    return elements;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await GET_POSTS();
      dispatch(setPostsData(response.data));
    };
    const fetchComments = async () => {
      const response = await GET_COMMENTS();
      dispatch(setCommentsData(response.data));
    };
    const fetchUsers = async () => {
      const response = await GET_USERS();
      dispatch(setUsersData(response.data));
    };
    fetchPosts();
    fetchComments();
    fetchUsers();
  }, []);

  return (
    <>{statusPosts === "finished" ? _renderPosts() : <div>Loading...</div>}</>
  );
};

export default HomePage;
