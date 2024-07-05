# Project Name
Fleet Studio Assessment

## Description
Application to fetch diff details for commits in open-source Github repositories

## Prerequisites
- Node.js (v14.x or later recommended)
- npm (v6.x or later recommended)

## Installation

Follow these steps to install the project dependencies:

1. Clone the repository:
    ```sh
    git clone https://github.com/SuganSelvam/fleetstudio.git
    cd fleetstudio
    ```

2. Install all dependencies for the client and server:
    ```sh
    npm run install:all
    ```

## Running the Application

To start both the client and server, run the following command:
```sh 
  npm run start:all
```

This will start up both front-end client & backend server in your localhost and you can access it via the url:
```url
  http://localhost:5173/repositories/golemfactory/clay/commit/a1bf367b3af680b1182cc52bb77ba095764a11f9
```

Note: Error page and invalid routes are also handle properly. Enter an invalid route to find how we help you to navigate to the diff properly
