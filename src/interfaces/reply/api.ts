import { server } from '@/lib/axios';
import { authorization } from '@/utils/token';

export const getAssignedReply = async (applicationId: number):
  Promise<AssignedReply> => {
  return (await server.get(
      `/reply/assigned?application-id=${applicationId}`,
      authorization())
  ).data;
}

interface AssignedReply {
  resultList: Result[]
}

interface Result {
  replyList: Reply[],
  studentNumber: string,
  name: string,
}

interface Reply {
  replyId: number,
  questionId: number,
  reply: string
}

export const handleAssignedReply =
  async (replyId: number, approve: boolean) => {
    await server.patch(
      `/reply/${replyId}/handle`,
      null,
      {
        ...authorization(),
        params: {
          approve: approve
        }
      }
    );
  }
