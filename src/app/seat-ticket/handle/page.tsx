"use client";

import AppLayout from "@/layouts/AppLayout";
import { Button, Table, TableItem, TableRow } from "@k99hyerin/dj-simblue";
import { useQuery } from "react-query";
import { getAssignedReply } from "@/interfaces/reply/api";
import { ASSIGNED_REPLY } from "@/constants/queryKey";
import { handleSeatTicketTableHead } from "@/constants/table";
import styled from "styled-components";
import {
  useHandleApproveMutation,
  useHandleRejectMutation,
} from "@/interfaces/reply/mutation";
import { SEAT_TICKET_ID } from "@/constants/seatTicket";

const HandleSeatTicket = () => {
  const { data, isSuccess } = useQuery(
    [ASSIGNED_REPLY, SEAT_TICKET_ID],
    () => getAssignedReply(SEAT_TICKET_ID),
    {
      onSuccess: () => {},
    }
  );
  const { mutate: approveMutate } = useHandleApproveMutation();
  const { mutate: rejectMutate } = useHandleRejectMutation();

  return (
    isSuccess && (
      <AppLayout title={"이석증 처리하기"}>
        <Table headTitle={handleSeatTicketTableHead}>
          {data.resultList.map((r) => (
            <TableRow>
              <TableItem>{r.replyList[0].reply}</TableItem>
              <TableItem>{r.studentNumber}</TableItem>
              <TableItem>{r.name}</TableItem>
              <TableItem>{r.replyList[1].reply}</TableItem>
              <TableItem>{r.replyList[2].reply}</TableItem>
              <TableItem>{r.replyList[3].reply}</TableItem>
              <TableItem>
                <ButtonContainer>
                  <Button
                    size={"X_SMALL"}
                    color={"white"}
                    text={"거부"}
                    onClick={() =>
                      rejectMutate({ replyId: r.replyList[4].replyId })
                    }
                  />
                  <Button
                    size={"X_SMALL"}
                    color={"primary"}
                    text={"승인"}
                    onClick={() =>
                      approveMutate({ replyId: r.replyList[4].replyId })
                    }
                  />
                </ButtonContainer>
              </TableItem>
            </TableRow>
          ))}
        </Table>
      </AppLayout>
    )
  );
};

export default HandleSeatTicket;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
`;
