"use client";

import { useQuery } from 'react-query';
import { Filter, getApplicationResult } from '@/interfaces/application/api';
import AppLayout from '@/layouts/AppLayout';
import { Button, Dropdown, DropItem, Table, TableItem, TableRow, Text } from '@k99hyerin/dj-simblue';
import { APPLICATION } from '@/constants/queryKey';
import styled from 'styled-components';
import TableInput from '@/components/common/TableInput/tableInput';
import { todaySeatTicketTableHead } from '@/constants/table';
import { generateReplyStateBadge } from '@/utils/badge/generateReplyStateBadge';
import { format } from '@/utils/date/formatter';
import { useDropdown } from '@/hooks/useDropdown';
import { PLACE, TIME } from '@/constants/dropdown';

const TodaySeatTicket = () => {
  const placeDropdown = useDropdown(PLACE);
  const timeDropdown = useDropdown(TIME);

  const appendOrNone = (questionId: number, target: string): Filter[] => {
    return target !== '전체' ?
      [{
        questionId: questionId,
        operator: 'EQUAL',
        target: target
      }] : [];
  }
  const { data, isSuccess, refetch } = useQuery(
      [APPLICATION, 1],
      () => getApplicationResult({
        id: 1,
        filterList: [
          {
            questionId: 1,
            operator: 'EQUAL',
            target: format(new Date())
          },
          ...appendOrNone(2, placeDropdown.value),
          ...appendOrNone(3, timeDropdown.value)
        ]
      }),
      {}
    )
  ;

  return isSuccess && (
    <AppLayout title={"오늘의 이석증"}>
      <HeaderContainer>
        <TableInputContainer>
          <TableInput text={"날짜"}>
            <Text typo={'PARAGRAPH_SMALL'} textColor={'GRAY_700'}>
              {new Date().toLocaleDateString()}
            </Text>
          </TableInput>
          <TableInput text={"장소"}>
            <Dropdown isClicked={placeDropdown.isClicked}
                      setIsClicked={placeDropdown.toggle}
                      selectedItem={{
                        name: placeDropdown.value,
                        state: 'ENABLED'
                      }}
            >
              {placeDropdown.valueList.map(p => <DropItem
                onClick={() => placeDropdown.select(p)}
                dropItem={{
                  name: p,
                  state: 'ENABLED'
                }} />
              )}
            </Dropdown>
          </TableInput>
          <TableInput text={"이동시간"}>
            <Dropdown isClicked={timeDropdown.isClicked}
                      setIsClicked={timeDropdown.toggle}
                      selectedItem={{
                        name: timeDropdown.value,
                        state: 'ENABLED'
                      }}
            >
              {timeDropdown.valueList.map(t => <DropItem
                onClick={() => timeDropdown.select(t)}
                dropItem={{
                  name: t,
                  state: 'ENABLED'
                }} />
              )}
            </Dropdown>
          </TableInput>
        </TableInputContainer>
        <ConfirmButton
          size={'X_SMALL'}
          color={'primary'}
          text={'불러오기'}
          onClick={() => refetch()}
        />
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
