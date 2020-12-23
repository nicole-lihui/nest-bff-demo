import { Injectable } from '@nestjs/common';
import { EmployeeDTO } from 'src/common/dto/employee.dto';

@Injectable()
export class EmployeeService {
  findOne(uid: string): EmployeeDTO {
    return { uid, name: 'name', age: 18 };
  }
}
