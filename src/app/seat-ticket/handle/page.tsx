"use client";

import AppLayout from '@/layouts/AppLayout';
import { Button, Table, TableItem } from '@k99hyerin/dj-simblue';
import { useQuery } from 'react-query';
import { getAssignedReply } from '@/interfaces/reply/api';
import { ASSIGNED_REPLY } from '@/constants/queryKey';
import { handleSeatTicketTableHead } from '@/constants/table';
import styled from 'styled-components';
import { useHandleReplyMutation } from '@/interfaces/reply/mutation';

const HandleSeatTicket = () => {
  const { data, isSuccess } = useQuery([ASSIGNED_REPLY, 1], () => getAssignedReply(1), {
    onSuccess: () => {}
  })
  const { mutate } = useHandleReplyMutation();

  return isSuccess && (
    <AppLayout title={"이석증 처리하기"}>
      <Table headTitle={handleSeatTicketTableHead}>
        {data.resultList.map(r => (
          <>
            <TableItem>{r.replyList[0].reply}</TableItem>
            <TableItem>{r.studentNumber}</TableItem>
            <TableItem>{r.name}</TableItem>
            <TableItem>{r.replyList[1].reply}</TableItem>
            <TableItem>{r.replyList[2].reply}</TableItem>
            <TableItem>{r.replyList[3].reply}</TableItem>
            <TableItem>
              <ButtonContainer>
                <Button size={"X_SMALL"} color={'white'}
                        text={'거부'}
                        onClick={() => mutate({
                          replyId: r.replyList[4].replyId,
                          approve: false
                        })}
                />
                <Button size={"X_SMALL"} color={'primary'}
                        text={'승인'}
                        onClick={() => mutate({
                          replyId: r.replyList[4].replyId,
                          approve: true
                        })}
                />
              </ButtonContainer>
            </TableItem>
          </>
        ))
        }
      </Table>
    </AppLayout>
  )
    ;
}

export default HandleSeatTicket;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
`;
