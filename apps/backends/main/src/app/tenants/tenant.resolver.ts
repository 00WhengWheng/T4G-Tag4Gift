import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './tenant.dto';
import { Tenant } from './tenant.entity';

@Resolver(() => Tenant)
export class TenantResolver {
  constructor(private readonly tenantService: TenantService) {}

  @Query(() => Tenant, { nullable: true })
  async tenant(@Args('id') id: string) {
    return this.tenantService.findTenantById(id);
  }

  @Mutation(() => Tenant)
  async createTenant(@Args('input') input: CreateTenantDto) {
    return this.tenantService.createTenant(input);
  }

  @Mutation(() => Tenant)
  async updateTenant(@Args('id') id: string, @Args('input') input: CreateTenantDto) {
    return this.tenantService.updateTenant(id, input);
  }

  @Mutation(() => Boolean)
  async deleteTenant(@Args('id') id: string) {
    await this.tenantService.deleteTenant(id);
    return true;
  }
}
