/*

React Component Lifecycle :::

In React, components go through several stages from creation to removal.
These stages are different for class components and functional components.


Class Components Lifecycle Methods ::

1. Mounting Phase :
   - `constructor()`: Called when the component is initialized. Used for setting up initial state and binding methods.

   - `render()`: The only required method. Returns the JSX to be rendered.

   - `componentDidMount()`: Called after the component is first rendered to the DOM. 
                            Great for initial data fetching or setting up subscriptions.

2. Updating Phase :
   - `shouldComponentUpdate()`: Allows you to optimize performance by controlling whether the component should re-render.

   - `render()`: Re-renders the component with new props or state.

   - `componentDidUpdate()`: Called after updating occurs. Good for additional DOM manipulations or network requests.

3. Unmounting Phase :
   - `componentWillUnmount()`: Called right before a component is removed from the DOM. 
                    Used for cleanup like canceling network requests or removing event listeners.



Functional Components Lifecycle with Hooks ::

Modern React encourages using functional components with hooks, which provide similar lifecycle capabilities:

1. Mounting and Updating : 
   - `useState()`: Manages state in functional components.

   - `useEffect()`: Combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.



Key Differences and Modern Approach ::

1. Hooks Simplification :
   - Hooks like `useEffect()` combine multiple lifecycle methods into a single, more flexible API.
   - You can have multiple `useEffect()` hooks in a single component for different side effects.

2. Performance Considerations :
   - In functional components, you control re-renders more granularly:
     - `React.memo()` for preventing unnecessary re-renders.
     - `useMemo()` and `useCallback()` for optimizing expensive computations.

3. Modern Best Practices :
   - Prefer functional components with hooks.
   - Use `useEffect()` for side effects.
   - Keep components small and focused.
   - Use custom hooks to extract and reuse stateful logic.

Common Pitfalls to Avoid :
- Overusing state
- Performing expensive computations in render
- Forgetting cleanup in `useEffect()`
- Causing infinite re-render loops

Additional Hooks for Lifecycle-like Behavior :
- `useLayoutEffect()`: Similar to `useEffect()`, but fires synchronously after all DOM mutations.
- `useRef()`: Persist values across renders without causing re-renders


React's lifecycle has evolved to be more declarative and flexible with hooks, 
making component logic easier to understand and manage compared to the older class component lifecycle methods.

*/