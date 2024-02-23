import styled from "styled-components";

export default function HomeImg() {
  return (
    <Div>
      <Img src="../assets/images/home.jpg" alt="" />
    </Div>
  );
}

const Div = styled.div`
  width: 50vw;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
