import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Related from '../components/related';
import Categories from '../../categories/components/categories';

class Home extends Component {

  render() {
    return (
      <HomeLayout>
        <Related />
        <Categories categories={this.props.data.categories} />
      </HomeLayout>
    )
  }
}

export default Home;