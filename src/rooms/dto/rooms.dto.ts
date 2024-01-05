import { RoomModel } from '../rooms.model/rooms.model';

export class FindRoomsDto {
	pageSize: number;
	pageNumber: number;
	advantages: RoomModel['advantages'];
	category: RoomModel['category'];
	meals: RoomModel['meals'];
	type: RoomModel['type'];
}
