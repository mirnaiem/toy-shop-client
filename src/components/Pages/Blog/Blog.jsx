import React from 'react';

const Blog = () => {
 return (
  <div className="w-90 mx-auto my-10" >
  
  <div>
  <h2 className="text-3xl font-semibold">
    1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
  </h2>
  <p>
    <span className="font-semibold">Answer: </span>A controlled component
    is one where its value is controlled by the parent component by props.
    The parent component maintains control over the state and changes in
    the child component are communicated through callbacks. <br />
    An uncontrolled component is one where its value is handled by the DOM
    itself, instead of the React component. The state is not managed by the
    parent component and is directly managed by the DOM.
  </p>
  <h2 className="text-3xl font-semibold">
    2.How to validate React props using PropTypes?
  </h2>
  <p>
    <span className="font-semibold">Answer: </span>
    To validate React props using PropTypes, you can use the prop-types
    library which is included in React. This library provides a simple way
    to define the expected type and shape of each prop that a component
    should receive.
  </p>
  <h2 className="text-3xl font-semibold">
    3.The difference between nodejs and express js.
  </h2>
  <p>
    <span className="font-semibold">Answer: </span>
    Node.js is an open-source server-side runtime environment built on top
    of Google Chrome's V8 JavaScript engine. It allows developers to build
    scalable network applications using JavaScript on the server-side.
    Node.js provides a non-blocking I/O model that makes it efficient and
    lightweight for building real-time applications. Node.js is a standalone
    technology and does not require any specific framework or library to
    run.
    <br />
    On the other hand, Express.js is a lightweight and flexible web
    application framework built on top of Node.js. It provides an easy-to-use
    interface for building web applications and APIs. Express.js includes
    many features such as routing, middleware, templates, and HTTP utilities,
    making it a powerful and popular tool for building web applications.
    <br />
    The key difference between Node.js and Express.js is that Node.js is a
    runtime environment for executing JavaScript code, while Express.js is a
    web application framework that is built on top of Node.js. Node.js
    provides the basic building blocks for creating a web application, while
    Express.js simplifies the process by providing a set of pre-built tools
    and features that developers can use to create web applications quickly
    and efficiently.
  </p>
  <h2 className="text-3xl font-semibold">
    4.What is a custom hook, and why will you create a custom


</h2>
<p><span className='font-semibold'>Answer: </span>
A custom hook is a reusable JavaScript function that utilizes React's built-in hooks (such as useState, useEffect, etc.) to encapsulate some behavior or logic. By creating a custom hook, you can extract commonly used functionality from components and reuse it across multiple components in your application. <br />

Custom hooks can be created to:
<br />

1.Abstract complex logic or functionality and make it reusable. <br />
2.Create abstractions for frequently used functionality like fetching data or handling user input. <br />
3.Extract state management or side effects from components, making them easier to understand and test. <br />
4.Keep components more focused on rendering and less on managing state and behavior.</p>
  </div>
</div>
 );
};

export default Blog;