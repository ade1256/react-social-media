import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_COMMENT } from "../../redux/comments/commentsAPI";
import { GET_POST } from "../../redux/posts/postAPI";
import { GET_USERS } from "../../redux/users/usersAPI";
import { listUsers, setUsersData } from "../../redux/users/userSlice";
import { isEmpty } from "lodash";
import { CommentItem, PostItem } from "../../components";
import {
  getCompanyNameById,
  getNamebyId,
  getTotalCommentByPost,
  getUsernameById,
} from "../../utility/utils";

const DetailPostPage = (props) => {
  const isDetailPost =
    props.history.location.pathname.match(/detail-post/g)[0] === "detail-post";
  const dispatch = useDispatch();
  const users = useSelector(listUsers);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  let params = props.match.params.id;

  const _renderComments = () => {
    let element = [];
    comments.map((comment) => {
      element.push(
        <CommentItem
          key={comment.id}
          id={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      );
      return "";
    });
    return element;
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await GET_POST(params);
      setPost(response.data);
    };
    const fetchComments = async () => {
      const response = await GET_COMMENT(params);
      setComments(response.data);
    };
    const fetchUsers = async () => {
      const response = await GET_USERS();
      dispatch(setUsersData(response.data));
    };
    fetchPost();
    fetchComments();
    fetchUsers();
  }, []);

  return (
    <div className="detail-post-page">
      <h2>Detail Post</h2>
      {isEmpty(post) ? (
        <div>Loading...</div>
      ) : (
        <>
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
            isDetailPost={isDetailPost}
          />
          <div className="comment-section">
            <h4>Comments Total ({comments.length})</h4>
            {_renderComments()}
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPostPage;
