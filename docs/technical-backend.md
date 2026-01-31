### BACKEND

- PHP 8.2
  - Readonly Classes: Perfect for your Car, Tour, and User entities to ensure data remains immutable once loaded from the database.
  - Typed Properties: Prevents type-mismatch bugs in your Booking logic (e.g., ensuring total_price is always a float).
  - Enums: Ideal for the status fields in your Booking and Car classes (e.g., Status::Confirmed, Status::Pending).
- Slim Framework 4.12
  - Role: It handles the HTTP Request/Response cycle. It maps a URL (like /book-tour) to a specific function in your code.
  - Performance: Extremely lightweight. It only loads what you tell it to, making it much faster than Symfony or Laravel for pure API work.
- Slim PSR-7
  - Role: PSR-7 is the PHP industry standard for HTTP messages.
  - It returns a new instance, preventing side effects in the code.
- PHP-DI 7.0 (The Brain)
  - Role: It manages how your classes are created
  - It allows you to inject dependencies into your classes
- PHP Dotenv
  - Role: Loads your .env file into PHP’s environment variables.
  - It keeps your database passwords and API keys out of GitHub repository.
