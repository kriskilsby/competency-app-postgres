# Competency App – Phase 1 (Cloud Data Platform)

This repository contains the backend API for **Competency App – Phase 1**, a portfolio project designed to demonstrate practical experience with cloud deployment, data pipelines, and backend API development.

The project was originally deployed using **Microsoft Azure** to reflect a production-style cloud environment.

## Project Overview

Competency App – Phase 1 demonstrates:

- A cloud-hosted REST API built with **NestJS (TypeScript)**
- Integration with a relational SQL database using **TypeORM**
- A structured data ingestion pipeline
- Separation between data ingestion, API services, and frontend consumption
- CI/CD-based deployment workflows

## Architecture (Phase 1)

- **Backend API:** NestJS (Node.js, TypeScript)
- **Database:** Azure SQL Database
- **Data Ingestion:** Azure Data Factory
- **Hosting:** Azure App Service (Linux)
- **CI/CD:** GitHub Actions

## Current Hosting Status

The original Azure environment has been **decommissioned for cost reasons**.

This repository remains as a **complete reference implementation**, and the application is designed to be redeployed to Azure or an alternative cloud platform with minimal changes.

## Frontend

A lightweight frontend consuming the API is available at:

https://www.kriskilsby.com/competency-phase1/

## Local Development

```bash
npm install
npm run start:dev
