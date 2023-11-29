                                
-- ▀███▀▀▀██▄ ▀███▀▀▀██▄ ▀████▀    
--   ██    ▀██▄ ██    ▀██▄ ██      
--   ██     ▀██ ██     ▀██ ██      
--   ██      ██ ██      ██ ██      
--   ██     ▄██ ██     ▄██ ██     ▄
--   ██    ▄██▀ ██    ▄██▀ ██    ▄█
-- ▄████████▀ ▄████████▀ ██████████
                                
-- Create Service table  
CREATE TABLE Service (
    ServiceID INTEGER PRIMARY KEY AUTOINCREMENT,
    ServiceName VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    MonthlyCost DECIMAL(10, 2)
);
-- Create Category table
CREATE TABLE Category (
    CategoryID INTEGER PRIMARY KEY AUTOINCREMENT,
    CategoryName VARCHAR(255) NOT NULL
);

-- Create DeliveryMethod table
CREATE TABLE DeliveryMethod (
    DeliveryMethodID INTEGER PRIMARY KEY AUTOINCREMENT,
    MethodName VARCHAR(255) NOT NULL
);

-- Create Status table
CREATE TABLE Status (
    StatusID INTEGER PRIMARY KEY AUTOINCREMENT,
    StatusName VARCHAR(255) NOT NULL
);

-- Create Role table
CREATE TABLE Role (
    RoleID INTEGER PRIMARY KEY AUTOINCREMENT,
    RoleName VARCHAR(255) NOT NULL
);

-- Create Address table
CREATE TABLE Address (
    AddressID INTEGER PRIMARY KEY AUTOINCREMENT,
    Country VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    Street VARCHAR(255) NOT NULL,
    PostCode VARCHAR(20) NOT NULL
);

-- Create Supplier table
CREATE TABLE Supplier (
    SupplierID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(255) NOT NULL,
    ContactNumber VARCHAR(20) NOT NULL
);

-- Create PaymentMethod table
CREATE TABLE PaymentMethod (
    PaymentMethodID INTEGER PRIMARY KEY AUTOINCREMENT,
    MethodName VARCHAR(255) NOT NULL
);

-- Create Store table
CREATE TABLE Store (
    StoreID INTEGER PRIMARY KEY AUTOINCREMENT,
    AddressID INTEGER REFERENCES Address(AddressID),
    ContactNumber VARCHAR(20) NOT NULL,
    FOREIGN KEY (AddressID) REFERENCES Address(AddressID)
);

-- Create DayOfWeek table
CREATE TABLE DayOfWeek (
    DayOfWeekID INTEGER PRIMARY KEY AUTOINCREMENT,
    DayOfWeek VARCHAR(20) NOT NULL
);


-- Create BusinessHours table
CREATE TABLE BusinessHours (
    BusinessHoursID INTEGER PRIMARY KEY AUTOINCREMENT,
    StoreID INTEGER REFERENCES Store(StoreID),
    DayOfWeekID VARCHAR(20) REFERENCES DayOfWeek(DayOfWeekID),
    OpenTime TIME NOT NULL,
    CloseTime TIME NOT NULL,
    FOREIGN KEY (StoreID) REFERENCES Store(StoreID)
    FOREIGN KEY (DayOfWeekID) REFERENCES DayOfWeek(DayOfWeekID)
);

-- Create Product table
CREATE TABLE Product (
    ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
    SupplierID INTEGER REFERENCES Supplier(SupplierID),
    CategoryID INTEGER REFERENCES Category(CategoryID),
    StatusID INTEGER REFERENCES Status(StatusID),
    Model VARCHAR(255) NOT NULL,
    Manufacturer VARCHAR(255) NOT NULL,
    Type VARCHAR(255) NOT NULL,
    Price REAL NOT NULL,
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID),
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID),
    FOREIGN KEY (StatusID) REFERENCES Status(StatusID)
);

