CREATE TABLE Book (
    Book_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    Title varchar(50) NOT NULL,
    Price real(10) NOT NULL,
    Availability integer(10) NOT NULL,
    Publisher_ID integer(10) NOT NULL,
    ISBN_ID integer(10) NOT NULL,
    FOREIGN KEY(Publisher_ID) REFERENCES Publisher(Publisher_ID),
    FOREIGN KEY(ISBN_ID) REFERENCES ISBN(ISBN_ID)
);

CREATE TABLE BookAuthor (
    Book_ID INTEGER NOT NULL,
    Author_ID INTEGER NOT NULL,
    PRIMARY KEY (Book_ID, Author_ID),
    FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID),
    FOREIGN KEY (Author_ID) REFERENCES Author(Author_ID)
);

CREATE TABLE Publisher (
    Publisher_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    PublisherName varchar(10) NOT NULL,
    ISBN_ID integer(10) NOT NULL,
    Address_ID integer(10) NOT NULL,
    FOREIGN KEY(Address_ID) REFERENCES Address(Address_ID),
    FOREIGN KEY(ISBN_ID) REFERENCES ISBN(ISBN_ID)
);

CREATE TABLE Member (
    Member_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    MemberName varchar(50) NOT NULL,  
    MemberJoinDate date NOT NULL,    
    Address_ID integer(10) NOT NULL,
    MemberType_ID integer(10) NOT NULL,
    FOREIGN KEY(Address_ID) REFERENCES Address(Address_ID),
    FOREIGN KEY(MemberType_ID) REFERENCES MemberType(MemberType_ID)
);

CREATE TABLE Loan (
    Loan_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    LoanDate date NOT NULL,
    DueDate date NOT NULL,
    ReturnDate date NOT NULL,
    Book_ID integer(10) NOT NULL,
    Member_ID integer(10) NOT NULL,
    FOREIGN KEY(Book_ID) REFERENCES Book(Book_ID),
    FOREIGN KEY(Member_ID) REFERENCES Member(Member_ID)
);

CREATE TABLE Address (
    Address_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    Address1 varchar(50) NOT NULL,
    Address2 varchar(50),
    Address3 varchar(50),
    City varchar(50) NOT NULL,
    District varchar(50) NOT NULL,
    Country varchar(50) NOT NULL,
    PostalCode varchar(10) NOT NULL
);

CREATE TABLE ISBN (
    ISBN_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    ISBN varchar(17) NOT NULL
);

CREATE TABLE MemberType (
    MemberType_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    MemberType varchar(50) NOT NULL
);

CREATE TABLE Author (
    Author_ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    AuthorName varchar(50) NOT NULL
);
