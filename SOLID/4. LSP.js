/**
 * 
 ** The Liskov Substitution Principle (LSP):

Subtypes must be substitutable for their base types.

Explanation
This principle ensures that objects of a superclass can be replaced with objects of a subclass without altering the correctness of the program.
It focuses on maintaining behavioral consistency when using inheritance or polymorphism.

*?LSP in React.js
In React, the LSP applies when designing reusable components or creating higher-level abstractions. A child component (or extended component) should behave in a way that aligns with its parent or base component’s contract. Any deviations can break expectations, causing bugs or inconsistency.

Example 1: Violating LSP
Consider a Button component with base behavior, and a DisabledButton that modifies this behavior:

jsx
Copy code
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function DisabledButton({ label }) {
  // Violates LSP by removing the `onClick` functionality
  return <button disabled>{label}</button>;
}

function App() {
  const handleClick = () => alert("Button clicked!");

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
      <DisabledButton label="Disabled" onClick={handleClick} />
    </div>
  );
}
Problem:
The DisabledButton component does not fully support the base Button’s interface because it ignores the onClick prop.
Consumers cannot rely on consistent behavior when replacing Button with DisabledButton.
Example 2: Following LSP
To adhere to LSP, make sure the DisabledButton supports the same props and behaves consistently:

jsx
Copy code
function Button({ label, onClick, disabled }) {
  return (
    <button onClick={!disabled ? onClick : undefined} disabled={disabled}>
      {label}
    </button>
  );
}

// Usage
function App() {
  const handleClick = () => alert("Button clicked!");

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
      <Button label="Disabled" onClick={handleClick} disabled />
    </div>
  );
}
Why is this better?
The Button component maintains a consistent interface, whether it is enabled or disabled.
The disabled behavior is an extension, not a modification of the base behavior.
Example 3: LSP with Composition
Instead of inheritance, React encourages composition for reusability. This naturally aligns with LSP:

jsx
Copy code
function Button({ label, onClick, ...props }) {
  return <button onClick={onClick} {...props}>{label}</button>;
}

function DisabledButton({ label }) {
  return <Button label={label} disabled onClick={() => {}} />;
}

// Usage
function App() {
  const handleClick = () => alert("Button clicked!");

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
      <DisabledButton label="Disabled" />
    </div>
  );
}
Key Points
Preserve Behavior: Subtypes (or variations of a component) must honor the behavior of the base type.
Avoid Breaking Contracts: Do not remove or change expected behaviors (e.g., props or events) in extended components.
Prefer Composition Over Inheritance: In React, using composition reduces the risk of breaking LSP and simplifies reuse.
By following the LSP, your React components remain predictable, extensible, and reusable in different contexts without unexpected side effects.
 */