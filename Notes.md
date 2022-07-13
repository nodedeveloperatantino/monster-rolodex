# Key Property
- Need of key in elements/tags while using multiple same elements in an array map function:
- The key helps react in optimizing the render and rerender of the UI as with keys the react will specifically rerender the particular element only instead of rerendering the whole elements.
- Only react is needed that key for optimization as final output won't contain the key in the elements.


# Single Page Applications SPAs:
- All app component code exists in the same page or simulating a single page experience.


# Component Mounting:
- It happens once in the components lifecycle and also that happens when the application loads for the first time.
- It can be remounted only if the component has been completely unmounted or removed from the application.
- Only use when the required data needed to render component 

# Components
- UI represantation, can be small as a single button or complex as a page.

# React Render and Rerender
1. App runs
2. Constructor runs set initial state of the component.
3. render function is called after cosntruct of the component
4. componentDidMount() is called after render() which sets the state of the component again
5. now as the state has been changed by the lifecycle method of the component the render runs again

In a nutshell every time setState() is called/runs the render function also runs leading to the rerender of the component. And also when the props gets updated.

# CSS Styling
CSS styles gets imported in the whole application and it doesn't matter we define it in separate files or not.
