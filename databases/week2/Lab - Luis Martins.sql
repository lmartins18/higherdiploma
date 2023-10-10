-- 1.     Select all from the Person table
SELECT * FROM Person

-- 2.     Select all addresses from the Person table
SELECT address FROM Person
-- 3.     Select all first names and last names from the Person table
SELECT fName, lName FROM Person

-- 4.     Select all persons whose surname is Bow, Brown or Byrne
SELECT * FROM Person
WHERE lName IN ('Bow', 'Brown', 'Byrne')

-- 5.     Select all persons who are less than 30
SELECT * FROM Person
WHERE age < 30

-- 6.     Change Molly Peter’s last name from ‘Peter’ to ‘Peters’
UPDATE Person
SET lName = 'Peters' 
WHERE fName = 'Molly' AND lName = 'Peter'

-- 7.     Delete ‘John White’ from the table
DELETE
FROM Person
WHERE fName = 'John' AND lName = 'White'

-- 8.     Insert a new person into the table – Nell Tate, 28, Pine Needle Avenue
INSERT INTO Person(fName, lName, age, address)
VALUES ('Nell', 'Tate', 28, 'Pine Needle Avenue')