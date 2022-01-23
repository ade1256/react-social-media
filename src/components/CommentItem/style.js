import styled from 'styled-components';

export const CommentItemContainer = styled.div`
  position: relative;
  background: #fff;
  border-bottom: 1px solid #cacaca;
  display: flex;
  padding: 16px 24px;
  margin: 0px 24px;
  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 64px;
    margin-right: 24px;
    img {
      width: 64px;
      height: 64px;
      border-radius: 64px;
    }
  }
  .content {
    width: 100%;
  }
  .header {
    .name, .username, .company {
      font-size: 12px;
    }
    .company {
      margin-left: 8px;
    }
    .username {
      margin-left: 4px;
      color: #888;
    }
    h3 {
      font-size: 16px;
    }
  }
  .body {
    p {
      font-size: 12px;
    }
  }
  .footer {
    position: relative;
    width: 100%;
    margin-top: 16px;
    button {
      width: inherit;
      border: none;
      background: none;
      border: 1px solid #cacaca;
      padding: 8px;
      margin-top: 4px;
      font-size: 12px;
      color: #666;
      &:hover {
        cursor: pointer;
      }
    }
  }
`