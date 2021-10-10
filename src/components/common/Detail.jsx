import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Detail = ({ image, title, description, direction }) => {
  return (
    <Fade bottom>
      <Container direction={direction}>
        <img src={image} alt={title} />
        <Content>
          <h3>{title}</h3>
          <p>{description}</p>
        </Content>
      </Container>
    </Fade>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "right" ? "row" : "row-reverse"};
  align-items: center;
  img {
    width: 50%;
  }
`;

const Content = styled.div`
  width: 45%;
  margin: auto;
  h3 {
    color: white;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
  }
  p {
    margin-top: 5px;
    line-height: 18px;
    color: #999999;
    font-size: 14px;
  }
`;

export default Detail;
