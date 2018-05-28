import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'

class Controll extends Component {

    componentWillReceiveProps(nextProps){
        
    }
  render() {
    return (
      <div className="row mt-15">
             {/*Search*/}
                <Search onSearch ={this.props.onSearch}/>
             {/*Sort*/}
                <Sort onSort={this.props.onSort}
                      sortBy={this.props.sortBy}
                      sortValue={this.props.sortValue}/>
      </div>
    );
  }
}

export default Controll;
