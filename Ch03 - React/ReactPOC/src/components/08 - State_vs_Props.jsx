// STATE :::

// Using "States" is important in React, because it allows components to manage 
// their own data and re-render themselves when the data changes.

// State is local to a component, that means change to a state within a component
// does not affect other components.

// This encapsulation of State helps to keep the logic of the application 
// organized and maintainable.



// PROPS :::


// Props ::: Props helps us to send data from Parent to Child component.

// Benefits of Props :::
    // 1. Customization
    // 2. Reusability of components
    // 3. Seperation of concerns
    // 4. Efficient
    // 5. Not repeating the same code multiple times


// "Props" cannot be used to manage the "state" because of its nature:
// 1. Props are IMMUTABLE : props cannot be changed within the component that receives them.
       // Props are only passed down to display a particular information and keep those things in sync.
       // We cannot update a Prop.
       // Since, they cannot be updated, they are not useful to manage a "State".

// 2. Single source of truth : State can be changed within the component that describes it.

// 3. Re-rendering : When the "state" of a component changes, react automatically re-renders the component
//to reflect the updated changes. This is essential for maintaining a responsive User Interface.
// While "Props" are static and do not trigger re-renders when they change. 