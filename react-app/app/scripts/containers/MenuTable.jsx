import React from 'react';

import './MenuTable.scss';

export function MenuTableF(props) {
  return <section className="menu-section">
    <h2>{props.title}</h2>
    <ul>
      {
        props.data.map(item => <li>{item.name}</li>)
      }
    </ul>
  </section>
}

const MenuTable = props => {
  return <section className="menu-section">
    <h2>{props.title}</h2>
    <ul>
      {
        props.data.map((item, index) => {
          const onClickHandler = () => props.click(item);
          return <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button className="btn btn-danger order-btn" type="button" onClick={onClickHandler}>Buy</button>
            </li>;
        })
      }
    </ul>
  </section>
};

class MenuTableClass extends React.Component {
  render() {
      return <section className="menu-section">
        <h2>{this.props.title}</h2>
        <ul>
          {
            this.props.data.map(item => <li>{item.name}</li>)
          }
        </ul>
      </section>
  }
}

export default MenuTable;

