# How the data flows

1. Request: A user wants to book a classic car in Paris.

2. Slim 4: Receives the request and runs it through Middleware (for authentication/JSON parsing).

3. PHP-DI: Instantiates the Controller and automatically injects the Database and Pricing Logic.

4. PHP 8.2: Processes the business logic (calculating detour charges) using your typed classes.

5. Response: Returns a clean, standardized JSON object to the frontend.
