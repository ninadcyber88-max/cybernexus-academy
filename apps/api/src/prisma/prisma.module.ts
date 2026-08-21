import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // हे असणे अत्यंत महत्त्वाचे आहे
})
export class PrismaModule {}
