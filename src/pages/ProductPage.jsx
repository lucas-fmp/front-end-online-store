import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { getItemFromId } from '../services/api';
import Rating from '../components/Rating';
import ProductDetails from '../components/ProductDetails';

export default class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      product: undefined,
      loading: true,
      reviews: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const getReviews = JSON.parse(localStorage.getItem('reviews'));
    getItemFromId(id)
      .then((data) => this.setState({ product: data,
        loading: false,
        reviews: getReviews || [] }));
  }

  addReview = (review) => {
    const { reviews } = this.state;

    this.setState({ reviews: [...reviews, review] }, () => {
      const { reviews: reviewAtt } = this.state;
      localStorage.setItem('reviews', JSON.stringify(reviewAtt));
    });
  }

  render() {
    const { reviews, product, loading } = this.state;
    return (
      <div className="bg-[#ECECEC]">
        <div>
          {!loading
        && <ProductDetails product={ product } />}
        </div>
        <div className="p-12 bg-[#E1E5EB] flex flex-col gap-2">
          <Rating addReview={ this.addReview } />
          { reviews.map((review, index) => {
            const rating = new Array(Number(review.rating)).fill('rate');
            return (
              <div key={ index } className="bg-white px-14 py-8 flex flex-col gap-4">
                <div
                  className="flex flex-col gap-2 items-start
                md:flex-row md:gap-10 md:items-center"
                >
                  <p className="text-lg font-bold items-center">
                    {review.email}
                  </p>
                  <div className="flex gap-1 text-[#31C28D]">
                    {
                      rating.map((_rate, i) => (
                        <FaStar key={ i } />
                      ))
                    }
                  </div>
                </div>
                <p className="text-gray-600 overflow-hidden">
                  {review.comment}
                </p>
              </div>);
          })}
        </div>
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
