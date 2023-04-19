import styled from "styled-components";

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MenuLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  /* color-ssam */
  color: #000000;
  &:hover {
    color: #f36e67;
  }
`;
