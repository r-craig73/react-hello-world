let greeting = React.createElement('h1', {}, 'Hello, world!');
let clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
let app = React.createElement('div', {}, greeting, clock);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
