import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { GiftService } from './gift.service';

@Controller('gifts')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  // TODO: Implement REST endpoints for gift CRUD
}
