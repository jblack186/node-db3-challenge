# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT products.productName, categories.categoryName 
FROM [Products]
inner join categories on products.categoryId = categories.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orders.orderId, shippers.shipperName
FROM [ORDERS]
inner join shippers on orders.shipperId = shippers.shipperId
WHERE OrderDate<'1997-01-09'
        

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT products.productName, orderdetails.quantity
FROM [Products]
inner join orderdetails on products.productId = orderdetails.productId
WHERE orderdetails.orderId = 10251
Order by products.productName


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.



### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 