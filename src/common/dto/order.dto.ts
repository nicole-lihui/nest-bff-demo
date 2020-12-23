import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class OrderDTO {
  id: string;
  count: number;
}

class FindOneOrderReq {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty({ message: '订单号不能为空' })
  id: string;
}

export { OrderDTO, FindOneOrderReq };
