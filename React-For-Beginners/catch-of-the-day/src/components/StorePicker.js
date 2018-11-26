import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
  constructor() {
    super();

    this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();

  goToStore(e) {
    e.preventDefault();

    console.log(this.myInput);
  }

  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()} />

          <button type="submit">Visit Store &#8594;</button>
        </form>
      </React.Fragment>
    )
  }
}


export default StorePicker;