-- Insert data into Address table
INSERT INTO Address (Address1, Address2, Address3, City, District, Country, PostalCode)
VALUES ('123 Main Street', 'Apt 4', NULL, 'Cityville', 'District A', 'Country X', '12345'),
       ('456 Oak Avenue', NULL, NULL, 'Townsville', 'District B', 'Country Y', '56789');

-- Insert data into ISBN table
INSERT INTO ISBN (ISBN)
VALUES ('978-1-123456-78-9'), ('978-2-234567-89-0');

-- Insert data into MemberType table
INSERT INTO MemberType (MemberType)
VALUES ('Regular'), ('Premium');

-- Insert data into Author table
INSERT INTO Author (AuthorName)
VALUES ('John Doe'), ('Jane Smith');

-- Insert data into Publisher table
INSERT INTO Publisher (PublisherName, ISBN_ID, Address_ID)
VALUES ('ABC Publications', 1, 1), ('XYZ Press', 2, 2);

-- Insert data into Book table (excluding Author_ID)
INSERT INTO Book (Title, Price, Availability, Publisher_ID, ISBN_ID)
VALUES ('Introduction to SQL', 29.99, 50, 1, 1),
       ('Data Science Essentials', 39.99, 25, 2, 2),
       ('The Art of Programming', 45.00, 30, 1, 3);  -- New book with multiple authors

-- Insert data into BookAuthor table to link books and authors
INSERT INTO BookAuthor (Book_ID, Author_ID)
VALUES (1, 1),  -- Introduction to SQL by John Doe
       (2, 2),  -- Data Science Essentials by Jane Smith
       (3, 1),  -- The Art of Programming by John Doe
       (3, 2);  -- The Art of Programming by Jane Smith (multiple authors)

-- Insert data into Member table
INSERT INTO Member (MemberName, MemberJoinDate, Address_ID, MemberType_ID)
VALUES ('Alice Johnson', '2023-01-15', 1, 1),
       ('Bob Smith', '2022-05-20', 2, 2);

-- Insert data into Loan table
INSERT INTO Loan (LoanDate, DueDate, ReturnDate, Book_ID, Member_ID)
VALUES ('2023-02-01', '2023-02-15', '2023-02-10', 1, 1),
       ('2022-06-10', '2022-06-25', '2022-06-20', 2, 2);
