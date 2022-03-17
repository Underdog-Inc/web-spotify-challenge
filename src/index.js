console.log('hello world');

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Hello world!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)
