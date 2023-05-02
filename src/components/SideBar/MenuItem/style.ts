import palette from "@/styles/palette";
import { getTypoFromName } from "@/styles/typo";
import styled from "styled-components";

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MenuLink = styled.a`
  ${getTypoFromName("PARAGRAPH_MEDIUM")}

  cursor: pointer;
  color: ${palette.MONO_BLACK};
  &:hover {
    color: ${palette.PRIMARY_400};
  }
`;
