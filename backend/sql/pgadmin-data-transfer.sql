-- ==========================================
-- CSV IMPORT SCRIPT (pgAdmin / client-side)
-- Uses \copy (NOT COPY)
-- ==========================================

SET search_path TO competency_data;

-- ---------- legal_entity ----------
\copy competency_data.legal_entity (le_name, data_origin)
FROM 'C:/pgdata/legal-entity.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.legal_entity;

-- ---------- discipline ----------
\copy competency_data.discipline (d_name, data_origin)
FROM 'C:/pgdata/discipline.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.discipline;

-- ---------- employee ----------
\copy competency_data.employee (
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
FROM 'C:/pgdata/employee.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.employee;

-- ---------- qualifications ----------
\copy competency_data.qualifications (
    e_id,
    q_type,
    q_name,
    q_institution,
    q_year,
    data_origin
)
FROM 'C:/pgdata/qualifications.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.qualifications;

-- ---------- employment_history ----------
\copy competency_data.employment_history (
    e_id,
    eh_company,
    eh_location,
    eh_role,
    eh_start,
    eh_end,
    data_origin
)
FROM 'C:/pgdata/employment-history.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.employment_history;

-- ---------- cpd ----------
\copy competency_data.cpd (
    e_id,
    cpd_name,
    cpd_year,
    data_origin
)
FROM 'C:/pgdata/cpd.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.cpd;

-- ---------- project_master ----------
\copy competency_data.project_master (
    pm_name,
    pm_location,
    pm_client,
    pm_notes,
    data_origin
)
FROM 'C:/pgdata/project_master.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.project_master;

-- ---------- employee_project_experience ----------
\copy competency_data.employee_project_experience (
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
FROM 'C:/pgdata/employee_project_experience.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.employee_project_experience;

-- ---------- primary_sector ----------
\copy competency_data.primary_sector (ps_name, data_origin)
FROM 'C:/pgdata/primary_sector.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.primary_sector;

-- ---------- classification_type ----------
\copy competency_data.classification_type (ct_name, data_origin)
FROM 'C:/pgdata/classification_type.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.classification_type;

-- ---------- classification_value ----------
\copy competency_data.classification_value (
    ct_id,
    type_name,
    data_origin
)
FROM 'C:/pgdata/classification_value.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.classification_value;

-- ---------- experience_classification ----------
\copy competency_data.experience_classification (
    epe_id,
    cv_id,
    data_origin
)
FROM 'C:/pgdata/experience_classification.csv'
WITH (FORMAT csv, HEADER true);

SELECT COUNT(*) FROM competency_data.experience_classification;

-- ==========================================
-- END OF IMPORTS
-- ==========================================
