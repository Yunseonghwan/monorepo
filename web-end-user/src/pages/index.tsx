import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return <Container>client</Container>;
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

export default Home;
