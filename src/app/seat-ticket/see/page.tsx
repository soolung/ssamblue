"use client";

import AppLayout from '@/layouts/AppLayout';
import TableInput from '@/components/common/TableInput/tableInput';
import { Button, DatePicker, Dropdown, DropItem, Icon, Table, TableItem, TableRow, Text } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import { seeSeatTicketTableHead } from '@/constants/table';
import { useQuery } from 'react-query';
import { APPLICATION } from '@/constants/queryKey';
import { getApplicationResult } from '@/interfaces/application/api';
import { generateReplyStateBadge } from '@/utils/badge/generateReplyStateBadge';
import { useDropdown } from '@/hooks/useDropdown';
import { PLACE, TIME } from '@/constants/dropdown';
import { format } from '@/utils/date/formatter';
import { useDatePicker } from '@/hooks/useDatePicker';
import { appendOrNone } from '@/utils/filter';
import { SEAT_TICKET_DATE_ID, SEAT_TICKET_ID, SEAT_TICKET_PLACE_ID, SEAT_TICKET_TIME_ID } from '@/constants/seatTicket';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useEffect, useRef } from 'react';

const SeeSeatTicket = () => {
    const placeDropdown = useDropdown(PLACE);
    const timeDropdown = useDropdown(TIME);
    const datePicker = useDatePicker();

    const { data, isSuccess, refetch } = useQuery(
        [APPLICATION, SEAT_TICKET_ID],
        () => getApplicationResult({
            id: SEAT_TICKET_ID,
            filterList: [
                {
                    questionId: SEAT_TICKET_DATE_ID,
                    operator: datePicker.isRange() ? 'BEFORE_OR_EQUAL' : 'EQUAL',
                    target: format(datePicker.selectedDate)
                },
                ...appendOrNone({
                    questionId: SEAT_TICKET_DATE_ID,
                    target: datePicker.isRange() ? format(datePicker.endDate!) : null,
                    operator: 'AFTER_OR_EQUAL'
                }),
                ...appendOrNone({ questionId: SEAT_TICKET_PLACE_ID, target: placeDropdown.value }),
                ...appendOrNone({ questionId: SEAT_TICKET_TIME_ID, target: timeDropdown.value, operator: 'CONTAINS' })
            ]
        }), {});

    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: `이석증 (${datePicker.toString()})`
    });

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
                    <Button size={'X_SMALL'} color={'white'} text={'엑셀 다운로드'}
                            onClick={onDownload}
                    >
                        <Icon iconName={'Excel'} />
                    </Button>
                </ButtonContainer>
                <Table ref={tableRef} headTitle={seeSeatTicketTableHead}>
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
