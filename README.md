# Competency App – Phase 1 (Cloud Data Platform)

This repository contains the backend API for **Competency App – Phase 1**, a portfolio project demonstrating practical experience with cloud deployment, data pipelines, and backend API development. The project was originally deployed using Microsoft Azure to provide a production-style cloud environment, though the environment has since been decommissioned for cost reasons.

## Project Overview

Competency App – Phase 1 demonstrates:

- A cloud-hosted REST API built with **NestJS (TypeScript)**
- Integration with a relational SQL database using **TypeORM**
- A structured data ingestion pipeline
- Separation between data ingestion, API services, and frontend consumption
- CI/CD deployment workflows using GitHub Actions

This project was primarily a learning exercise, exploring Microsoft cloud architecture, deployment patterns, and managed services in a real-world scenario.

## Architecture (Phase 1)

- **Backend API:** NestJS (Node.js, TypeScript)
- **Database:** Azure SQL Database
- **Data Ingestion:** Azure Data Factory
- **Hosting:** Azure App Service (Linux)
- **CI/CD:** GitHub Actions

## Current Hosting Status

The Azure environment for this project has been **decommissioned due to cost considerations**. The frontend website remains accessible at https://www.kriskilsby.com/competency-phase1/ , but it may no longer rely on cloud-hosted resources to serve content.

The repository continues to serve as a **complete reference implementation**, and can be redeployed to Azure or an alternative cloud platform with minimal changes.

## Frontend

A lightweight frontend consuming the API is available at:

https://www.kriskilsby.com/competency-phase1/

## Local Development

```bash
npm install
npm run start:dev
