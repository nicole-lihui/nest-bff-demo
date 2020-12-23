import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeService } from './logical/employee/employee.service';
import { EmployeeController } from './logical/employee/employee.controller';
import { OrderController } from './logical/order/order.controller';
import { OrderService } from './logical/order/order.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController, EmployeeController, OrderController],
  providers: [AppService, EmployeeService, OrderService],
})
export class AppModule {}
