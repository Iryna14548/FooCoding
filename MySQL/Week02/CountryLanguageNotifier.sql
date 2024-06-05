-- Step 1: Create the warning log table
CREATE TABLE warning_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255),
    log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 2: Create the trigger
DROP TRIGGER IF EXISTS Language_alert;
DELIMITER //

CREATE TRIGGER Language_alert 
AFTER INSERT ON countrylanguage
FOR EACH ROW
BEGIN
  DECLARE language_count INT;

  SELECT COUNT(*) INTO language_count
  FROM countrylanguage
  WHERE CountryCode = NEW.CountryCode;

  IF language_count >= 10 THEN
    INSERT INTO warning_log (message) VALUES (CONCAT('The country ', NEW.CountryCode, ' has 10 or more languages'));
  END IF;
END //

DELIMITER ;

-- Step 3: Test the trigger
-- Check the current number of languages for Canada (CAN)
SELECT CountryCode, COUNT(Language) AS LanguageCount
FROM countrylanguage
WHERE CountryCode = 'CAN'
GROUP BY CountryCode;

-- Insert a new language to trigger the warning
INSERT INTO countrylanguage (CountryCode, Language, IsOfficial, Percentage)
VALUES ('CAN', 'Lange11', 'F', 1.0);

-- Check the warning log table
SELECT * FROM warning_log;
