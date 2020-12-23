import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { FindOneOrderReq } from '../../common/dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('find-one')
  findOne(@Body() body: FindOneOrderReq) {
    return this.orderService.findOne(body.id);
  }
}
