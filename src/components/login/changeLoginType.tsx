import styled from 'styled-components';
import { Icon, Text } from '@k99hyerin/dj-simblue';

interface PropsType {
  text: string;
  arrow: 'left' | 'right';
  onClick: (type: 'oauth' | 'password') => void;
}

const ChangeLoginType = ({ text, arrow, onClick }: PropsType) => {
  return (
    <Container style={{ justifyContent: arrow === 'left' ? 'flex-row' : 'flex-end'}}>
      <Button onClick={onClick} style={{ flexDirection: arrow === 'left' ? 'row' : 'row-reverse' }}>
        <Icon iconName={arrow === 'left' ? 'ArrowBack' : 'ArrowFront'} color={'GRAY_600'} size={'SMALL'} />
        <Text typo={'PARAGRAPH_MEDIUM'} textColor={'GRAY_600'}>{text}</Text>
      </Button>
    </Container>
  )
}

export default ChangeLoginType;

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  `;
