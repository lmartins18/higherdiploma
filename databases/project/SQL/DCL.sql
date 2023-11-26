-- Create Address table
CREATE TABLE Address (
    AddressID INT PRIMARY KEY,
    Street VARCHAR(255),
    City VARCHAR(255),
    Country VARCHAR(255),
    PostCode VARCHAR(20)
);

-- Create Customer table
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    ContactNumber VARCHAR(20),
    Email VARCHAR(255),
    AddressID INT REFERENCES Address(AddressID)
);

-- Create Role table
CREATE TABLE Role (
    RoleID INT PRIMARY KEY,
    RoleName VARCHAR(255)
);

-- Create Staff table
CREATE TABLE Staff (
    StaffID INT PRIMARY KEY,
    StoreID INT REFERENCES Store(StoreID),
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    RoleID INT REFERENCES Role(RoleID),
    ContactNumber VARCHAR(20),
    AddressID INT REFERENCES Address(AddressID)
);

-- Create Supplier table
CREATE TABLE Supplier (
    SupplierID INT PRIMARY KEY,
    Name VARCHAR(255),
    ContactNumber VARCHAR(20)
);

-- Create Product table
CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    SupplierID INT REFERENCES Supplier(SupplierID),
    Model VARCHAR(255),
    Manufacturer VARCHAR(255),
    Type VARCHAR(255),
    Price DECIMAL(10, 2)
);

-- Create Store table
CREATE TABLE Store (
    StoreID INT PRIMARY KEY,
    Location VARCHAR(255),
    Manager VARCHAR(255),
    ContactNumber VARCHAR(20)
);

-- Create PaymentMethod table
CREATE TABLE PaymentMethod (
    PaymentMethodID INT PRIMARY KEY,
    MethodName VARCHAR(255)
);

-- Create Order table
CREATE TABLE Order (
    OrderID INT PRIMARY KEY,
    CustomerID INT REFERENCES Customer(CustomerID),
    AddressID INT REFERENCES Address(AddressID),
    PaymentID INT REFERENCES Payment(PaymentID),
    StoreID INT REFERENCES Store(StoreID),
    OrderDate DATE,
    OrderTotalAmount DECIMAL(10, 2)
);

-- Create OrderItem table
CREATE TABLE OrderItem (
    OrderItemID INT PRIMARY KEY,
    OrderID INT REFERENCES Order(OrderID),
    ProductID INT REFERENCES Product(ProductID),
    Quantity INT,
    Subtotal DECIMAL(10, 2)
);

-- Create Payment table
CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY,
    OrderID INT REFERENCES Order(OrderID),
    PaymentDate DATE,
    Amount DECIMAL(10, 2),
    PaymentMethodID INT REFERENCES PaymentMethod(PaymentMethodID)
);

-- Create Delivery table
CREATE TABLE Delivery (
    DeliveryID INT PRIMARY KEY,
    OrderID INT REFERENCES Order(OrderID),
    DeliveryDate DATE,
    Status VARCHAR(255)
);

-- Create Stock table
CREATE TABLE Stock (
    StockID INT PRIMARY KEY,
    StoreID INT REFERENCES Store(StoreID),
    ProductID INT REFERENCES Product(ProductID),
    StockLevel INT
);
