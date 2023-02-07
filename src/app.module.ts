import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
