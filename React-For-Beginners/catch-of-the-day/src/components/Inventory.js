import React from 'react';
import AddFishForm from "./AddFishForm";


class Inventory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="inventory">
          <h2>Inventory</h2>

          <AddFishForm />
        </section>
      </React.Fragment>
    )
  }
}


export default Inventory;