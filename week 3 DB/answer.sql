-- 1.1
SELECT COUNT(*) AS total_admissons
FROM admissions;

-- 1.2
SELECT AVG(DATEDIFF(discharge_date, admission_date)) AS average_stay
FROM discharges t1
JOIN admissions t2;

-- 2.1
SELECT primary_diagnosis, count(*) AS overall_admissions
FROM admissions
GROUP BY primary_diagnosis;

-- 2.2
SELECT service, AVG(DATEDIFF(discharge_date, admission_date)) AS avg_length_of_stay
FROM admissions
JOIN discharges
GROUP BY service;

-- 2.3
SELECT discharge_disposition, COUNT(*) AS total_discharges
FROM discharges
GROUP BY discharge_disposition;

-- 3.1
SELECT service, COUNT(*) AS total_admissions
FROM admissions
GROUP BY service
HAVING COUNT(*) > 5;

-- 3.2
SELECT AVG(DATEDIFF(discharge_date, admission_date)) AS avg_length_of_stay
FROM admissions
JOIN discharges
WHERE primary_diagnosis = 'Stroke';

-- 4.1
SELECT acuity, COUNT(*) AS total_visits
FROM ed_visits
GROUP BY acuity;

-- 4.2
SELECT primary_diagnosis, service, COUNT(*) AS total_admissions
FROM admissions
GROUP BY primary_diagnosis, service;

-- 5.1
SELECT DATE_FORMAT(admission_date, '%Y-%m') AS month, COUNT(*) AS total_admissions
FROM admissions
GROUP BY DATE_FORMAT(admission_date, '%Y-%m');

-- 5.2
SELECT primary_diagnosis, MAX(DATEDIFF(discharge_date, admission_date)) AS max_length_of_stay
FROM admissions
JOIN discharges
GROUP BY primary_diagnosis;

-- Bonus challenge
SELECT service,
       SUM(DATEDIFF(discharge_date, admission_date)) AS total_length_of_stay,
       AVG(DATEDIFF(discharge_date, admission_date)) AS avg_length_of_stay
FROM admissions
JOIN discharges
GROUP BY service
ORDER BY avg_length_of_stay DESC;