# Houseful front-end challenge
A simple front-end application that will enable real estate agents to manage property listings.

## Requirements
- **Node.js**: >= 14.0.0
- **TypeScript**: 5.4.5

## Demo
![Houseful Demo](./assets/houseful_demo.gif)


## Usage
```sh
# Install dependencies
pnpm i

# Start development server fe(react) & be(json-server) concurrently
pnpm dev

# Local: http://127.0.0.1:5173/
# Endpoints: http://localhost:3001/properties

# Run unit tests
pnpm test
pnpm test:watch
```

## Features
- [x] Import additional dependencies
- [x] Scaffold UI with Mock Design (View a list of properties for sale w/Active||Expired)
- [x] Mock API calls using JSON Server
- [x] schema validation for properties (zod) 
- [x] Refactor: Organize Types into Separate Folder
- [x] Mark an individual property listing as expired
- [x] Unit testing / E2E Tests
- [x] Update README.md
- [ ] Refine Property List Cards and Designs

## Future Features
- User authentication and authorization for secure access to property listings(0auth).
- Implement data validation and error handling to ensure data integrity(zod schema validation).
- Integrate analytics(PostHog/Sentry) to track user interactions and application performance.
- Implement search and filtering functionality for property listings.
- Add pagination to handle large numbers of property listings.
- Enable agents to add and edit property details, such as property description and features.
- Implement a favorites or bookmarking feature for agents to save and track properties of interest.
- Integrate with a map service to display property locations.
- Implement notifications for agents to receive updates on property status changes or new listings.
- Add support for multiple languages to cater to a diverse user base.
- Custom user themes/Dark mode.
- Profile customisation/locality.

## Code Style
This project uses ESLint and Prettier for code linting and formatting. Please ensure your code adheres to these standards before submitting a pull request.


> Continue reading requirements [here](README_INSTRUCTIONS.md)
