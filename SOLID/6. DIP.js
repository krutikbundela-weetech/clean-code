/**
 * The Dependency Inversion Principle (DIP) is the fifth and final principle of SOLID, and it states:

High-level modules should not depend on low-level modules. Both should depend on abstractions.

Explanation
High-level modules (business logic) should not directly depend on low-level modules (implementation details).
Both should rely on abstractions (interfaces or contracts) to reduce coupling and improve flexibility.
Changes in low-level modules should not force changes in high-level modules.
DIP in React.js
In React, the DIP can be applied by:

Using dependency injection through props or context.
Decoupling components from implementation details using hooks, higher-order components (HOCs), or composition.
Ensuring components depend on abstractions rather than concrete implementations.
Example 1: Violating DIP
A component directly depends on a concrete implementation for fetching data:

jsx
Copy code
function UserList() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
Problem:
The UserList component directly depends on the fetch API and the /api/users endpoint.
Any change in the data source or fetch logic requires modifying the UserList component.
Example 2: Following DIP
Decouple the data-fetching logic into an abstraction, e.g., a hook or a context provider:

Using a Custom Hook
javascript
Copy code
function useFetchUsers() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
}

function UserList() {
  const users = useFetchUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
Why is this better?
The UserList component depends on an abstraction (useFetchUsers) rather than directly on the fetch API or endpoint.
If the data source or fetching logic changes, you only update the hook, not the component.
Using Context for Dependency Injection
You can also use React Context to inject dependencies:

javascript
Copy code
const UserContext = React.createContext();

function UserProvider({ fetchUsers, children }) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers().then(setUsers);
  }, [fetchUsers]);

  return (
    <UserContext.Provider value={users}>{children}</UserContext.Provider>
  );
}

function UserList() {
  const users = React.useContext(UserContext);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Usage
const fetchUsers = async () => {
  const response = await fetch("/api/users");
  return response.json();
};

function App() {
  return (
    <UserProvider fetchUsers={fetchUsers}>
      <UserList />
    </UserProvider>
  );
}
Why is this better?
The UserList component does not depend on how data is fetched. It depends on the UserContext abstraction.
You can swap out the fetchUsers function (e.g., to use a mock API or GraphQL) without modifying the UserList component.
Key Takeaways
Inject Dependencies: Pass dependencies (e.g., services or functions) as props or context instead of hardcoding them.
Abstract Logic: Use hooks, context, or utilities to encapsulate implementation details.
Flexible and Testable Code: Decoupling components from implementation details improves flexibility and makes testing easier by allowing mocks or stubs to replace real implementations.
By adhering to the DIP in React, you create flexible and reusable components that are independent of specific implementations, promoting long-term maintainability.
 */