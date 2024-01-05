import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ScheduleModel } from './schedule.model/schedule.model';
import { ScheduleDto } from './dto/schedule.dto';

@Controller('schedule')
export class ScheduleController {
	@Post()
	async create(@Body() dto: Omit<ScheduleModel, 'id' | 'status'>) {}

	@Get()
	async find(@Query() dto: ScheduleDto) {}

	@Get(':id')
	async item(@Param('id') id: string) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: Partial<Omit<ScheduleModel, 'id'>>) {}
}
