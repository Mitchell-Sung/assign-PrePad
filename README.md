# **Contact Manager App**

This Contact Manager App is a simple web application built with React, utilizing Redux for state management and TypeScript for type safety. It allows users to manage their contacts through a user-friendly interface, supporting operations such as listing all contacts, creating new contacts, and editing existing ones (except for their email addresses).

## **Features**

-   **List Contacts:** View all contacts on the main page, with an option to remove any contact.
-   **Create Contact:** Add new contacts by specifying their email, first name, and (optionally) last name.
-   **Edit Contact:** Modify the first name and last name of existing contacts.
-   **Data Storage:** Contacts are stored in local storage to persist data across sessions.
-   **Code Splitting:** Implements code splitting for each page to enhance performance.
-   **Error Handling:** Incorporates an ErrorBoundary to gracefully handle and report errors.

## **Technologies Used**

-   React: For building the user interface.
-   Redux: For managing application state.
-   TypeScript: For static type checking.
-   Vite: As the build tool for fast development and production builds.
-   Local Storage: For data persistence.

## **Getting Started**

To get the app running on your local machine, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/Mitchell-Sung/assign-PrePad.git
```

1. **Install dependencies:**

Navigate to the project directory and run:

```bash
npm install
```

This will install all necessary dependencies for the app to run.

1. **Start the development server:**

```bash
npm run dev
```

## **Additional Information**

-   The application uses Redux for efficient state management across components.
-   Data is stored in local storage, ensuring that your contacts remain available across sessions.
-   The project is bootstrapped with Vite, offering a fast and modern development experience.
-   TypeScript is employed to enhance code quality and reliability.

## **Error Handling**

The app implements an ErrorBoundary component that catches and displays errors gracefully, improving the user experience during unexpected failures.
