import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return <Container>agent</Container>;
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

export default Home;
