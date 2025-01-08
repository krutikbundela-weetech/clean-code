/**
 * *Single Responsibility Principle
 * ?React JS
 * Ex: suppose there is one component that has code of displaying the products and filtering the product 
 * now to make it SRP
 ** 1. each component should do one thing so filter no bijoo 1 component banavi devaa no
 * 
 ** 2. multiple useState hoi and useEffect hoi to teno ek custom hook banavi devaa no e.g fetch user data and store in use state eno ek different hook
 * 
 * The Single Responsibility Principle (SRP) is the first principle of the SOLID principles, and it states:

A class (or module) should have only one reason to change.

Explanation
A class or function should focus on one task or responsibility.
This makes the code easier to understand, test, and maintain.
If a class or function is responsible for multiple things, a change in one responsibility might inadvertently affect the others, making the code fragile.
SRP in React.js
In React.js, the SRP applies not only to classes but also to components, hooks, and functions. Each component or function should handle only one responsibility.

Example 1: Violating SRP in React Component
jsx
Copy code
function UserDashboard() {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    // Fetch user data
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const handleLogout = () => {
    // Logout logic
    console.log("User logged out");
  };

  return (
    <div>
      {userData ? (
        <>
          <h1>Welcome, {userData.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
Here, the UserDashboard component:

Handles fetching user data.
Manages the UI logic.
Implements logout functionality.
This violates SRP because the component is responsible for multiple tasks.

Example 2: Refactored to Follow SRP
To follow SRP, separate these concerns into different components or hooks:

jsx
Copy code

//? custom hook
function useUserData() {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return userData;
}

//? different component
function LogoutButton({ onLogout }) {
  return <button onClick={onLogout}>Logout</button>;
}

function UserDashboard() {
  const userData = useUserData();

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div>
      {userData ? (
        <>
          <h1>Welcome, {userData.name}</h1>
          <LogoutButton onLogout={handleLogout} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
Why is this better?
The useUserData hook is responsible for fetching user data, adhering to SRP.
The LogoutButton is responsible for rendering and handling logout.
The UserDashboard component focuses on displaying the UI.
By separating concerns, the code is more maintainable, testable, and scalable.
 *  
 */