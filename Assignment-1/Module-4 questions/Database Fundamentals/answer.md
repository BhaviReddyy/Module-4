# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

Using `db.json` (file-based storage) is suitable only for learning or small demo applications.  
It is **not suitable for real-world projects** due to the following limitations:

### Performance Issues
- Entire file must be read and written for every operation
- Performance degrades as data size increases
- No indexing support

### Scalability Problems
- Cannot handle large amounts of data
- Not suitable for applications with many users
- Difficult to scale across multiple servers

### Concurrency Issues
- Multiple simultaneous users can corrupt data
- No locking or transaction mechanism
- Race conditions may occur

### Reliability Issues
- Data loss can occur during crashes
- No backup or recovery mechanism
- No replication support

### Lack of Advanced Database Features
- No transactions
- No joins or constraints
- No query optimization

**Conclusion:**  
`db.json` should be used only for learning, testing, or small prototypes.

---

## 2. What are the ideal characteristics of a database system?

A good database system provides more than just data storage.  
The ideal characteristics include:

### Performance
- Fast read and write operations
- Uses indexing and optimized queries

### Concurrency
- Supports multiple users at the same time
- Prevents data inconsistency

### Reliability
- Ensures data safety during failures
- Supports backup and recovery

### Data Integrity
- Maintains accurate and consistent data
- Enforces constraints like primary keys and foreign keys

### Scalability
- Handles growing data and user load
- Supports vertical and horizontal scaling

### Fault Tolerance
- Continues functioning during system failures
- Uses replication and failover techniques

---

## 3. How many types of databases are there? What are their use cases?

Databases are mainly classified into **two types**:

---

### 1. Relational Databases (SQL)

#### Description
- Data stored in tables (rows and columns)
- Fixed schema
- Follows ACID properties

#### Examples
- MySQL
- PostgreSQL
- Oracle
- SQL Server

#### Use Cases
- Banking applications
- E-commerce platforms
- Enterprise systems

#### Example
An online shopping application where users, orders, and payments are related.

---

### 2. Non-Relational Databases (NoSQL)

#### Description
- Data stored as documents, key-value pairs, graphs, or columns
- Flexible or schema-less
- Highly scalable

#### Examples
- MongoDB
- Redis
- Cassandra
- Neo4j

#### Use Cases
- Social media platforms
- Real-time applications
- Big data systems

#### Example
A social media app handling millions of users and frequent data changes.

---

## Summary

| Database Type | Best Use Case |
|--------------|--------------|
| Relational (SQL) | Structured data with strong consistency |
| Non-Relational (NoSQL) | High scalability and flexible data |
