/**
 * The Interface Segregation Principle (ISP) is the fourth principle of SOLID and it states:

A client should not be forced to depend on methods it does not use.

Explanation
ISP promotes creating smaller, more specific interfaces (or contracts) rather than a single large, all-encompassing interface.
In React, this translates to components, hooks, or functions that provide only the functionality required for specific use cases, avoiding unnecessary props, methods, or dependencies.
ISP in React.js
React doesn’t have traditional interfaces like in languages such as TypeScript or Java, but the principle can be applied by:

Splitting large components into smaller, focused components.
Avoiding bloated prop contracts.
Providing reusable hooks or utilities with specific functionality.
Example 1: Violating ISP
A UserProfile component that handles too many concerns:

jsx
Copy code
function UserProfile({ user, onEdit, onDelete, onSave }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onSave}>Save</button>
    </div>
  );
}
Problem:
Consumers are forced to provide all three handlers (onEdit, onDelete, onSave) even if they only use some of them.
This violates ISP because the component expects a contract broader than what some consumers may need.
Example 2: Following ISP
Refactor the component to smaller, focused components:

jsx
Copy code
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

function EditButton({ onEdit }) {
  return <button onClick={onEdit}>Edit</button>;
}

function DeleteButton({ onDelete }) {
  return <button onClick={onDelete}>Delete</button>;
}

function SaveButton({ onSave }) {
  return <button onClick={onSave}>Save</button>;
}

// Usage
function App() {
  const user = { name: "John Doe" };

  const handleEdit = () => console.log("Edit user");
  const handleDelete = () => console.log("Delete user");
  const handleSave = () => console.log("Save user");

  return (
    <div>
      <UserProfile user={user} />
      <EditButton onEdit={handleEdit} />
      <DeleteButton onDelete={handleDelete} />
      <SaveButton onSave={handleSave} />
    </div>
  );
}
Why is this better?
Each component now has a specific purpose and requires only the relevant props.
Consumers can choose which components to use without being forced to implement unnecessary functionality.
Example 3: Applying ISP in Custom Hooks
A hook that combines unrelated concerns can violate ISP:

Violating ISP
javascript
Copy code
function useUserActions(userId) {
  const editUser = (data) => {
    console.log(`Editing user ${userId}`, data);
  };

  const deleteUser = () => {
    console.log(`Deleting user ${userId}`);
  };

  const saveUser = (data) => {
    console.log(`Saving user ${userId}`, data);
  };

  return { editUser, deleteUser, saveUser };
}
Following ISP
Split the hook into more focused hooks:

javascript
Copy code
function useEditUser(userId) {
  return (data) => console.log(`Editing user ${userId}`, data);
}

function useDeleteUser(userId) {
  return () => console.log(`Deleting user ${userId}`);
}

function useSaveUser(userId) {
  return (data) => console.log(`Saving user ${userId}`, data);
}

// Usage
function App() {
  const userId = 1;

  const editUser = useEditUser(userId);
  const deleteUser = useDeleteUser(userId);
  const saveUser = useSaveUser(userId);

  return (
    <div>
      <button onClick={() => editUser({ name: "New Name" })}>Edit</button>
      <button onClick={deleteUser}>Delete</button>
      <button onClick={() => saveUser({ name: "Saved Name" })}>Save</button>
    </div>
  );
}
Key Takeaways
Smaller Contracts: Keep components, hooks, or functions focused on specific responsibilities.
Avoid Bloated Props: Ensure a component requires only the props it truly needs.
Reuse with Flexibility: By splitting logic into smaller parts, consumers can pick and choose what they need without unnecessary dependencies.
By following ISP in React, you reduce coupling, improve readability, and enhance reusability and maintainability of your codebase.
 */