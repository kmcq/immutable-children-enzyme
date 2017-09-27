The point of this project is to show that enzyme v3 is not rendering Immutable
Iterable children.

`src/App.js` is a simple component that renders a Immutable.List mapped into spans.

`src/App.test.js` creates a snapshot using enzyme 2 and enzyme 3.

`src/__snapshots__/App.test.js.snap` shows that enzyme 2 rendered this but enzyme 3 does not.

This project was setup using `create-react-app`
