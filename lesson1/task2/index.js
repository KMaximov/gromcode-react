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


// const renderGreeting = elem => {
//   const containerElem = document.createElement('div');
//   containerElem.classList.add('greeting');

//   const titleElem = document.createElement('h1');
//   titleElem.classList.add('greeting__title');
//   titleElem.textContent = 'Hello, world!';

//   const textElem = document.createElement('p');
//   textElem.classList.add('greeting__text');
//   textElem.textContent = "I'm learning React";

//   containerElem.append(titleElem, textElem);

//   elem.append(containerElem);
// };

// renderGreeting(rootElement);


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
      'I\'m learning React'
    ),
)

ReactDOM.render(element, rootElement);
