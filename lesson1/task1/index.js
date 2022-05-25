const rootElement = document.querySelector('#root');

// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);

const greetingElem = React.createElement( //створюємо елемент на сторінці за допомогою реакту 
  'div', //вказуємо який елемент
  { className: 'greeting' }, //задаємо атрибути елементу
  'Hello, React!' //перечислити дочірні елементи
);

ReactDOM.render(greetingElem, rootElement) //вставляємо на сторінку(приймає 2 аргумента: 1й - елемент який додаємо. 2й - куди додаємо)