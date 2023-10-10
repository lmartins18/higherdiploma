-- 1) Add a new column dateOfBirth to the Person table 
ALTER TABLE Person
ADD COLUMN dateOfBirth DATE;
-- 2) Add another new column phoneNumber to the Person class. 
ALTER TABLE Person
ADD COLUMN phoneNumber INT(9);
-- Delete the column phoneNumber from the Person table 
ALTER TABLE Person
DROP COLUMN phoneNumber;
-- 3) Create a new table Pet with two attributes petID and petType 
CREATE TABLE Pet (
    petID INT PRIMARY KEY,
    petType VARCHAR(20)
);
-- 4) Delete the Pet table from the database. 
DROP TABLE Pet;