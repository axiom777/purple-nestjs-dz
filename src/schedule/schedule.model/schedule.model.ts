export class ScheduleModel {
	id: string;
	roomId: string;
	status: 'pending' | 'reserved' | 'complete' | 'canceled';
	checkIn: Date;
	checkOut: Date;
}
