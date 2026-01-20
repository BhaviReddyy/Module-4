# Database Relationships

## 1. Definition of Database Relationship

A **database relationship** defines how two or more tables in a database are connected with each other using **Primary Keys** and **Foreign Keys**.  
Relationships help organize data efficiently, reduce redundancy, and maintain **data integrity**.

In simple words, a database relationship explains **how data in one table is related to data in another table**.

---

## 2. Types of Database Relationships

There are **three main types** of database relationships:

1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

These relationships are widely used in **e-commerce applications**.

---

## 3. One-to-One Relationship (1:1)

### Explanation
In a **One-to-One relationship**, one record in a table is associated with **only one record** in another table, and vice versa.

### E-Commerce Example
**User and User Profile**

- One user has only one profile
- One profile belongs to only one user

### Example Tables
- `users(user_id, email, password)`
- `user_profiles(profile_id, user_id, address, phone)`

Here, `user_id` is a **foreign key** in the `user_profiles` table.


::contentReference[oaicite:0]{index=0}


---

## 4. One-to-Many Relationship (1:N)

### Explanation
In a **One-to-Many relationship**, one record in a table can be related to **multiple records** in another table, but each record in the second table relates to only one record in the first table.

### E-Commerce Example
**Customer and Orders**

- One customer can place many orders
- Each order belongs to only one customer

### Example Tables
- `customers(customer_id, name, email)`
- `orders(order_id, customer_id, order_date, total_amount)`

Here, `customer_id` is a **foreign key** in the `orders` table.


::contentReference[oaicite:1]{index=1}


---

## 5. Many-to-Many Relationship (M:N)

### Explanation
In a **Many-to-Many relationship**, multiple records in one table are related to multiple records in another table.  
This relationship is implemented using a **junction (bridge) table**.

### E-Commerce Example
**Orders and Products**

- One order can contain many products
- One product can appear in many orders

### Example Tables
- `orders(order_id, customer_id)`
- `products(product_id, product_name, price)`
- `order_items(order_id, product_id, quantity)`

The `order_items` table acts as a **junction table** that connects orders and products.


::contentReference[oaicite:2]{index=2}


---

## 6. Summary Table

| Relationship Type | Description | E-Commerce Example |
|------------------|-----
