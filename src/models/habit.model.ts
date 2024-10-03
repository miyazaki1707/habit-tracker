export interface HabitModel {
    id: string,
    title: string,
    icon: string,
    startDate: string,
    notificationsDays: number[],
    notificationsTime: string,
    streak: number,
    records: JSON
}