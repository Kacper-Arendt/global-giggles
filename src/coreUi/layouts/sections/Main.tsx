import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const StyledMain = styled.main`
  grid-area: main;
`;

export const Main = () => (
  <StyledMain>
    <Outlet />
  </StyledMain>
);
