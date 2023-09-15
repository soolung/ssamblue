import { authorization } from '@/utils/token';
import { server } from '@/lib/axios';
import { Filter } from '@/utils/filter';
import { ReplyState } from '@/types/reply';
import { QuestionType } from '@/types/question';


interface ApplicationResultParams {
    id: number,
    filterList?: Filter[]
}

interface ApplicationResultResponse {
    application: Application,
    noticeList: Notice[],
    questionList: Question[],
    resultList: Result[]
}

interface Application {
    allowsDuplication: boolean,
    description: string | null,
    emoji: string,
    endDate: string | null,
    id: number,
    startDate: string | null,
    status: string,
    title: string
}

interface Notice {
    author: string,
    createdAt: string,
    id: number,
    isPinned: boolean,
    notice: string
}

interface Question {
    id: number,
    question: string,
    type: QuestionType,
}

interface Result {
    name: string,
    replyList: {
        questionId: number,
        reply: string,
        replyId: number,
        state: ReplyState
    }[],
    studentNumber: string
}

export const getApplicationResult = async ({ id, filterList }: ApplicationResultParams)
    : Promise<ApplicationResultResponse> => {
    return (await server.post(`/application/${id}/result`, {
        filterList: filterList
    }, authorization())).data;
};
