import palette from "@/styles/palette";
import styled from "styled-components";

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;

  width: 325px;
  height: 100%;
  padding: 60px 0px;
  background-color: ${palette.GRAY_50};
  border-right: 2px solid ${palette.GRAY_100};
`;
