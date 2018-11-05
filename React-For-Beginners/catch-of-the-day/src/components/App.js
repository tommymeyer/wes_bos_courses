import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="catch-of-the-day">
          <article className="menu">
            <Header />
          </article>
          <Order />
          <Inventory />
        </section>
      </React.Fragment>
    )
  }
}


export default App;