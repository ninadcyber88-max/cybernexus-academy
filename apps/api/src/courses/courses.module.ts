import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // हे इम्पोर्ट केले नसल्यामुळे वरील एरर येतो
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
