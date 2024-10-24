# EasyTeam Time Tracking Embed

### React Native CLI Application

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [EasyTeam Time Tracking Integration](#easyteam-time-tracking-integration)
- [Running the Project](#running-the-project)
- [EasyTeam API Integration](#easyteam-api-integration)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Project Description

This project is a React Native mobile application that integrates **EasyTeam**, a time tracking and employee management solution, enabling seamless embedding of EasyTeam's time tracking functionality into mobile environments.

With this app, both employees and administrators can interact with EasyTeam's features directly within their mobile devices.

**EasyTeam embed** is a library used for embedding EasyTeam time tracking into other mobile applications. This integration allows users to:

- Track time through EasyTeam within the app.
- Manage employee work hours, shifts, and timesheets.
- Enable role-based features for employees and administrators.

The project uses the EasyTeam API to handle time tracking, shift management, and employee management, ensuring smooth integration with the EasyTeam platform.

## Features

- [x] **EasyTeam Time Tracking**: Integrated time tracking for employees.
- [x] **Timesheet Management**: Role-based views for employees and admins.
- [x] **Shift Management**: Admins can create, update, and manage employee shifts.
- [x] **Authentication**: JWT-based user authentication.
- [x] **Role-based Navigation**: Different views for admins and employees based on user roles.

## Tech Stack

- **React Native**: Cross-platform mobile development framework.
- **Axios**: For handling API requests to EasyTeam.
- **React Navigation**: For managing navigation between screens.
- **AsyncStorage**: For locally storing authentication tokens.
- **EasyTeam API**: For time tracking and shift management functionality.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [Android Studio](https://developer.android.com/studio) (For Android emulator)
- [Xcode](https://developer.apple.com/xcode/) (For iOS development, macOS only)
- **EasyTeam API Access**: Obtain access to the EasyTeam API for integration purposes.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aimal09/EasyTeamTask
   cd easyteam-embed-mobileapp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the server side:**

   To run the app, you will need the server-side code running locally alongside the **EasyTeam** app. If you don't have the server-side code, you can find it [here](https://github.com/Aimal09/EastTeamTaskServer) and follow the README instructions in that repository.

### Running the Project

To start the project locally with React Native CLI:

1. **For Android:**

   Start the Android emulator and run:

   ```bash
   npx react-native run-android
   ```

2. **For iOS (macOS only):**

   Open Xcode, start the iOS simulator, and run:

   ```bash
   npx react-native run-ios
   ```

## EasyTeam Time Tracking Integration

To integrate EasyTeam front-end components, follow these steps:

1. **Create a `.npmrc` file** with the following content:
   
   ```bash
   # Find or create .npmrc on your system, usually its in ~/Users/<your-user>/.npmrc or you find it by using
   npm config ls -l

   # Add this to your .npmrc
   //registry.npmjs.org/:_authToken=${NPM_TOKEN}
   ```

2. **Obtain an NPM token** from EasyTeam to use for installation.
   
3. **Install the EasyTeam UI components** by running:

   ```bash
   npm install @easyteam/ui
   ```

4. **Wrap your app** with the `EasyTeamProvider` component, passing the necessary authentication properties to ensure proper interaction with the API.

## EasyTeam API Integration

The app communicates with the **EasyTeam API** for time tracking, employee management, and shift handling.

### Typical Workflow:

1. **Authentication**:
   The app uses JWT for user authentication. A valid token is required for making API requests to the EasyTeam backend.

2. **Fetching Employee Data**:
   After authentication, the app retrieves employee time tracking data (clock-ins, clock-outs, timesheets) from EasyTeam.

3. **Shift Management**:
   Admins can manage shifts via the EasyTeam API, creating and updating shifts as needed.

## Folder Structure

Key files and folders required for running this app:

```bash
.
├── App.js                     # Root component of the app
├── assets/                    # Image and asset folder
├── components/                # Reusable components (e.g., Buttons, Modals)
├── context/                   # Context API for global state management
├── navigation/                # React Navigation configuration
├── screens/                   # Screen components (ClockScreen, TimesheetScreen, etc.)
├── config/                    # Base URLs and API configuration
└── navigation/                # All navigation and routing logic
```

## Environment Variables

In the root directory, create an `config/api.js` file for environment variables:

```bash
BASE_URL=http://10.0.3.2:8000/api # For Genymotion emulator
BASE_URL=http://10.0.2.2:8000/api # For Android emulator
```

Replace `10.0.2.2` with your **local IP address** when running the app on a physical Android device.

### How to Find Your Local IP Address:

- **Mac**: Run `ifconfig | grep inet` in the terminal to find your local IP.
- **Windows**: Run `ipconfig` in Command Prompt to find the "IPv4 Address."

Ensure both your computer and mobile device are connected to the same network.

## Testing

You can write unit and integration tests using [Jest](https://jestjs.io/) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/).

To run tests:

```bash
npm test
```

Ensure you write tests for critical areas of the app, including API interactions and role-based navigation.

## Troubleshooting

- **App not running on Android/iOS emulator?**
  - Make sure the emulator is properly configured and running.
  - For Android, ensure Android Studio and its SDK tools are correctly set up.

- **Network request errors?**
  - Verify that the EasyTeam API base URL and routes are correct.
  - Ensure that your JWT token is valid and not expired.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Create a Pull Request.

Ensure your code follows the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Acknowledgments

- **EasyTeam** for providing the time tracking service integration.
- The **React Native** and **Open Source** community for the amazing tools and libraries used in this project.
