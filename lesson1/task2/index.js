{/* <div class="greeting">
  <div class="greeting__title">Hello, world!</div>
  <div class="greeting__text">I\'am learning React</div>
</div> */}

const rootElement = document.querySelector('#root');

// const wrapperElem = document.createElement('div');
// wrapperElem.classList.add('greeting');

// const titleElem = document.createElement('div');
// titleElem.textContent = 'Hello, world!';
// titleElem.classList.add('greeting__title');

// const greetingTextElem = document.createElement('div');
// greetingTextElem.textContent = 'I\'am learning React';
// greetingTextElem.classList.add('greeting__text');

// wrapperElem.append(titleElem, greetingTextElem);

// rootElement.append(wrapperElem);

const element = React.createElement(
  'div',
  { className: 'greeting' },
    React.createElement(
      'h1',
      { className: 'greeting__title' },
      'Hello, world!'
    ),
    React.createElement(
      'p',
      { className: 'greeting__text' },
      'I\'am learning React'
    ),
)

ReactDOM.render(element, rootElement);
