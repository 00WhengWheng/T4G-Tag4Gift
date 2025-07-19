import { prisma } from '../libs/prisma/src/prisma.service';

export class PrismaService {
  getClient() {
    return prisma;
  }
}
