# Schema Design Fundamentals – Theory

## 1. What is Schema Design and What Does a Database Schema Represent?

Schema design is the process of planning how data is structured and stored in a relational database. It defines the logical layout of the database before any data is inserted or backend code is written.

A database schema represents:
- Tables and their columns
- Data types of each column
- Relationships between tables
- Constraints such as primary keys and validations

In simple terms, a database schema is the blueprint of the database.

---

## 2. Why Schema Design Is Required Before Writing Backend Code

Schema design must be done before backend development because backend logic depends on how data is stored. APIs, queries, and validations all rely on the database structure.

If schema design is skipped or done later:
- Backend code may need frequent changes
- Queries can become inefficient
- Data migrations become risky

A well-designed schema ensures smooth backend development and long-term stability.

---

## 3. How Poor Schema Design Impacts Data Consistency, Maintenance, and Scalability

Poor schema design can cause serious issues:

### Data Consistency
- Duplicate data may exist in multiple tables
- Updates in one place may not reflect everywhere

### Maintenance
- Complex tables are hard to understand
- Small changes require modifying many queries

### Scalability
- Large, unstructured tables slow down performance
- Reporting and analytics become difficult

Example: Storing user details in every order record instead of referencing a users table leads to duplication and inconsistency.

---

## 4. Validations in Schema Design and Why Databases Enforce Them

Validations are rules applied at the database level to ensure data correctness.

Common validations include:
- NOT NULL: prevents missing values
- UNIQUE: avoids duplicate entries
- DEFAULT: assigns a value automatically
- PRIMARY KEY: uniquely identifies each record

Databases enforce validations to protect data integrity even if backend validation fails.

---

## 5. Difference Between a Database Schema and a Database Table

A database schema is the overall structure of the database, while a table is a single data container within that schema.

- Schema defines design and rules
- Table stores actual records in rows and columns

A schema can contain multiple tables.

---

## 6. Why a Table Should Represent Only One Entity

Each table should represent one real-world entity such as a user, product, or order.

This approach:
- Reduces data duplication
- Makes tables easier to manage
- Improves clarity and structure

For example, a users table should not contain order or payment details.

---

## 7. Why Redundant or Derived Data Should Be Avoided in Table Design

Redundant data is duplicated data, and derived data is data that can be calculated from existing values.

Problems caused by redundant or derived data:
- Inconsistent values
- Extra storage usage
- Complex update operations

Example: Storing both date_of_birth and age is unnecessary since age can be calculated.

---

## 8. Importance of Choosing Correct Data Types While Designing Tables

Choosing the correct data types improves performance and data accuracy.

Examples:
- INTEGER for age
- DATE or TIMESTAMP for dates
- BOOLEAN for true or false values

Correct data types reduce storage usage and prevent invalid data entry.

---

## Conclusion

Schema design is a fundamental part of relational database development. A well-structured schema improves data integrity, simplifies backend development, and ensures scalability and maintainability of the system.
