# Node.js Architecture

Node.js is a runtime environment that allows JavaScript to run outside the browser.
It is designed to be non-blocking, event-driven, and highly scalable.

# Key Characteristics

Single-threaded JavaScript execution

Asynchronous, non-blocking I/O

Event-driven architecture

Uses callbacks, promises, and async/await

# High-Level Architecture

JavaScript Engine (V8) – Executes JavaScript code

Node.js Core APIs – Provides system-level features

Native Bindings – Bridge between JS and C/C++

libuv – Handles async operations and event loop

Event Loop – Coordinates execution of tasks

# JavaScript Engine (V8)

V8 is a high-performance JavaScript engine developed by Google

Written in C++

Converts JavaScript code into machine code

Used by both Node.js and Chrome

# Responsibilities

Parses JavaScript code

Compiles code using Just-In-Time (JIT) compilation

Manages memory (heap & garbage collection)

Executes JavaScript synchronously

Node.js Core APIs

Node.js provides built-in APIs that allow interaction with the operating system.

# Examples

fs – File system operations

http – Create servers and handle requests

path – Handle file paths

os – Access system information

crypto – Cryptographic functions

# Purpose

Expose system-level functionality to JavaScript

Allow developers to build backend applications

Native Bindings

Native bindings connect JavaScript code with C/C++ code

They act as a bridge between Node.js APIs and system-level operations

# Why Native Bindings?

JavaScript alone cannot directly access OS-level features

Native bindings enable:

File system access

Network communication

Cryptographic operations

Event Loop

The Event Loop is the heart of Node.js asynchronous behavior.

# What it Does

Continuously checks for pending tasks

Executes callbacks when operations are complete

Ensures non-blocking execution

# Why It Matters

Allows Node.js to handle thousands of concurrent requests

Prevents blocking the main thread

libuv

# What is libuv?

libuv is a C library used by Node.js

It provides support for asynchronous I/O

Responsible for the event loop and thread pool

# Why Node.js Needs libuv

JavaScript itself does not support low-level async operations like:

File system access

Networking

Timers

libuv fills this gap by handling these operations efficiently.

Responsibilities of libuv

Managing the event loop

Handling asynchronous I/O

Managing the thread pool

Scheduling callbacks

Handling timers and networking

Thread Pool

# What is a Thread Pool?

A group of background threads

Used to execute blocking or CPU-intensive tasks

Managed internally by libuv

Default size: 4 threads (can be increased)

# Why Node.js Uses a Thread Pool

JavaScript runs on a single thread

Blocking operations would freeze execution

Thread pool allows:

Non-blocking behavior

Better performance

Operations Handled by Thread Pool

File system operations (fs)

DNS lookups

Compression (zlib)

Crypto operations

Some OS-level tasks

Worker Threads

# What Are Worker Threads?

Worker threads allow running JavaScript in parallel

Introduced to handle CPU-heavy tasks

Each worker has its own event loop and memory

Why Worker Threads Are Needed

Node.js main thread is single-threaded

Heavy computation blocks the event loop

Worker threads:

Improve performance

Enable true parallelism

# Macro Task Queue

Also called Task Queue

Examples

setTimeout

setInterval

setImmediate

I/O callbacks

Characteristics

Executed after microtasks

Each callback runs one at a time

Micro Task Queue

Also called Job Queue

# Examples

Promise.then()

Promise.catch()

queueMicrotask()

process.nextTick()

Characteristics

Higher priority than macro tasks

Executed immediately after current execution

Execution Priority

Synchronous code

Micro Task Queue

Macro Task Queue

Microtasks always execute before moving to the next macro task.

# Summary

Node.js is built on V8 + libuv

Event Loop enables non-blocking execution

libuv handles async operations and thread pool

Thread pool handles blocking native tasks

Worker threads handle CPU-intensive JavaScript

Microtasks have higher priority than macrotasks