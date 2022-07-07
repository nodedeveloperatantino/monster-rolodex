### Need of key in elements/tags while using multiple same elements in an array map function:
- The key helps react in optimizing the render and rerender of the UI as with keys the react will specifically rerender the particular element only instead of rerendering the whole elements.
- Only react is needed that key for optimization as final output won't contain the key in the elements.


### Single Page Applications SPAs:
- All app component code exists in the same page or simulating a single page experience.


### Component Mounting:
- It happens once in the components lifecycle and also that happens when the application loads for the first time.
- It can be remounted only if the component has been completely unmounted or removed from the application.
- Only use when the required data needed to render component 