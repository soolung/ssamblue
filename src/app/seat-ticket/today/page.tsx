"use client";

import { useQuery } from 'react-query';
import { getApplicationResult } from '@/interfaces/application/api';
import AppLayout from '@/layouts/AppLayout';
import { Button, Table, TableItem, TableRow, Text } from '@k99hyerin/dj-simblue';
import { APPLICATION } from '@/constants/queryKey';
import styled from 'styled-components';
import TableInput from '@/components/common/TableInput/tableInput';
import { todaySeatTicketTableHead } from '@/constants/table';
import { generateReplyStateBadge } from '@/utils/badge/generateReplyStateBadge';

const TodaySeatTicket = () => {
  const { data, isSuccess } = useQuery(
    [APPLICATION, 1],
    () => getApplicationResult(1), {})

  return isSuccess && (
    <AppLayout title={"오늘의 이석증"}>
      <HeaderContainer>
        <TableInputContainer>
          <TableInput text={"날짜"}>
            <Text typo={'PARAGRAPH_SMALL'} textColor={'GRAY_700'}>2023.01.12</Text>
          </TableInput>
          <TableInput text={"장소"}>
            <Text typo={'PARAGRAPH_SMALL'} textColor={'GRAY_700'}>프로그래밍1실</Text>
          </TableInput>
          <TableInput text={"이동시간"}>
            <Text typo={'PARAGRAPH_SMALL'} textColor={'GRAY_700'}>7교시</Text>
          </TableInput>
        </TableInputContainer>
        <ConfirmButton size={'X_SMALL'} color={'primary'} text={'확인하기'} />
      </HeaderContainer>
      <Table headTitle={todaySeatTicketTableHead}>
        {data.resultList.map(r => (
          <TableRow>
            <TableItem>{r.studentNumber}</TableItem>
            <TableItem>{r.name}</TableItem>
            <TableItem>{r.replyList[1].reply}</TableItem>
            <TableItem>{r.replyList[2].reply}</TableItem>
            <TableItem>{r.replyList[3].reply}</TableItem>
            <TableItem>{r.replyList[4].reply}</TableItem>
            <TableItem>{generateReplyStateBadge(r.replyList[4].state)}</TableItem>
          </TableRow>
        ))
        }
      </Table>
    </AppLayout>
  )
}

export default TodaySeatTicket;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 56px;
`;

const TableInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ConfirmButton = styled(Button)`
  width: 80px;
`;
