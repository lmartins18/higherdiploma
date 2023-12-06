-- Task 1: Change all staff annual leave allowance to 29 days
    SELECT * FROM Staff; -- Check before modification
    UPDATE Staff SET AnnualLeave = 29; -- Apply modification
    SELECT * FROM Staff; -- Validate change

-- Task 2: Modify the status of any order which has been paid to “Shipped”
    SELECT * FROM OrderTable o JOIN Status s ON o.StatusID = s.StatusID; -- Check before modification
    UPDATE OrderTable SET StatusID = (SELECT StatusID FROM Status WHERE StatusName = 'Shipped') WHERE OrderID IN (SELECT OrderID FROM Payment); -- Apply modification
    SELECT * FROM OrderTable o JOIN Status s ON o.StatusID = s.StatusID; -- Validate change

-- Task 3: Delete all orders which have been placed but not been paid for more than 6 months
    SELECT * FROM OrderTable WHERE OrderDate < DATE('now', '-6 months') AND OrderID NOT IN (SELECT OrderID FROM Payment); -- Check before modification
    -- Remove rows from dependent tables
    DELETE FROM OrderItem WHERE OrderID IN (SELECT OrderID FROM OrderTable WHERE OrderDate < DATE('now', '-6 months') AND OrderID NOT IN (SELECT OrderID FROM Payment)); -- Remove dependent rows
    DELETE FROM Delivery WHERE OrderID IN (SELECT OrderID FROM OrderTable WHERE OrderDate < DATE('now', '-6 months') AND OrderID NOT IN (SELECT OrderID FROM Payment)); -- Remove dependent rows
    -- Remove from the main table
    DELETE FROM OrderTable WHERE OrderDate < DATE('now', '-6 months') AND OrderID NOT IN (SELECT OrderID FROM Payment); -- Apply modification
    -- Validate changes (all dependent and main tables).
    SELECT * FROM OrderItem WHERE OrderID IN (SELECT OrderID FROM OrderTable WHERE OrderDate < DATE('now', '-6 months') AND OrderID NOT IN (SELECT OrderID FROM Payment)); -- Validate change
    SELECT * FROM Delivery WHERE OrderID IN (SELECT OrderID FROM OrderTable WHERE OrderDate < DATE('now', '-6 months') AND OrderID NOT IN (SELECT OrderID FROM Payment)); -- Validate change
    SELECT * FROM Payment WHERE OrderID IN (SELECT OrderID FROM OrderTable WHERE OrderDate < DATE('now', '-6 months') AND OrderID NOT IN (SELECT OrderID FROM Payment)); -- Validate change
    SELECT * FROM OrderTable WHERE OrderDate < DATE('now', '-6 months') AND OrderID NOT IN (SELECT OrderID FROM Payment); -- Validate change


-- Task 4: Display the first name surname and position of all staff sorting the results so the highest pay is first.
    SELECT FirstName, LastName, RoleName, Pay FROM Staff s JOIN Role r ON s.RoleID = r.RoleID ORDER BY Pay DESC; -- Check before modification

