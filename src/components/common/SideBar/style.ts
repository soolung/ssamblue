import styled from "styled-components";

export const SideBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 325px;
  height: 100%;
  padding: 60px 0px;

  /* color-ssam */
  background-color: #f3f3f3;
  border-right: 2px solid #e8e8e8;
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
