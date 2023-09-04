"use client";

import { useQuery } from 'react-query';
import { getApplicationResult } from '@/interfaces/application/api';
import AppLayout from '@/layouts/AppLayout';
import { Button, Icon, Table } from '@k99hyerin/dj-simblue';
import { APPLICATION } from '@/constants/queryKey';
import styled from 'styled-components';

const TodaySeatTicket = () => {
  const { data, isSuccess } = useQuery(
    [APPLICATION, 1],
    () => getApplicationResult(1), {})

  return isSuccess && (
    <AppLayout title={"오늘의 이석증"}>
      <ButtonContainer>
        <Button size={'X_SMALL'} color={'white'} text={'엑셀 다운로드'}>
          <Icon iconName={'Excel'} />
        </Button>
      </ButtonContainer>
      <Table headTitle={[{ name: '이름', size: 'large' }]}>
        <tr>
          <td> 1</td>
        </tr>
      </Table>
    </AppLayout>
  )
}

export default TodaySeatTicket;

const ButtonContainer = styled.div`
  width: 100%;
`;
