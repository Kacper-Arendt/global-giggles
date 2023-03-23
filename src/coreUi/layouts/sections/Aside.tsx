import styled from "@emotion/styled";

const StyledAside = styled.div`
  grid-area: aside;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const Aside = () => <StyledAside>Aside</StyledAside>;
