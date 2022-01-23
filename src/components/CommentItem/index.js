import React from "react";
import PropTypes from "prop-types";
import { CommentItemContainer } from "./style";

const CommentItemComponent = (props) => {
  return (
    <CommentItemContainer>
      <div className="avatar">
        <img
          src={`https://ui-avatars.com/api/?name=${props.name}`}
          alt="avatar"
        />
      </div>
      <div className="content">
        <div className="header">
          <span className="name">{props.name}</span>
          <span className="username"><i className="fa fa-envelope"></i> {props.email}</span>
          <h3>{props.title}</h3>
        </div>
        <div className="body">
          <p>{props.body}</p>
        </div>
      </div>
    </CommentItemContainer>
  );
};

CommentItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default CommentItemComponent;
