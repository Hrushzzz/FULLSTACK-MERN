
## Topics

- What is Event Delegation?
    - Relation with concept of Bubbling 
    

## Event delegation

Event delegation and event bubbling are closely related concepts that work hand-in-hand to optimize event handling in web development. When applied together, they provide an efficient way to manage interactions on a large number of elements.

Imagine you're browsing a website like Amazon, and on the product listing page, there are multiple product cards, each containing an "Add to Cart" button. Here's how event delegation and event bubbling come into play:

1. **Event Delegation:**
   Event delegation involves attaching a single event listener to a common ancestor element (in this case, the container holding the product cards). Instead of placing event listeners on each "Add to Cart" button individually, you attach one listener to the container.

2. **Event Bubbling:**
   Event bubbling refers to the natural propagation of an event through the DOM hierarchy. When an event occurs on a deeply nested element, it first triggers the event handler on that element and then "bubbles up" through its ancestors.

Let's see how these concepts work together:

- When a user clicks the "Add to Cart" button on a product card, the event starts at the button (target) and then bubbles up through its parent elements.
- Since you've attached a single event listener to the container holding the product cards, the event bubbles up to the container.
- The event listener captures the event at the container level and checks whether the clicked element (the button) matches certain criteria (e.g., having the class `add-to-cart`).
- If the criteria are met, the listener knows that an "Add to Cart" action is intended and can extract information about the specific product from the event's context

Let's go through an example with code to demonstrate event delegation and event bubbling using different categories of products (headphones, laptops, mobiles) on a web page:

**HTML Structure:**
```html
<div id="categories">
  <div class="category" id="headphones">
    <h2>Headphones</h2>
    <div class="product">Product A</div>
    <div class="product">Product B</div>
  </div>
  <div class="category" id="laptops">
    <h2>Laptops</h2>
    <div class="product">Product X</div>
    <div class="product">Product Y</div>
  </div>
  <div class="category" id="mobiles">
    <h2>Mobiles</h2>
    <div class="product">Product P</div>
    <div class="product">Product Q</div>
  </div>
</div>
```

**JavaScript:**
```javascript
const categoriesContainer = document.getElementById('categories');

categoriesContainer.addEventListener('click', (event) => {
  const clickedElement = event.target;
  
  // Check if the clicked element is a product
  if (clickedElement.classList.contains('product')) {
    const category = clickedElement.closest('.category').querySelector('h2').textContent;
    const product = clickedElement.textContent;
    
    console.log(`Clicked on ${product} in the ${category} category.`);
    // Handle the click action for the product here
  }
});
```

In this example:

- The `categoriesContainer` element is the common ancestor for all categories and products.
- The event listener is attached to the `categoriesContainer` to capture clicks on any of its child elements.
- When a product is clicked, the event bubbles up through the category section, reaching the `categoriesContainer`.
- The listener checks if the clicked element has the class `product`. If it does, it extracts the category and product information and performs the necessary action.
- This code efficiently handles clicks on products within any category, demonstrating the combined usage of event delegation and event bubbling.

With this setup, regardless of the number of categories or products, you only need one event listener to handle all clicks, making your code more maintainable and efficient.

Let's create an example where event delegation is used to change the background color of elements by clicking on them. In this example, we'll create a set of colored boxes, and clicking on any box will change its background color using event delegation.

**HTML Structure:**
```html
<div id="colorPalette">
  <div class="color-box" style="background-color: red;"></div>
  <div class="color-box" style="background-color: green;"></div>
  <div class="color-box" style="background-color: blue;"></div>
</div>
```

**JavaScript:**
```javascript
const colorPalette = document.getElementById('colorPalette');

colorPalette.addEventListener('click', (event) => {
  const clickedElement = event.target;
  
  // Check if the clicked element is a color box
  if (clickedElement.classList.contains('color-box')) {
    const color = clickedElement.style.backgroundColor;
    document.body.style.backgroundColor = color;
  }
});
```

In this example:

- The `colorPalette` element is the common ancestor for all color boxes.
- The event listener is attached to the `colorPalette` to capture clicks on any of its child elements.
- When a color box is clicked, the event bubbles up to the `colorPalette`.
- The listener checks if the clicked element has the class `color-box`. If it does, it extracts the background color of the clicked color box.
- The background color of the `body` element is then set to the extracted color, effectively changing the page's background color.

This example demonstrates how event delegation can be used to efficiently manage interactions across a set of elements, in this case, color boxes. By using event delegation, you handle all color box clicks with a single event listener, making the code cleaner and more maintainable.
