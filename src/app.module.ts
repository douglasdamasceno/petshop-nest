import { BackOfficeModule } from './backoffice/backoffice.modules';
import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule, BackOfficeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
