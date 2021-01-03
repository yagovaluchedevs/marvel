import styled from "styled-components";
import "../../assets/lupa-vermelha.png";
export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  height: 50px;
  background-color: black;
`;

export const ContainerImageHeader = styled.div`
  width: 55%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 600px) {
    width: 45%;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

export const ImageHeader = styled.img`
  width: 80px;
  height: 35px;
`;

export const SearchContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InputSearch = styled.input`
  background-image: url("https://www.flaticon.com/br/premium-icon/icons/svg/2319/2319177.svg");
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: 18px;
  border-radius: 10px;
`;
