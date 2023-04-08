import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe(PrismaService.name, () => {
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(prismaService).toBeDefined();
  });

  it('should have generated repositories as defined in prisma schema file', () => {
    expect(prismaService.user).toBeDefined();
    expect(prismaService.address).toBeDefined();
    expect(prismaService.authentication).toBeDefined();
    expect(prismaService.todoToTag).toBeDefined();
    expect(prismaService.todo).toBeDefined();
    expect(prismaService.tag).toBeDefined();
  });
});
