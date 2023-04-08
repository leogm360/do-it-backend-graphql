import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

export interface ExecutionContext {
  req: Request;
  prisma: PrismaClient;
}
