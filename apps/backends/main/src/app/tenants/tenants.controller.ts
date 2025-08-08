import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, HttpException, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { CreateTenantDto, UpdateTenantDto, TenantResponseDto } from './dto/tenants.dto';
import { Tenant } from './tenants.entity';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async createTenant(@Body() createTenantDto: CreateTenantDto): Promise<TenantResponseDto> {
    try {
  const tenant = await this.tenantsService.createTenant(createTenantDto);
      return new TenantResponseDto(tenant);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async getTenantById(@Param('id') id: string): Promise<TenantResponseDto | null> {
    try {
  const tenant = await this.tenantsService.findTenantById(id);
      if (!tenant) {
        throw new HttpException('Tenant not found', HttpStatus.NOT_FOUND);
      }
      return new TenantResponseDto(tenant);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('slug/:slug')
  async getTenantBySlug(@Param('slug') slug: string): Promise<TenantResponseDto | null> {
    try {
  const tenant = await this.tenantsService.findTenantBySlug(slug);
      if (!tenant) {
        throw new HttpException('Tenant not found', HttpStatus.NOT_FOUND);
      }
      return new TenantResponseDto(tenant);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async updateTenant(
    @Param('id') id: string,
    @Body() updateTenantDto: UpdateTenantDto
  ): Promise<TenantResponseDto> {
    try {
  const tenant = await this.tenantsService.updateTenant(id, updateTenantDto);
      return new TenantResponseDto(tenant);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async patchTenant(
    @Param('id') id: string,
    @Body() updateTenantDto: Partial<UpdateTenantDto>
  ): Promise<TenantResponseDto> {
    try {
      const tenant = await this.tenantsService.updateTenant(id, updateTenantDto);
      return new TenantResponseDto(tenant);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteTenant(@Param('id') id: string): Promise<{ message: string }> {
    try {
  await this.tenantsService.deleteTenant(id);
      return { message: 'Tenant deleted successfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get()
  async listTenants(@Query('limit') limit = 20, @Query('offset') offset = 0): Promise<{ tenants: TenantResponseDto[]; total: number; hasMore: boolean }> {
  const { tenants, total, hasMore } = await this.tenantsService.listTenants(limit, offset);
    return {
      tenants: tenants.map(t => new TenantResponseDto(t)),
      total,
      hasMore
    };
  }
}
