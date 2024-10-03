-- 1.1
INSERT INTO patients (first_name, last_name, date_of_birth, gender, language)
VALUES ('John', 'Doe', '1980-11-15', 'Male', 'English');

-- 2.1
UPDATE patients
SET language = 'Spanish'
WHERE patient_id = 948;

-- 3.1
NOT ACHIEVABLE

-- 4.1
SELECT first_name, last_name,
IFNULL(email_address, 'N/A') AS email_record
FROM providers;

-- 4.2
SELECT first_name, last_name,
COALESCE(phone_number,email_address, 'Missing details') AS contact_record
FROM providers;

-- Bonus
SELECT
    first_name,
    last_name,
    phone_number,
    email_address
FROM
    providers
WHERE
    provider_specialty = 'Pediatrics'
    AND (phone_number IS NULL OR email_address IS NULL);