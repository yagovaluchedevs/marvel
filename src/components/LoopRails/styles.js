import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const ImageRails = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

export const ContainerCarousel = styled(Carousel)`
  button {
    background-color: transparent;
    box-shadow: 0 0 1px 3px rgba(211, 39, 39, 0.7);
    &:hover,
    &:active,
    &:focus {
      background-color: rgba(211, 39, 39, 0.7);
      box-shadow: 0 0 1px 3px red;
    }
  }
`;
