import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	@Post('register')
	async register() {}
	// async register(@Body() dto: AuthDto) {}

	@Post('login')
	async login() {}
	// async login(@Body() dto: AuthDto) {}
}
