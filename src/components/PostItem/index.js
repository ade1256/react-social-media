import React from "react";
import PropTypes from "prop-types";
import { PostItemContainer } from "./style";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PostItemComponent = (props) => {
  const history = useHistory();
  return (
    <PostItemContainer id={props.id} isDetailPost={props.isDetailPost}>
      <div className="avatar">
        <img
          src={`https://ui-avatars.com/api/?name=${props.name}`}
          alt="avatar"
        />
      </div>
      <div className="content">
        <div className="header">
          <span
            className="name"
            onClick={() => history.push(`/user/${props.userId}`)}
          >
            {props.name}
          </span>
          <span className="username">@{props.username}</span>
          <span className="company">
            <i className="fa fa-briefcase"></i> {props.company}
          </span>
          <h3>{props.title}</h3>
        </div>
        <div
          className="body"
          onClick={() =>
            props.isDetailPost ? null : history.push(`/detail-post/${props.id}`)
          }
        >
          <p>{props.body}</p>
        </div>
        {props.isDetailPost ? null : (
          <div className="footer">
            <button
              onClick={() =>
                props.isDetailPost
                  ? null
                  : history.push(`/detail-post/${props.id}`)
              }
            >
              <i className="fa fa-comment"></i> {props.totalComments} Comments
            </button>
          </div>
        )}
      </div>
    </PostItemContainer>
  );
};

PostItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  isDetailPost: PropTypes.bool,
};

export default PostItemComponent;
