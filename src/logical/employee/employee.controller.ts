import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../../common/pipe/validation.pipe';
import { FindOneEmployeeReq } from '../../common/dto/employee.dto';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('find-one')
  findOne(@Body() body: FindOneEmployeeReq) {
    return this.employeeService.findOne(body.uid);
  }
}
