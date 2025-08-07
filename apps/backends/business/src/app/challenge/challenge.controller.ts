import { Controller, Get, Param, Query } from '@nestjs/common';
import { ChallengeService } from './challenge.service';

@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get()
  async findAll(
    @Query('tenantId') tenantId?: string,
    @Query('status') status?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.challengeService.findAll({
      tenantId,
      status,
      limit: limit ? parseInt(limit, 10) : undefined,
      offset: offset ? parseInt(offset, 10) : undefined,
    });
  }

  @Get('stats')
  async getStats() {
    return this.challengeService.getStats();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.challengeService.findById(id);
  }
}
