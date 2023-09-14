"use client";

import AppLayout from '@/layouts/AppLayout';
import TableInput from '@/components/common/TableInput/tableInput';
import { Button, DatePicker, Dropdown, DropItem, Icon, Table, TableItem, TableRow, Text } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import { seeSeatTicketTableHead } from '@/constants/table';
import { useQuery } from 'react-query';
import { APPLICATION } from '@/constants/queryKey';
import { Filter, getApplicationResult, Operator } from '@/interfaces/application/api';
import { generateReplyStateBadge } from '@/utils/badge/generateReplyStateBadge';
import { useDropdown } from '@/hooks/useDropdown';
import { PLACE, TIME } from '@/constants/dropdown';
import { format } from '@/utils/date/formatter';
import { useDatePicker } from '@/hooks/useDatePicker';
import { useEffect } from 'react';

const SeeSeatTicket = () => {
  const placeDropdown = useDropdown(PLACE);
  const timeDropdown = useDropdown(TIME);
  const datePicker = useDatePicker();

  const appendOrNone = ({ questionId, target, operator = 'EQUAL' }: {
    questionId: number,
    target: string | null,
    operator?: Operator
  }): Filter[] => {
    return target != null && target !== '전체' ?
      [{
        questionId: questionId,
        operator: operator,
        target: target
      }] : [];
  }

  useEffect(() => {
    console.log(datePicker.selectedDate);
  }, [datePicker.selectedDate])

  const { data, isSuccess, refetch } = useQuery(
    [APPLICATION, 1],
    () => getApplicationResult({
      id: 1,
      filterList: [
        {
          questionId: 1,
          operator: datePicker.isRange() ? 'BEFORE_OR_EQUAL' : 'EQUAL',
          target: format(datePicker.selectedDate)
        },
        ...appendOrNone({
          questionId: 1,
          target: datePicker.isRange() ? format(datePicker.endDate!) : null,
          operator: 'AFTER_OR_EQUAL'
        }),
        ...appendOrNone({ questionId: 2, target: placeDropdown.value }),
        ...appendOrNone({ questionId: 3, target: timeDropdown.value })
      ]
    }), {})

  return isSuccess && (
    <AppLayout title="이석증 확인하기">
      <HeaderContainer>
        <TableInputContainer>
          <TableInput text={"날짜"}>
            <Text typo={'PARAGRAPH_SMALL'} textColor={'GRAY_700'}>
              <DatePicker
                handleSelectedDate={datePicker.setSelectedDate}
                handleEndDate={datePicker.setEndDate}
              />
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
          onClick={() => refetch()}
          size={'X_SMALL'} color={'primary'} text={'불러오기'} />
      </HeaderContainer>
      <ContentContainer>
        <ButtonContainer>
          <Button size={'X_SMALL'} color={'white'} text={'엑셀 다운로드'}>
            <Icon iconName={'Excel'} />
          </Button>
        </ButtonContainer>
        <Table headTitle={seeSeatTicketTableHead}>
          {data.resultList.map(r => (
            <TableRow>
              <TableItem>{r.replyList[0].reply}</TableItem>
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
      </ContentContainer>
    </AppLayout>
  )
}

export default SeeSeatTicket;

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

const ButtonContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
