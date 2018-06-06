
let heading =  React.createElement ('h1', {}, 'Help Queue');
let ticketLocation = React.createElement('h3', {}, '3a');
let ticketNames = React.createElement('h3', {}, 'Thato and Haley');
let ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
let app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