-- Create Customer table
CREATE TABLE Customer (
    CustomerID INTEGER PRIMARY KEY AUTOINCREMENT,
    AddressID INTEGER REFERENCES Address(AddressID),
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    ContactNumber VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    FOREIGN KEY (AddressID) REFERENCES Address(AddressID)
);

-- Create Subscription table
CREATE TABLE Subscription (
    SubscriptionID INTEGER PRIMARY KEY AUTOINCREMENT,
    ServiceID INTEGER REFERENCES Service(ServiceID),
    CustomerID INTEGER REFERENCES Customer(CustomerID),
    SubscriptionStartDate DATE NOT NULL,
    SubscriptionEndDate DATE,
    CONSTRAINT chk_subscription_dates CHECK (SubscriptionEndDate IS NULL OR SubscriptionEndDate >= SubscriptionStartDate)
);

-- Create Staff table
CREATE TABLE Staff (
    StaffID INTEGER PRIMARY KEY AUTOINCREMENT,
    RoleID INTEGER REFERENCES Role(RoleID),
    StoreID INTEGER REFERENCES Store(StoreID),
    AddressID INTEGER REFERENCES Address(AddressID),
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    ContactNumber VARCHAR(20) NOT NULL,
    AnnualLeave INTEGER,
    Pay REAL,
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID),
    FOREIGN KEY (StoreID) REFERENCES Store(StoreID),
    FOREIGN KEY (AddressID) REFERENCES Address(AddressID)
);

-- Create Leave table
CREATE TABLE Leave (
    LeaveID INTEGER PRIMARY KEY AUTOINCREMENT,
    StaffID INTEGER REFERENCES Staff(StaffID),
    LeaveStartDate DATE NOT NULL,
    LeaveEndDate DATE NOT NULL,
    Reason VARCHAR(255),
    CONSTRAINT fk_leave_staff FOREIGN KEY (StaffID) REFERENCES Staff(StaffID)
);

-- Create OrderTable table
CREATE TABLE OrderTable (
    OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
    CustomerID INTEGER REFERENCES Customer(CustomerID),
    AddressID INTEGER REFERENCES Address(AddressID),
    StoreID INTEGER REFERENCES Store(StoreID),
    StatusID INTEGER REFERENCES Status(StatusID),
    OrderDate DATE NOT NULL,
    OrderTotalAmount REAL NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (AddressID) REFERENCES Address(AddressID),
    FOREIGN KEY (StoreID) REFERENCES Store(StoreID),
    FOREIGN KEY (StatusID) REFERENCES Status(StatusID)
);

