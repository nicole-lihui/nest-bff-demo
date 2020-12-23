import { Controller, Post, UsePipes, Body } from '@nestjs/common';
import { FindOneOrderReq } from '../../common/dto/order.dto';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../../common/pipe/validation.pipe';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('find-one')
  findOne(@Body() body: FindOneOrderReq) {
    return this.orderService.findOne(body.id);
  }
}
