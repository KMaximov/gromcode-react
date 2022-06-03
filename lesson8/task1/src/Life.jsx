import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    // компонента вже відмалювалась
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // input: props, state
    // output: boolean
    // він запускається перед рендером на апдейт стадії він приймає nextProps в залежності від того як змінився стейт і пропс
    // він вирішує запускати рендер чи ні
    // цей метод створений для оптимізації (тобто ми можем зупинити деякі рендери, якщо дані які змінились не впливають на відображення);
    // console.log(nextProps, nextState);
    console.log('shouldComponentUpdate(nextProps, nextState):decide to render or not to render');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // запускається після рендера (this.props - вже оновленні значення)
    // prevProps, prevState - це ті пропертіс та стан які були до апдейта
    // console.log(prevProps, prevState);
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    // коли компонент виходить зі сторінки
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <div className="number">{this.props.number}</div>;
  }
}

export default Life;
