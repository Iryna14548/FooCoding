-- Step 1: Create the warning log table (Optional)
CREATE TABLE IF NOT EXISTS warning_log (
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
  DECLARE warning_message VARCHAR(255);

  -- Count the number of languages for the country
  SELECT COUNT(*) INTO language_count
  FROM countrylanguage
  WHERE CountryCode = NEW.CountryCode;

  -- Check if the count is 10 or more
  IF language_count >= 10 THEN
    -- Set the warning message
    SET warning_message = CONCAT('The country ', NEW.CountryCode, ' has 10 or more languages');
    
    -- This code is used to signal a generic, user-defined error.
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = warning_message;


    -- Optionally log the warning to the warning_log table
    INSERT INTO warning_log (message) VALUES (warning_message);
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
VALUES ('CAN', 'Lange15', 'F', 1.0);

-- Optionally check the warning log table if logging is enabled
SELECT message, log_time FROM warning_log;
