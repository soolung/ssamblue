import styled from 'styled-components';
import { Text } from '@k99hyerin/dj-simblue';
import { usePathname, useRouter } from 'next/navigation';

interface PropsInterface {
  emoji: string;
  href: string;
  name: string;
}

const MenuItem = ({ emoji, href, name }: PropsInterface) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname + ' ' + href)

  return (
    <Container onClick={() => router.push(href)}>
      {emoji}
      <Text
        typo={'PARAGRAPH_MEDIUM'}
        textColor={pathname == href ? 'PRIMARY_400' : 'MONO_BLACK'}
      >
        {name}
      </Text>
    </Container>
  );
};

export default MenuItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
