import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  response: any;

  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  httpTest(): string {
    this.httpService.get('http://localhost:3000').subscribe((data) => {
      this.response = data.data;
    });

    const result = this.response;
    return result ? result : 'test';
  }
}
