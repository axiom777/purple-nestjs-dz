import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RoomModel } from './rooms.model/rooms.model';
import { FindRoomsDto } from './dto/rooms.dto';

@Controller('rooms')
export class RoomsController {
	@Post()
	async create(@Body() dto: Omit<RoomModel, 'id'>) {}

	@Get()
	async filtred(@Query() query: Partial<FindRoomsDto>) {}

	@Get(':id')
	async item(@Param('id') id: string) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: Partial<Omit<RoomModel, 'id'>>) {}
}
