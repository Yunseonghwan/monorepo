import type { NextPage } from "next";
import styled from "styled-components";
import { Button } from "design-system/stories";

const Home: NextPage = () => {
  console.log("asd");
  return (
    <Container>
      admin <Button primary />
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

export default Home;
