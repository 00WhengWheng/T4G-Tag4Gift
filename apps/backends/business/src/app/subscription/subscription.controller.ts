import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';

/**
 * Subscription Controller
 * REST endpoints for subscription management
 */
@Controller('subscriptions')
export class SubscriptionController {
  constructor(private subscriptionService: SubscriptionService) {}

  @Get(':businessId')
  getSubscription(@Param('businessId') businessId: string) {
    return this.subscriptionService.getSubscription(businessId);
  }

  @Put(':businessId')
  updateSubscription(@Param('businessId') businessId: string, @Body() planData: any) {
    return this.subscriptionService.updateSubscription(businessId, planData);
  }
}
