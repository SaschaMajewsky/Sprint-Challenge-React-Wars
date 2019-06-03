# Answers of Sascha Majewsky

Q:
What is React JS and what problems does it try and solve?

A:
-React is a frontend UI Library (Not a framework) which utlizes components,
states and props to solve the problem of technically expensive DOM operations
and by that make websites reactive.
-A lot of conventional DOM operations will lead to a slow and not performant interactive website.
-With React the virtual DOM can be used to make a diff between the updated elements on the website
so that only different data can be seemingless rerendered/loaded into the website.
-React is because of the heavily usage of components very reusable and not opinionated
in the way the JavaScript can be applied. So it offers a lot of freedom, but also some complexity.


Q:
What does it mean to _think_ in react?

A:
-Thinking about how can a software system be cut into resuable parts and how the data should flow through them.
-React is good for the DRY-Principle and Single-Responsibility-Principle so that specialized
components can do one thing very well and can be insertes like building blocks.
-Components should be designed with lowest complexity in mind and don't be overstyled by default.
-Nesting in React is cool but don't go too deep as data in props need to be propdrilled down 
the whole chain of components which can get messy.


Q:
Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A:
Class Components:
-Class Components are written with CCR (Class, Constructor, Render) and use the "this" class syntax.
-Class Components can hold data in states or hooks.
-With attributes and class methods they offer a lot of functionality and inherit characteristics from 
React.Compontent's class.
-They offer access to the React API and Lifecycle functionalities.

Function Components:
-Functional Components don't offer methods by itself like a class with class methods does.
-They receive their props as an argument passed over as an object into them.
-They have less code within them in comparism to class components and are in general better in performance.


Q:
Describe state.

A: 
-States are like the heart of a React application they are the data represented as an object.
-Natively states don't offer access to themself directly but can be read, updated or deleted
with the help of the setState() method.
-When a state is updated it will call render() to update parts of a website.
-States can be passed through the component chain as props.
-When a state is changed, also the props change.


Q:
Describe props.

A:
-Props are like the blood of a software system that contains rich information and flows through
it to distribute it.
-Every React component can contain props and they are immutable, only readable after initialization.
-Props are beeing passed from top to bottom of the parent components to the child components.
