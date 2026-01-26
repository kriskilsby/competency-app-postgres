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
import { DbKeepAliveService } from './db-keep-alive.service';
import { TestModule } from './test/test.module';

// 🔹 Inline getEnv() helper
const getEnv = (key: string, defaultValue = ''): string => {
  const value = process.env[key];
  if (!value) console.warn(`⚠️ Environment variable ${key} is not set.`);
  return (value || defaultValue).trim();
};

console.log('CWD:', process.cwd());
console.log('ENV FILE CHECK DONE');

@Module({
  imports: [
    // 🔹 Database connection (POstgreSQL)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // ✅ Use 'true' For dev only, remove in production
      logging: ['error', 'warn'],
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
  providers: [AppService, DbKeepAliveService],
})
export class AppModule {}
