-- the abc cab booking app encountered a peculiar case. A user with 1d 10115 had a series of complaints 
-- . as a data analyst can you use your SQL skills to  retrieve all the complaint details
-- task : use inner join  
-- expected output format 
--  compliant_id 
-- user_id 
-- full_name
-- category_name 
--  three tables are given 
-- user_information as ui
-- user_complaints as uc
-- complaint_category as cc
-- now write your query here
-- full_name is in the user_information table
-- //1st part
SELECT uc.complaint_id,
    uc.user_id,
    ui.full_name,
    cc.category_name
FROM user_complaints uc
    INNER JOIN user_information ui ON uc.user_id = ui.user_id
    INNER JOIN complaint_category cc ON uc.category_id = cc.category_id
WHERE uc.user_id = 10115;
-- // 2nd part
SELECT uc.complaint_id,
    cs.status,
    uc.subcategory_id
FROM user_complaints uc
    JOIN complaint_status cs ON uc.complaint_id = cs.complaint_id
WHERE cs.status IN ('resolved', 'legal action taken');