import styled from "styled-components";

export const ContainerLoading = styled.section`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageLoading = styled.img`
  object-fit: fill;
  animation: animation-loading 0.9s ease-in-out infinite;

  @keyframes animation-loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
