import { Body, Controller, Post } from '@nestjs/common';
import { StringifierPipe } from '../StringifierPipe';

@Controller('skills-controller')
export class SkillsControllerController {
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  obtainSkills(@Body(StringifierPipe) data ): string {
    return data;
  }
}