-- Create OrderItem table
CREATE TABLE OrderItem (
    OrderItemID INTEGER PRIMARY KEY AUTOINCREMENT,
    OrderID INTEGER REFERENCES OrderTable(OrderID),
    ProductID INTEGER REFERENCES Product(ProductID),
    Quantity INTEGER NOT NULL,
    Subtotal REAL NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES OrderTable(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

-- Create Payment table
CREATE TABLE Payment (
    PaymentID INTEGER PRIMARY KEY AUTOINCREMENT,
    PaymentMethodID INTEGER REFERENCES PaymentMethod(PaymentMethodID),
    OrderID INTEGER REFERENCES OrderTable(OrderID),
    PaymentDate DATE NOT NULL,
    Amount REAL NOT NULL,
    FOREIGN KEY (PaymentMethodID) REFERENCES PaymentMethod(PaymentMethodID),
    FOREIGN KEY (OrderID) REFERENCES OrderTable(OrderID)
);

-- Create Delivery table
CREATE TABLE Delivery (
    DeliveryID INTEGER PRIMARY KEY AUTOINCREMENT,
    StatusID INTEGER REFERENCES Status(StatusID),
    OrderID INTEGER REFERENCES OrderTable(OrderID),
    DeliveryMethodID INTEGER REFERENCES DeliveryMethod(DeliveryMethodID),
    DeliveryDate DATE NOT NULL,
    FOREIGN KEY (StatusID) REFERENCES Status(StatusID),
    FOREIGN KEY (OrderID) REFERENCES OrderTable(OrderID),
    FOREIGN KEY (DeliveryMethodID) REFERENCES DeliveryMethod(DeliveryMethodID)
);

-- Create Stock table
CREATE TABLE Stock (
    StockID INTEGER PRIMARY KEY AUTOINCREMENT,
    StoreID INTEGER REFERENCES Store(StoreID),
    ProductID INTEGER REFERENCES Product(ProductID),
    StockLevel INTEGER NOT NULL,
    FOREIGN KEY (StoreID) REFERENCES Store(StoreID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

                                    
-- ▀███▀▀▀██▄ ▀████▄     ▄███▀████▀    
--   ██    ▀██▄ ████    ████   ██      
--   ██     ▀██ █ ██   ▄█ ██   ██      
--   ██      ██ █  ██  █▀ ██   ██      
--   ██     ▄██ █  ██▄█▀  ██   ██     ▄
--   ██    ▄██▀ █  ▀██▀   ██   ██    ▄█
-- ▄████████▀ ▄███▄ ▀▀  ▄████▄█████████
                                    
-- Inserting data into Service table
INSERT INTO Service (ServiceName, Description, MonthlyCost)
VALUES
    ('Lawnmower Service Agreement', 'Regular maintenance for lawnmower', 25.0),
    ('Mowing by Staff for Summer', 'Staff-assisted lawn mowing during summer', 30.0),
    ('Lawnmower Rental', 'Rent a lawnmower for personal use', 40.0),
    ('Garden Design Consultation', 'Professional consultation for garden design', 22.5),
    ('Seasonal Planting Service', 'Planting services for different seasons', 28.0);
 
-- Insert data into Role table
INSERT INTO Role (RoleName) VALUES 
  ('Manager'),
  ('Office Worker'),
  ('Administrator'),
  ('Sales Representative'),
  ('CEO');

-- Insert data into Address table
INSERT INTO Address (Country, City, Street, PostCode) VALUES 
  ('Ireland', 'Dublin', 'Main Street', 'D01ABC'),
  ('Ireland', 'Cork', 'High Street', 'T12XYZ'),
  ('Ireland', 'Galway', 'River Road', 'H91PQR');

-- Insert data into Supplier table
INSERT INTO Supplier (Name, ContactNumber) VALUES 
  ('Emerald Mowers Ltd', '+353 1 234 5678'),
  ('Green Gardens Ltd', '+353 21 987 6543'),
  ('Sunrise Supplies', '+353 91 876 5432');

-- Insert data into Status table
INSERT INTO Status (StatusName) VALUES 
  ('Pending'),
  ('Paid'),
  ('Shipped'),
  ('On-Special');
  
-- Insert data into PaymentMethod table
INSERT INTO PaymentMethod (MethodName) VALUES 
  ('Credit Card'),
  ('Cash'),
  ('Bank Transfer');

-- Insert data into Category table
INSERT INTO Category (CategoryName) VALUES 
  ('Gardening Tools'),
  ('Outdoor Power Equipment'),
  ('Garden Accessories');

-- Insert data into DeliveryMethod table
INSERT INTO DeliveryMethod (MethodName) VALUES 
  ('Standard Delivery'),
  ('Express Delivery'),
  ('Click and Collect')
  ('Courier');

-- Insert data into Store table
INSERT INTO Store (AddressID, ContactNumber) VALUES 
  (1, '+353 1 987 6543'),
  (2, '+353 21 123 4567'),
  (3, '+353 91 345 6789');

-- Insert data into Product table
INSERT INTO Product (SupplierID, CategoryID, StatusID, Model, Manufacturer, Type, Price) VALUES 
  (1, 1, 1, 'Lawnmower X1', 'GreenTech', 'Lawnmower', 299.99),
  (2, 2, 1, 'Hedge Trimmer H2000', 'NatureCare', 'Hedge Trimmer', 129.99),
  (3, 3, 1, 'Garden Hose 50ft', 'AquaFlow', 'Garden Hose', 19.99);

-- Insert data into Customer table
INSERT INTO Customer (AddressID, FirstName, LastName, ContactNumber, Email) VALUES 
  (2, 'John', 'Doe', '+353 87 123 4567', 'john.doe@email.com'),
  (1, 'Jane', 'Smith', '+353 86 234 5678', 'jane.smith@email.com'),
  (3, 'Patrick', 'Murphy', '+353 89 345 6789', 'patrick.murphy@email.com');

-- Inserting sample data into Subscription table
INSERT INTO Subscription (ServiceID, CustomerID, SubscriptionStartDate, SubscriptionEndDate)
VALUES
    (1, 1, '2023-01-01', '2023-04-01'),  -- ServiceID 1, CustomerID 1, Subscription from January 1, 2023, to April 1, 2023
    (2, 2, '2023-02-15', NULL),           -- ServiceID 2, CustomerID 2, Subscription from February 15, 2023, ongoing
    (3, 3, '2023-03-10', '2023-06-10');   -- ServiceID 3, CustomerID 3, Subscription from March 10, 2023, to June 10, 2023

-- Insert data into Staff table
INSERT INTO Staff (RoleID, StoreID, AddressID, FirstName, LastName, ContactNumber, AnnualLeave, Pay) VALUES 
  (1, 1, 1, 'Michael', 'Johnson', '+353 87 765 4321', 25, 50000),
  (2, 2, 2, 'Emma', 'Wilson', '+353 86 543 2109', 20, 40000),
  (3, 3, 3, 'Liam', 'O''Brien', '+353 85 321 0987', 22, 45000),
  (5, 3, 3, 'Alan', 'Mad', '+353 85 321 0987', 22, 45000);

-- Insert data into Leave table
INSERT INTO Leave (StaffID, LeaveStartDate, LeaveEndDate, Reason)
VALUES
    (1, '2023-02-01', '2023-02-05', 'Holiday'),
    (2, '2023-03-10', '2023-03-12', 'Family Event'),
    (3, '2023-04-15', '2023-04-18', 'Sick Leave');

-- Insert data into OrderTable table
INSERT INTO OrderTable (CustomerID, AddressID, StoreID, StatusID, OrderDate, OrderTotalAmount) VALUES 
  (1, 2, 2, 1, '2023-01-15', 149.99),
  (2, 1, 1, 2, '2023-02-20', 79.99),
  (3, 3, 3, 3, '2023-03-25', 29.99);

-- Insert data into OrderItem table
INSERT INTO OrderItem (OrderID, ProductID, Quantity, Subtotal) VALUES 
  (1, 1, 1, 299.99),
  (2, 2, 2, 259.98),
  (3, 3, 3, 89.97);

-- Insert data into Payment table
INSERT INTO Payment (PaymentMethodID, OrderID, PaymentDate, Amount) VALUES 
  (2, 2, '2023-02-21', 79.99),
  (3, 3, '2023-03-26', 29.99);

-- Insert data into Delivery table
INSERT INTO Delivery (StatusID, OrderID, DeliveryMethodID, DeliveryDate) VALUES 
  (1, 1, 1, '2023-01-17'),
  (2, 2, 2, '2023-02-22'),
  (3, 3, 3, '2023-03-27');

-- Insert data into Stock table
INSERT INTO Stock (StoreID, ProductID, StockLevel) VALUES 
  (1, 1, 10),
  (2, 2, 20),
  (3, 3, 15);

-- Insert data into DayOfWeek table
INSERT INTO DayOfWeek (DayOfWeek)
VALUES
    ('Monday'),
    ('Tuesday'),
    ('Wednesday'),
    ('Thursday'),
    ('Friday'),
    ('Saturday'),
    ('Sunday');

-- Insert data into BusinessHours table
INSERT INTO BusinessHours (StoreID, DayOfWeekID, OpenTime, CloseTime) VALUES 
  (1, 1, '09:00', '18:00'),
  (2, 2, '08:30', '17:30'),
  (3, 3, '10:00', '19:00');
