import React from 'react';

import MenuTable from './MenuTable';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      sum: 0
    };
  }

  render() {
    const title = 'My first React page';
    const desc = 'I hope this will be awesome';
    const foodTitle = 'Food menu';
    const food = [
      {name: 'Pizza', price: 20},
      {name: 'Sushi', price: 120},
      {name: 'Burger', price: 30}
    ];
    const drinksTitle = 'Drinks menu';
    const drinks = [
      {name: 'Soda', price: 5},
      {name: 'Coke', price: 4},
      {name: 'Beer', price: 8}
    ];
    const clickHandler = item =>
      this.setState({
        orders: this.state.orders.concat(item),
        sum: this.state.sum + item.price
      });

    return <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <MenuTable title={foodTitle} data={food} click={clickHandler}/>
      <MenuTable title={drinksTitle} data={drinks} click={clickHandler}/>
      <section>
        <h2>Order list</h2>
        <ul>
          {
            this.state.orders.map(order => <li>{order.name}</li>)
          }
        </ul>
        <strong>Order sum: {this.state.sum}</strong>
      </section>
      {/*{this.renderMenuTable(foodTitle, food)}*/}
      {/*{this.renderMenuTable(drinksTitle, drinks)}*/}
    </div>
  }
}

export default Home;
