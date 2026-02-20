// employees.e2e-spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../app.module';

describe('Employees API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], // full app bootstrapped
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /employees should return an array with expected structure', async () => {
    const response = await request(app.getHttpServer())
      .get('/employees')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);

    if (response.body.length > 0) {
      const employee = response.body[0];

      expect(employee).toHaveProperty('firstName');
      expect(employee).toHaveProperty('lastName');
      expect(employee).toHaveProperty('job');
      expect(employee).toHaveProperty('legalEntity');
      expect(employee).toHaveProperty('discipline');
      expect(employee).toHaveProperty('projectsCount');
      expect(employee).toHaveProperty('qualificationsCount');
      expect(employee).toHaveProperty('cpdCount');
    }
  });
});
