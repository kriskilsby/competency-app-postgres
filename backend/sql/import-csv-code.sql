-- backend\sql\import-csv-code.sql

-- Code to import CSV data into a SQL table

-- Import legal_entity OLD VERSION NOT USED NW
-- \echo 'Importing legal_entity...'
-- \copy legal_entity(le_name, data_origin)
-- FROM 'backend/data/legal_entity.csv'
-- WITH (FORMAT csv, HEADER true);
-- ######################################

COPY competency_data.legal_entity (le_name, data_origin)
FROM 'C:\pgdata\legal-entity.csv'
WITH (FORMAT csv, HEADER true);

-- \echo 'Importing legal_entity...'
-- \copy competency_data.legal_entity (le_name, data_origin)
-- FROM 'C:\pgdata\legal-entity.csv'
-- WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.legal_entity;
SELECT COUNT(*) FROM competency_data.legal_entity;

---------- Next Table ----------

-- Import discipline
COPY competency_data.discipline(d_name, data_origin)
FROM 'C:\pgdata\discipline.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.discipline;
TRUNCATE TABLE competency_data.discipline RESTART IDENTITY CASCADE;
Delete FROM competency_data.discipline WHERE d_id > 0;
SELECT COUNT(*) FROM competency_data.discipline;

---------- Next Table ----------

-- Import employee
COPY competency_data.employee (
    e_norseid,
    le_id,
    d_id,
    e_fname,
    e_lname,
    e_job,
    e_start,
    e_email,
    e_contactno,
    e_note,
    data_origin
)
FROM 'C:\pgdata\employee.csv'
WITH (
    FORMAT csv,
    HEADER true
);

SELECT * FROM competency_data.employee;
SELECT COUNT(*) FROM competency_data.employee;
TRUNCATE TABLE competency_data.employee RESTART IDENTITY CASCADE;

---------- Next Table ----------

-- Import qualifications
COPY competency_data.qualifications(e_id, q_type, q_name, q_institution, q_year, data_origin)
FROM 'C:\pgdata\qualifications.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.qualifications;
SELECT COUNT(*) FROM competency_data.qualifications;

---------- Next Table ----------

-- Import employment_history
COPY competency_data.employment_history(e_id, eh_company, eh_location, eh_role, eh_start, eh_end, data_origin)
FROM 'C:\pgdata\employment-history.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.employment_history;
SELECT COUNT(*) FROM competency_data.employment_history;

---------- Next Table ----------

-- Import cpd
COPY competency_data.cpd(e_id, cpd_name, cpd_year, data_origin)
FROM 'C:\pgdata\cpd.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.cpd;
SELECT COUNT(*) FROM competency_data.cpd;

---------- Next Table ----------

-- Import project_master
COPY competency_data.project_master(pm_name, pm_location, pm_client, pm_notes, data_origin)
FROM 'C:\pgdata\project_master.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.project_master;
SELECT COUNT(*) FROM competency_data.project_master;

---------- Next Table ----------

-- Import employee_project_experience
COPY competency_data.employee_project_experience(
    ps_id,
    epe_service,
    epe_start,
    epe_end,
    epe_contract_value,
    epe_stages,
    epe_high_risk,
    epe_contract_type,
    epe_gia,
    epe_description_1,
    epe_description_2,
    epe_description_3,
    epe_notes,
    data_origin,
    e_id,
    pm_id,
    temp_sort
)
FROM 'C:\pgdata\employee_project_experience.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.employee_project_experience;
SELECT COUNT(*) FROM competency_data.employee_project_experience;

---------- Next Table ----------

-- Import primary_sector
COPY competency_data.primary_sector(ps_name, data_origin)
FROM 'C:\pgdata\primary_sector.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.primary_sector;
SELECT COUNT(*) FROM competency_data.primary_sector;

---------- Next Table ----------

-- Import classification_type
COPY competency_data.classification_type(ct_name, data_origin)
FROM 'C:\pgdata\classification_type.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.classification_type;
SELECT COUNT(*) FROM competency_data.classification_type;

---------- Next Table ----------

-- Import classification_value
COPY competency_data.classification_value(ct_id, type_name, data_origin)
FROM 'C:\pgdata\classification_value.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.classification_value;
SELECT COUNT(*) FROM competency_data.classification_value;

---------- Next Table ----------

-- Import experience_classification
COPY competency_data.experience_classification(epe_id, cv_id, data_origin)
FROM 'C:\pgdata\experience_classification.csv'
WITH (FORMAT csv, HEADER true);

SELECT * FROM competency_data.experience_classification;
SELECT COUNT(*) FROM competency_data.experience_classification;

---------- End of Data Imports ---------