import styled from "styled-components";

export const UserDetailContainer = styled.div`
  position: relative;
  .userHeader {
    .userHeader__avatar {
      position: relative;
      margin: 0 auto;
      text-align: center;
      img {
        border-radius: 128px;
        margin: 16px 0px;
      }
    }
    p {
      margin: 8px 0px;
    }
  }
  .user-album {
    border-top: 1px solid #cacaca;
    padding-top: 16px;
  }
`