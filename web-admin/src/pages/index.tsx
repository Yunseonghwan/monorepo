import { Button } from "@/common/components";
import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  console.log("asd");
  return (
    <Container>
      admin <Button />
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

export default Home;