-- Task 5: Add one new record to each table.
    -- Insert data into Type table
        INSERT INTO Type (TypeName)
        VALUES ('Machine');

    -- Insert data into Manufacturer table
        INSERT INTO Manufacturer (ManufacturerName)
        VALUES ('Stravaganza');

    -- Insert data into Role table
        INSERT INTO Role (RoleName)
        VALUES ('Clerk');

    -- Insert data into Store table
        INSERT INTO Store (AddressID, ContactNumber)
        VALUES (2, '+353833633833');

    -- Insert data into Address table
        INSERT INTO Address (Country, City, Street, PostCode)
        VALUES ('Ireland', 'Dublin', '123 Park Avenue', 'D13 ABC');

    -- Insert data into Supplier table
        INSERT INTO Supplier (Name, ContactNumber)
        VALUES ('Luis Supplies Ltd', '+353871234569');

    -- Insert data into PaymentMethod table
        INSERT INTO PaymentMethod (MethodName)
        VALUES ('PayPal');

    -- Insert data into BusinessHours table
        INSERT INTO BusinessHours (StoreID, DayOfWeekID, OpenTime, CloseTime)
        VALUES (1, 7, '09:00', '18:00');

    -- Insert data into Product table
        INSERT INTO Product (SupplierID, CategoryID, StatusID, Model, ManufacturerID, TypeID, Price)
        VALUES (1, 1, 1, 'Lawn Shredder X100', 4, 4, 199.99);

    -- Insert data into Category table
        INSERT INTO Category (CategoryName)
        VALUES ('Mad Gardening Tools');

    -- Insert data into Customer table
        INSERT INTO Customer (AddressID, FirstName, LastName, ContactNumber, Email)
        VALUES (3, 'Alice', 'Johnson', '+353871234570', 'alice@example.com');

    -- Insert data into Order table
        INSERT INTO OrderTable (CustomerID, AddressID, StoreID, StatusID, OrderDate, OrderTotalAmount)
        VALUES (1, 3, 1, 1, '2023-01-15', 555);

    -- Insert data into OrderItem table
        INSERT INTO OrderItem (OrderID, ProductID, Quantity, Subtotal)
        VALUES (2, 1, 1, 555);

    -- Insert data into Payment table
        INSERT INTO Payment (PaymentMethodID, OrderID, PaymentDate, Amount)
        VALUES (1, 2, '2023-01-15', 555);

    -- Insert data into Delivery table
        INSERT INTO Delivery (StatusID, OrderID, DeliveryMethodID, DeliveryDate)
        VALUES (1, 3, 1, '2030-01-17');

    -- Insert data into Stock table
        INSERT INTO Stock (StoreID, ProductID, StockLevel)
        VALUES (1, 2, 555);

    -- Insert data into Status table
        INSERT INTO Status (StatusName)
        VALUES ('Canceled');

    -- Insert data into DeliveryMethod table
        INSERT INTO DeliveryMethod (MethodName)
        VALUES ('Taxi');

    -- Insert data into Service table
        INSERT INTO Service (ServiceName, Description, MonthlyCost, DurationMonths)
        VALUES ('Lawnmower Service Agreement 2', 'Just a copy of the normal service agreement the customers must sign.', 25.00, 6);

    -- Insert data into Subscription table
        INSERT INTO Subscription (CustomerID, ServiceID, SubscriptionStartDate)
        VALUES (1, 1, '2030-01-15');

    -- Insert data into DayOfWeek table
        INSERT INTO DayOfWeek (DayOfWeek)
        VALUES ('Extra non-existing day that is the 8th day of the week...');

    -- Insert data into Staff table
        INSERT INTO Staff (RoleID, StoreID, AddressID, FirstName, LastName, ContactNumber, AnnualLeave, Pay, StartDate)
        VALUES (1, 1, 1, 'Luis', 'Martins', '+353871234567', 29, 50000, '2024-01-01');

    -- Insert data into leave table
        INSERT INTO Leave (StaffID, LeaveStartDate, LeaveEndDate, Reason)
        VALUES (1, '2023-06-01', '2023-06-31', 'Holiday');

