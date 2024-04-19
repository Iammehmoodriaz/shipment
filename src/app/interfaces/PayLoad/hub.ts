export interface HubNotification {
    message: string
    payload: NotificationPayload
}

export interface HubState {
    state: string;
    notification: HubNotification;
}
export interface NotificationPayload {
    type: string
    subType: string
    data: any
}