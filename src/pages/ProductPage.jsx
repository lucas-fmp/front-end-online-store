import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getItemFromId } from '../services/api';

export default class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      product: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getItemFromId(id)
      .then((data) => this.setState({ product: data, loading: false }));
  }

  render() {
    const { product, loading } = this.state;
    return (
      <div>
        {!loading
        && <h2 data-testid="product-detail-name">{product.title}</h2>}
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
