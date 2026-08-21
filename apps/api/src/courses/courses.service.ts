import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.course.findMany({
      include: {
        modules: {
          orderBy: { orderIndex: 'asc' },
        },
      },
    });
  }

  async findOne(slug: string) {
    const course = await this.prisma.course.findUnique({
      where: { slug },
      include: {
        modules: {
          orderBy: { orderIndex: 'asc' },
        },
      },
    });

    if (!course) {
      throw new NotFoundException(`Course with slug ${slug} not found`);
    }
    return course;
  }
}
