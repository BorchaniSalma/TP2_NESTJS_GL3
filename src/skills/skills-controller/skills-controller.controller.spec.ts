import { Test, TestingModule } from '@nestjs/testing';
import { SkillsControllerController } from './skills-controller.controller';

describe('SkillsControllerController', () => {
  let controller: SkillsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillsControllerController],
    }).compile();

    controller = module.get<SkillsControllerController>(
      SkillsControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
