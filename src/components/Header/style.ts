import palette from "@/styles/palette";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 60px;
  padding: 0px 24px;
  background-color: ${palette.MONO_WHITE};
  border-bottom: 2px solid ${palette.GRAY_100};
`;