-- Task 6: Delete one record from all tables
    -- Delete from Role table
        DELETE FROM Role WHERE RoleName = 'Clerk';

    -- Delete from Store table
        DELETE FROM Store WHERE ContactNumber = '+353833633833';

    -- Delete from Address table
        DELETE FROM Address WHERE PostCode = 'D13 ABC';

    -- Delete from Supplier table
        DELETE FROM Supplier WHERE Name = 'Luis Supplies Ltd';

    -- Delete from PaymentMethod table
        DELETE FROM PaymentMethod WHERE MethodName = 'PayPal';

    -- Delete from BusinessHours table
        DELETE FROM BusinessHours WHERE StoreID = 1 AND DayOfWeekID = 7;

    -- Delete from Product table
        DELETE FROM Product WHERE ManufacturerID = 4;
    
    -- Delete from Type table
        DELETE FROM Type WHERE TypeName = 'Machine';

    -- Delete from Manufacturer table
        DELETE FROM Manufacturer WHERE ManufacturerName = 'Stravaganza';
    
    -- Delete from Category table
        DELETE FROM Category WHERE CategoryName = 'Mad Gardening Tools';

    -- Delete from Customer table
        DELETE FROM Customer WHERE Email = 'alice@example.com';

    -- Delete from OrderItem table
        DELETE FROM OrderItem WHERE Subtotal = 555;

    -- Delete from Order table
        DELETE FROM OrderTable WHERE OrderTotalAmount = 555;

    -- Delete from Payment table
        DELETE FROM Payment WHERE Amount = 555;

    -- Delete from Delivery table
        DELETE FROM Delivery WHERE DeliveryDate = '2030-01-17';

    -- Delete from Stock table
        DELETE FROM Stock WHERE StoreID = 1 AND ProductID = 2 AND StockLevel = 555;

    -- Delete from Status table
        DELETE FROM Status WHERE StatusName = 'Canceled';

    -- Delete from DeliveryMethod table
        DELETE FROM DeliveryMethod WHERE MethodName = 'Taxi';

    -- Delete from Subscription table
        DELETE FROM Subscription WHERE SubscriptionStartDate = '2030-01-15';

    -- Delete from Service table
        DELETE FROM Service WHERE ServiceName = 'Lawnmower Service Agreement 2' AND MonthlyCost = 25.00;

    -- Delete from DayOfWeek table
        DELETE FROM DayOfWeek WHERE DayOfWeek = 'Extra non-existing day that is the 8th day of the week...';

    -- Delete from Staff table
        DELETE FROM Staff WHERE LastName = 'Martins';

    -- Delete from Leave table
        DELETE FROM Leave WHERE LeaveEndDate = '2023-06-31';

-- Task 7: Find the total number of days off for all staff, order by least days off
    SELECT
        s.StaffID,
        s.FirstName,
        s.LastName,
        COALESCE(SUM(julianday(l.LeaveEndDate) - julianday(l.LeaveStartDate) + 1), 0) AS TotalDaysOff
    FROM Staff s
    LEFT JOIN Leave l ON s.StaffID = l.StaffID
    GROUP BY s.StaffID, s.FirstName, s.LastName
    ORDER BY TotalDaysOff;

-- Task 8: Count how many products are in the stock table (rows only not the number of items)
    -- My stock table counts stock in different stores, My 'Product' table holds products.
    SELECT COUNT(*) FROM Product; 

-- Task 9: Change the role of all staff who have a job title Office worker to Administrator
    SELECT * FROM Staff; -- Check before modification
    UPDATE Staff SET RoleID = (SELECT RoleID FROM Role WHERE RoleName = 'Administrator') WHERE RoleID = (SELECT RoleID FROM Role WHERE RoleName = 'Office Worker'); -- Apply modification
    SELECT * FROM Staff; -- Validate change

-- Task 10: Change the status of all products in one category to “on-Special”
    SELECT * FROM Product p JOIN Status s ON p.StatusID = s.StatusID WHERE CategoryID = 1; -- Check before modification
    UPDATE Product SET StatusID = (SELECT StatusID FROM Status WHERE StatusName = 'On-Special') WHERE CategoryID = 1; -- Apply modification
    SELECT * FROM Product p JOIN Status s ON p.StatusID = s.StatusID WHERE CategoryID = 1; -- Validate change

-- Task 11: Set the delivery method of all orders to “courier”
    SELECT * FROM Delivery d JOIN DeliveryMethod dm ON d.DeliveryMethodID = dm.DeliveryMethodID; -- Check before modification
    UPDATE Delivery SET DeliveryMethodID = (SELECT DeliveryMethodID FROM DeliveryMethod WHERE MethodName = 'Courier'); -- Apply modification
    SELECT * FROM Delivery d JOIN DeliveryMethod dm ON d.DeliveryMethodID = dm.DeliveryMethodID; -- Validate change

