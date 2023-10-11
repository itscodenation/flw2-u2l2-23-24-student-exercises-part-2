# Lesson 2.2: Importing & Exporting Components

In React, a component can be defined as a reusable piece of UI. Components can be imported and exported between different files, making your codebase modular and easier to maintain.

## Exporting Components

Before a component can be used in other parts of your application, it must be exported from the file where it's defined. There are two types of exports: named exports and default exports.

### Named Exports

With named exports, you can export multiple items from a single file. Each exported item must have a unique name.

```jsx
// MyComponent.js
import React from 'react';

export const MyComponent = () => {
  return <h1>Hello, World!</h1>;
};
```

### Default Exports

A file can have a single default export. When importing a default export, you can name it whatever you like.

```jsx
// MyDefaultComponent.js
import React from 'react';

const MyDefaultComponent = () => {
  return <h1>Hello, World!</h1>;
};

export default MyDefaultComponent;
```

## Importing Components

Once a component is exported, it can be imported into other files.

### Named Imports

For named exports, use curly braces `{ }` to import the component with its exported name.

```jsx
// App.js
import React from 'react';
import { MyComponent } from './MyComponent';

const App = () => {
  return <MyComponent />;
};

export default App;
```

### Default Imports

For default exports, you can import the component using any name you choose without curly braces.

```jsx
// App.js
import React from 'react';
import AnyName from './MyDefaultComponent';

const App = () => {
  return <AnyName />;
};

export default App;
```

## Example

Below is an example that puts everything together.

### File Structure

```
src/
|-- components/
|    |-- Header.js
|    |-- Footer.js
|
|-- App.js
```

### Header.js

```jsx
// Named export
import React from 'react';

export const Header = () => {
  return <header>Header Section</header>;
};
```

### Footer.js

```jsx
// Default export
import React from 'react';

const Footer = () => {
  return <footer>Footer Section</footer>;
};

export default Footer;
```

### App.js

```jsx
import React from 'react';
import { Header } from './components/Header'; // Named import
import Footer from './components/Footer'; // Default import

const App = () => {
  return (
    <div>
      <Header />
      {/* Content goes here */}
      <Footer />
    </div>
  );
};

export default App;
```

## Conclusion

For further reading and more advanced topics, refer to the [official React documentation](https://reactjs.org/).
