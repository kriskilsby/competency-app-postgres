// backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompetenciesModule } from './competencies/competencies.module';
import { LlmModule } from './llm/llm.module';
import { ReportingModule } from './reporting/reporting.module';
import { SearchModule } from './search/search.module';
import { UsersModule } from './users/users.module';
import { LegalEntitiesModule } from './legal-entities/legal-entities.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { EmployeesModule } from './employees/employees.module';
import { BusinessCategoriesModule } from './business-categories/business-categories.module';
import { CategoryMatchModule } from './category-match/category-match.module';
import { QualificationsModule } from './qualifications/qualifications.module';
import { EmploymentHistoryModule } from './employment-history/employment-history.module';
import { CpdModule } from './cpd/cpd.module';
import { ManagersModule } from './managers/managers.module';
import { ReviewLogModule } from './review-log/review-log.module';
import { ProjectMasterModule } from './project-master/project-master.module';
import { EmployeeProjectExperienceModule } from './employee-project-experience/employee-project-experience.module';
import { PrimarySectorModule } from './primary-sector/primary-sector.module';
import { ClassificationTypeModule } from './classification-type/classification-type.module';
import { ClassificationValueModule } from './classification-value/classification-value.module';
import { ExperienceClassificationModule } from './experience-classification/experience-classification.module';
import { TestModule } from './test/test.module';
import * as dotenv from 'dotenv';

// dotenv.config({ path: './.env' });
dotenv.config();

console.log('CWD:', process.cwd());
console.log('ENV FILE CHECK DONE');
console.log('DB HOST:', process.env.DB_HOST);
console.log('DB PORT:', process.env.DB_PORT);
console.log('DB USER:', process.env.DB_USER);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USER,
      password: String(process.env.DB_PASSWORD), // force string
      database: process.env.DB_NAME,
      schema: 'competency_data',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),

    // 🔹 Feature modules
    AuthModule,
    CompetenciesModule,
    LlmModule,
    ReportingModule,
    SearchModule,
    UsersModule,
    LegalEntitiesModule,
    DisciplinesModule,
    EmployeesModule,
    BusinessCategoriesModule,
    CategoryMatchModule,
    QualificationsModule,
    EmploymentHistoryModule,
    CpdModule,
    ManagersModule,
    ReviewLogModule,
    ProjectMasterModule,
    EmployeeProjectExperienceModule,
    PrimarySectorModule,
    ClassificationTypeModule,
    ClassificationValueModule,
    ExperienceClassificationModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
