import { Badge, Icon } from '@k99hyerin/dj-simblue';
import { ReplyState } from '@/types/reply';

export const generateReplyStateBadge = (text: ReplyState) => {
    if (text == "APPROVED") {
        return (
            <Badge text={"수락됨"} bgColor={'GREEN_200'}>
                <Icon iconName={'Check'} color={'GREEN_400'} />
            </Badge>
        )
    } else if (text == "WAITING") {
        return (
            <Badge text={"대기중"} bgColor={'GRAY_300'}>
                <Icon iconName={'DoNotDisturb'} color={'GRAY_500'} />
            </Badge>
        )
    } else if (text == "REJECTED") {
        return (
            <Badge text={"거부됨"} bgColor={'RED_200'}>
                <Icon iconName={'Error'} color={'RED_500'} />
            </Badge>
        )
    }
}
