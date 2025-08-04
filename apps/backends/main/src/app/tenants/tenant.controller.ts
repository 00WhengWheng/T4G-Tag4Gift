import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './tenant.dto';
import { Tenant } from './tenant.entity';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  async createTenant(@Body() createTenantDto: CreateTenantDto): Promise<Tenant> {
    try {
      const tenant = await this.tenantService.createTenant(createTenantDto);
      return tenant as Tenant;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async getTenantById(@Param('id') id: string): Promise<Tenant | null> {
    try {
      const tenant = await this.tenantService.findTenantById(id);
      if (!tenant) {
        throw new HttpException('Tenant not found', HttpStatus.NOT_FOUND);
      }
      return tenant as Tenant;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('slug/:slug')
  async getTenantBySlug(@Param('slug') slug: string): Promise<Tenant | null> {
    try {
      const tenant = await this.tenantService.findTenantBySlug(slug);
      if (!tenant) {
        throw new HttpException('Tenant not found', HttpStatus.NOT_FOUND);
      }
      return tenant as Tenant;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async updateTenant(
    @Param('id') id: string,
    @Body() updateTenantDto: Partial<CreateTenantDto>
  ): Promise<Tenant> {
    try {
      const tenant = await this.tenantService.updateTenant(id, updateTenantDto);
      return tenant as Tenant;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteTenant(@Param('id') id: string): Promise<{ message: string }> {
    try {
      await this.tenantService.deleteTenant(id);
      return { message: 'Tenant deleted successfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
