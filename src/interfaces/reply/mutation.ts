import { useMutation, useQueryClient } from 'react-query';
import { handleAssignedReply } from '@/interfaces/reply/api';
import { ASSIGNED_REPLY } from '@/constants/queryKey';

export const useHandleReplyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ replyId, approve }: {
      replyId: number,
      approve: boolean
    }) => handleAssignedReply(replyId, approve),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([ASSIGNED_REPLY, 1]);
      }
    }
  );
}
