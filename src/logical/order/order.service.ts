import { BadRequestException, HttpException } from '@nestjs/common/exceptions';
import { Injectable, HttpService } from '@nestjs/common';
import { OrderDTO } from 'src/common/dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private httpService: HttpService) {}

  async findOne(oid: string): Promise<OrderDTO> {
    const { status, data } = await this.httpService
      .post(
        'https://app-admin-dev.hpcang.com/api/order/api/admin/ver1_0/order/verification/queryOrderDetail',
        {
          orderId: oid,
        },
      )
      .toPromise();

    if (status < 200 || status > 299) {
      throw new HttpException('An unexpected error ocurred!', status);
    }

    if (!data.success) {
      throw new BadRequestException(data.msg);
    }

    return data.result;
  }
}
