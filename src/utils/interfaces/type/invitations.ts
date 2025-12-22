export type Invitation = {
    id: number
    avatar: string,
    receiver: string,
    sender: string,
    date: string,
    status: 'Pending' | 'Accepted' | 'Rejected' | 'Expired'
}