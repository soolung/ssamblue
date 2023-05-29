"use client";

import { TodayTableHeaderItemData } from "@/components/SeatTicket/data/TableHeaderItemData";
import TableHeader from "@/components/SeatTicket/TableHeader";
import AppLayout from "@/layouts/AppLayout";
import styled from "styled-components";

const TodaySeatTicketPage = () => {
  return (
    <AppLayout title="오늘의 이석증">
      <StyledSeatTicket>
        <Table>
          <TableHeader data={TodayTableHeaderItemData} />
        </Table>
      </StyledSeatTicket>
    </AppLayout>
  );
};

export default TodaySeatTicketPage;

const StyledSeatTicket = styled.div`
  width: 100%;
  height: 100%;
`;

const Table = styled.div``;
