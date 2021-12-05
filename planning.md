# React Project Planning Guide

## 7 Step Plan

1. [Identify What Each View Should Look Like](#identify-what-each-view-should-look-like)
2. [Break Each View Into a Hierarchy of Components](#break-each-view-into-a-hierarchy-of-components)
3. [Code Each View](#code-each-view)
4. [Check For Unused Code](#check-for-unused-code)
5. [Determine What Events Happen in the App](#determine-what-events-happen-in-the-app)
6. [Determine What Data Lives in the Store](#determine-what-data-lives-in-the-store)
7. [Coding Stage](#coding-stage)

### Identify What Each View Should Look Like

Draw each view to know what information and data will live on each page.
Alternatively, use a mockup app.

### Break Each View Into a Hierarchy of Components

Do this by:

- drawing boxes around every component
- arranging components into a hierarchy

### Code Each View

Code each view.

### Check For Unused Code

Check for unused code using guide in [this article](https://app.getpocket.com/read/2660858451)

### Determine What Events Happen in the App

Determine and list what event(s) happens in each component.
This will also help identify what actions each component will consume

### Determine What Data Lives in the Store

- Data that is required by just one component should live in that component.
- Data that is required by multiple components or will pass through a component(that doesn't need it) to another(that does need it) should live in the store

#### Normalize State Data

These are the rules to use for normalizing state data

- Each type of data gets its own "table" in the state.
- Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
- Any references to individual items should be done by storing the item's ID.
- Arrays of IDs should be used to indicate ordering.

#### Accessing the Store From An Action Creator

Generally, accessing the store from an action creator is considered an anti-pattern. Dan Abramov says that the few use cases where it's acceptable to do that are:

> to check cached data before you make a request or to check whether you are authenticated (in other words, doing a conditional dispatch).

### Coding Stage🔨

1. Design the shape of the state

2. Create reducers

3. Store

   - Create a Redux store.
   - Connect logger middleware (optional)
   - Connect Redux Thunk(or redux-saga) middleware

4. For each view that needs access to the store, create the component and connect it to the store.

5. For the component you created in the last step, create actions and action creators. Check that everything works correctly.

6. Repeat Step 5 & Step 6 for each component that needs access to the store.

7. Create presentational components and confirm that everything works correctly.

8. Add React Router.

9. Add finishing touches and make sure the project meets the rubric.

10. Generate jsDOC documentation for `src` folder. Refer to:
    - [https://devhints.io/jsdoc](https://devhints.io/jsdoc)
    - [https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/](https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/)

> Remember, this is just a template. As you build more projects, you'll modify this template to suit your needs. You may also find it more intuitive to use a different approach. Regardless of the approach you take, however, planning out your app is imperative to success.

## Asset plans

### Actions

### Components

### Config

### Data

### Selectors
