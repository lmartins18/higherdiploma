-- Populate Address table
INSERT INTO Address (AddressID, Street, City, Country, PostCode)
VALUES
    (1, '25 Dublin Road', 'Dublin', 'Ireland', 'D01 ABC1'),
    (2, '8 Cork Street', 'Cork', 'Ireland', 'T12 XYZ9');

-- Populate Customer table
INSERT INTO Customer (CustomerID, FirstName, LastName, ContactNumber, Email, AddressID)
VALUES
    (1, 'Seamus', 'O'Connor', '+353871234567', 'seamus.oconnor@email.com', 1),
    (2, 'Aoife', 'Murphy', '+353872345678', 'aoife.murphy@email.com', 2);

-- Populate Role table
INSERT INTO Role (RoleID, RoleName)
VALUES
    (1, 'Sales Representative'),
    (2, 'Manager');

-- Populate Staff table
INSERT INTO Staff (StaffID, StoreID, FirstName, LastName, RoleID, ContactNumber, AddressID)
VALUES
    (1, 1, 'Liam', 'Ryan', 1, '+353876543210', 1),
    (2, 2, 'Eva', 'Doherty', 2, '+353879876543', 2);

-- Populate Supplier table
INSERT INTO Supplier (SupplierID, Name, ContactNumber)
VALUES
    (1, 'Emerald Mowers Ltd.', '+353868765432'),
    (2, 'Irish Garden Equipment', '+353871234567');

-- Populate Product table
INSERT INTO Product (ProductID, SupplierID, Model, Manufacturer, Type, Price)
VALUES
    (1, 1, 'GreenGlide 3000', 'Emerald Mowers Ltd.', 'Electric', 499.99),
    (2, 2, 'Shamrock Pro 500', 'Irish Garden Equipment', 'Gasoline', 349.99);

-- Populate Store table
INSERT INTO Store (StoreID, Location, Manager, ContactNumber)
VALUES
    (1, 'Dublin Central', 'Niamh Brennan', '+353876543210'),
    (2, 'Cork West', 'Padraig Murphy', '+353879876543');

-- Populate PaymentMethod table
INSERT INTO PaymentMethod (PaymentMethodID, MethodName)
VALUES
    (1, 'Credit Card'),
    (2, 'Cash');

-- Populate Order table
INSERT INTO Order (OrderID, CustomerID, AddressID, PaymentID, StoreID, OrderDate, OrderTotalAmount)
VALUES
    (1, 1, 1, 1, 1, '2023-01-01', 499.99),
    (2, 2, 2, 2, 2, '2023-01-02', 349.99);

-- Populate OrderItem table
INSERT INTO OrderItem (OrderItemID, OrderID, ProductID, Quantity, Subtotal)
VALUES
    (1, 1, 1, 2, 999.98),
    (2, 2, 2, 1, 349.99);

-- Populate Payment table
INSERT INTO Payment (PaymentID, OrderID, PaymentDate, Amount, PaymentMethodID)
VALUES
    (1, 1, '2023-01-01', 499.99, 1),
    (2, 2, '2023-01-02', 349.99, 2);

-- Populate Delivery table
INSERT INTO Delivery (DeliveryID, OrderID, DeliveryDate, Status)
VALUES
    (1, 1, '2023-01-03', 'Delivered'),
    (2, 2, '2023-01-04', 'In Transit');

-- Populate Stock table
INSERT INTO Stock (StockID, StoreID, ProductID, StockLevel)
VALUES
    (1, 1, 1, 10),
    (2, 2, 2, 5);
