import { useMutation, useQueryClient } from "react-query";
import { handleAssignedReply } from "@/interfaces/reply/api";
import { ASSIGNED_REPLY } from "@/constants/queryKey";

export const useHandleApproveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ replyId }: { replyId: number }) => handleAssignedReply(replyId, true),
    {
      onSuccess: async () => {
        alert("이석증 승인 성공");
        queryClient.invalidateQueries([ASSIGNED_REPLY, 1]);
      },
    }
  );
};

export const useHandleRejectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ replyId }: { replyId: number }) => handleAssignedReply(replyId, false),
    {
      onSuccess: async () => {
        alert("이석증 거부 성공");
        queryClient.invalidateQueries([ASSIGNED_REPLY, 1]);
      },
    }
  );
};