-- Task 12: Update the opening times of the office to say, “closed Sundays”
    -- Set opening days from 9 to 18 (Monday to Friday) (Store 1 already has times for Monday).
        INSERT INTO BusinessHours (StoreID, DayOfWeekID, OpenTime, CloseTime)
        VALUES  (1,2,'09:00', '18:00'),
                (1,3,'09:00', '18:00'),
                (1,4,'09:00', '18:00'),
                (1,5,'09:00', '18:00');

    -- Set Saturday opening time from 9 to 12
        INSERT INTO BusinessHours (StoreID, DayOfWeekID, OpenTime, CloseTime)
        VALUES (1,6,'09:00', '12:00');

    -- Check the modified business hours with day names
    SELECT bh.StoreID, dow.DayOfWeek, bh.OpenTime, bh.CloseTime
    FROM BusinessHours bh
    JOIN DayOfWeek dow ON bh.DayOfWeekID = dow.DayOfWeekID
    WHERE bh.StoreID = 1;
    -- (Store 1 now is open every day except Sunday, therefore, closed sundays)

-- Task 13: Drop all information contained in the orders relation
    SELECT * FROM OrderItem; -- Check before modification
    SELECT * FROM Delivery; -- Check before modification
    SELECT * FROM Payment; -- Check before modification
    SELECT * FROM OrderTable; -- Check before modification
    -- Remove dependencies
    DELETE FROM OrderItem; -- Apply modification
    DELETE FROM Delivery; -- Apply modification
    DELETE FROM Payment; -- Apply modification
    -- Remove from main table
    DELETE FROM OrderTable; -- Apply modification
    SELECT * FROM OrderItem; -- Validate change
    SELECT * FROM Delivery; -- Validate change
    SELECT * FROM Payment; -- Validate change
    SELECT * FROM OrderTable; -- Validate change

-- Task 14: Delete all products from the database with a specific manufacturer
    SELECT * FROM Stock WHERE ProductID IN (SELECT ProductID FROM Product WHERE ManufacturerID = 1); -- Check before modification
    SELECT * FROM Product WHERE ManufacturerID = 1; -- Check before modification
    DELETE FROM Stock WHERE ProductID IN (SELECT ProductID FROM Product WHERE ManufacturerID = 1); -- Remove dependency
    DELETE FROM Product WHERE ManufacturerID = 1; -- Apply modification to Product table
    SELECT * FROM Product WHERE ManufacturerID = 1; 

-- Task 15: Set the office phone number to be 01-7654321
 -- In this case, I'll change store 1.
    SELECT * FROM Store WHERE StoreID = 1; -- Check before modification
    UPDATE Store SET ContactNumber = '01-7654321' WHERE StoreID = 1; -- Apply modification
    SELECT * FROM Store WHERE StoreID = 1; -- Validate change

-- Task 16: Set the CEO of the firm to be called Michael Dean
    SELECT * FROM Staff WHERE RoleID IN (Select RoleID FROM Role Where RoleName = 'CEO'); -- Check before modification
    UPDATE Staff SET FirstName = 'Michael', LastName = 'Dean'  WHERE RoleID IN (Select RoleID FROM Role Where RoleName = 'CEO'); -- Apply modification
    SELECT * FROM Staff WHERE RoleID IN (Select RoleID FROM Role Where RoleName = 'CEO'); -- Validate change


-- Task 17: Show all staff members who have been working there for longer than 4 years
    SELECT * FROM Staff
    WHERE strftime('%Y', 'now') - strftime('%Y', StartDate) > 4;

-- Task 18: Show all services that the company offers which run for over 3 months and have a minimum of €20 per month
    SELECT * FROM Service
    WHERE DurationMonths > 3 AND MonthlyCost >= 20.00;

-- Task 19: Identify how many customers have the word "road" in their address
    SELECT COUNT(*) FROM Customer AS c
    JOIN Address AS a ON c.AddressID = a.AddressID
    WHERE UPPER(a.Street) LIKE '%ROAD%';

-- Task 20: Create a view that will show the result of a query drawing information from three tables at once
    CREATE VIEW StoreStaffAddressView AS
    SELECT
        st.StoreName,
        s.FirstName,
        s.LastName,
        a.Country,
        a.City,
        a.Street,
        a.PostCode
    FROM Staff s
    JOIN Store st ON s.StoreID = st.StoreID
    JOIN Address a ON s.AddressID = a.AddressID;
