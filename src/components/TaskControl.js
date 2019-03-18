import React, { Component } from 'react';
import Search from './TaskSearch';
import Sort from './TaskSort';

class Control extends Component {
  render() {
    return(
        <div className="row mt-15">
            {/* Search */}
            <Search/>
            {/* Sort */}
            <Sort/>
        </div>
    );
  };
}

export default Control;
