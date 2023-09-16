"use client";

import AppLayout from '@/layouts/AppLayout';
import { palette, Text } from '@k99hyerin/dj-simblue';

const Home = () => {
  return (
    <AppLayout title='안녕하세요!'>
        <Text typo={'PARAGRAPH_LARGE'}>기존 심청이에서 선생님을 위한 서비스를 분리한 "쌤청이"입니다.</Text>
        <Text typo={'PARAGRAPH_LARGE'}>아쉽게도 지금은 쌤청이에서 이석증 기능만을 이용할 수 있습니다.</Text>
        <Text typo={'PARAGRAPH_LARGE'}>기존 <a style={{ color: palette.PRIMARY_400, fontWeight: 700, textDecoration: 'underline'}} href="https://www.simblue.kro.kr">심청이 사이트</a>에서 신청 만들기, 결과 조회 등의 서비스를 계속 제공하니 새로운 신청을 만들 분들은 심청이 사이트를 참고해주세요.</Text>
        <Text typo={'PARAGRAPH_LARGE'}>다시 새로운 기능을 열심히 만들 예정이니 지켜봐주세요~!</Text>
    </AppLayout>
  );
};

export default Home;
