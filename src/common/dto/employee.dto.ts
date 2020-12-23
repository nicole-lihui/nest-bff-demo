import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class EmployeeDTO {
  uid!: string;
  name: string;
  age: number;
}

class FindOneEmployeeReq {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty({ message: '用户不能为空' })
  uid!: string;
}

export { EmployeeDTO, FindOneEmployeeReq };
