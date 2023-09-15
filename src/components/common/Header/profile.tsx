import styled from "styled-components";
import { Icon, Text } from '@k99hyerin/dj-simblue';

interface PropsType {
  name: string;
}

const Profile = ({ name }: PropsType) => {
  return (
    <StyledProfile>
      <Text typo={'PARAGRAPH_MEDIUM'}>{name} 선생님</Text>
      <Icon iconName={'ArrowDown'} size={'MEDIUM'}/>
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
