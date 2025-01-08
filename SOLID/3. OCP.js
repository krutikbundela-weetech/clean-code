/**
 * *Open/Closed Principle (OCP)
 *  (class ni under kai modifify nai thavu joie but extend thavu joie(inheritance , interface))
 * 
 * 
 * ?React js
 ** koi b component evi rite design krvaaa no k emaa later koi changes nai aave but ejj code ne aapde different component ma extend krii sakiyee
 * 
 * The Open/Closed Principle (OCP) is the second principle of SOLID, and it states:

Software entities (such as classes, modules, or functions) should be open for extension but closed for modification.

Explanation
Open for extension: The behavior of a module can be extended to meet new requirements.
Closed for modification: Existing code should not be changed when adding new functionality.
This principle promotes extensibility without breaking existing functionality. It helps in reducing the risk of introducing bugs when modifying the code.

OCP in React.js
In React, the OCP can be applied through various patterns such as props-based customization, Higher-Order Components (HOCs), composition, and hooks.

Example 1: Violating OCP
Imagine a button component with hardcoded logic for primary and secondary buttons:

jsx
Copy code
function Button({ type, label }) {
  if (type === "primary") {
    return <button style={{ backgroundColor: "blue", color: "white" }}>{label}</button>;
  } else if (type === "secondary") {
    return <button style={{ backgroundColor: "gray", color: "black" }}>{label}</button>;
  }
  return <button>{label}</button>;
}
Problem:
To add a new button style (e.g., "danger"), you need to modify the Button component.
This violates OCP because you are modifying existing code to add new functionality.
Example 2: Following OCP
To adhere to OCP, make the component extensible by accepting styles as props:

jsx
Copy code
function Button({ label, style }) {
  return <button style={style}>{label}</button>;
}

// Usage
const primaryStyle = { backgroundColor: "blue", color: "white" };
const secondaryStyle = { backgroundColor: "gray", color: "black" };
const dangerStyle = { backgroundColor: "red", color: "white" };

function App() {
  return (
    <div>
      <Button label="Primary" style={primaryStyle} />
      <Button label="Secondary" style={secondaryStyle} />
      <Button label="Danger" style={dangerStyle} />
    </div>
  );
}
Why is this better?
You can extend the button's behavior by passing different styles without modifying the Button component itself.
Example 3: Using Composition to Follow OCP
Another approach to OCP is composition. Instead of embedding logic inside the button component, you can create reusable style utilities or components.

jsx
Copy code
const buttonStyles = {
  primary: { backgroundColor: "blue", color: "white" },
  secondary: { backgroundColor: "gray", color: "black" },
  danger: { backgroundColor: "red", color: "white" },
};

function Button({ label, styleType }) {
  const style = buttonStyles[styleType] || {};
  return <button style={style}>{label}</button>;
}

// Usage
function App() {
  return (
    <div>
      <Button label="Primary" styleType="primary" />
      <Button label="Secondary" styleType="secondary" />
      <Button label="Danger" styleType="danger" />
    </div>
  );
}
Key Takeaways
Customization through Props: Use props to make components extensible.
Composition over Inheritance: Prefer composition (e.g., reusable components or hooks) to avoid modifying existing components.
Avoid Hardcoding: Use configurable options (e.g., objects, external files) to make extending behavior easier.
By following OCP in React, you create flexible and reusable components that adapt to new requirements without the need for intrusive changes.
 * 
 */