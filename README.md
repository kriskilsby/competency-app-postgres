# Competency App – Phase 1 (DigitalOcean Deployment)

This repository contains the backend API for **Competency App – Phase 1**, a portfolio project demonstrating practical experience with cloud deployment, data pipelines, and backend API development. The project was originally deployed using Microsoft Azure for learning purposes, but it has since been migrated to a **self-managed DigitalOcean environment** for production-style hosting.

## Project Overview

Competency App – Phase 1 demonstrates:

- A cloud-hosted REST API built with **NestJS (TypeScript)**
- Integration with a relational SQL database using **TypeORM**
- A structured data ingestion pipeline
- Separation between data ingestion, API services, and frontend consumption
- CI/CD deployment workflows using **GitHub Actions**

This project provides a practical example of deploying a backend API and database in a self-managed cloud environment with production-style separation of concerns.

## Architecture (Phase 1)

- **Backend API:** NestJS (Node.js, TypeScript), deployed on **DigitalOcean VPS (PM2)**
- **Database:** PostgreSQL (DigitalOcean Managed Database)
- **Frontend:** HTML, EJS, JavaScript, Bootstrap 5, jQuery, DataTables – hosted on **Hetzner**
- **Reverse Proxy:** Nginx – HTTPS termination and API routing
- **CI/CD:** GitHub Actions automated deployments

## Current Hosting Status

The backend API and database are hosted on **DigitalOcean**, providing a self-managed cloud environment with cost-effective, production-style architecture. The frontend continues to be served independently via Hetzner.

The repository continues to serve as a **complete reference implementation** and can be redeployed to DigitalOcean or another cloud platform with minimal changes.

## Frontend

A lightweight frontend consuming the API is available at:

https://www.kriskilsby.com/competency-phase1/

## Local Development

```bash
npm install
npm run start:dev
