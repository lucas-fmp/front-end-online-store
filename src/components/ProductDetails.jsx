import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default class ProductDetails extends Component {
  addToCart = () => {
    const { product } = this.props;
    let gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

    if (!gettingProductsLocalStorage) {
      gettingProductsLocalStorage = JSON.stringify([product]);
      localStorage.setItem('cartItems', gettingProductsLocalStorage);
    } else {
      gettingProductsLocalStorage = [...gettingProductsLocalStorage, product];
      localStorage.setItem('cartItems', JSON.stringify(gettingProductsLocalStorage));
    }
  }

  render() {
    const attributesLength = 20;
    const { product:
      { title, pictures, attributes, base_price: basePrice } } = this.props;
    const { url } = pictures[0];
    const attributesSliced = attributes.slice(0, attributesLength);
    return (
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="m-8 bg-white p-12 gap-6
        flex flex-col justify-center items-center shadow-md rounded-md truncate"
        >
          <h2
            data-testid="product-detail-name"
            className="text-xl font-bold"
          >
            {title}
          </h2>
          <img src={ url } alt="product" />
        </div>
        <div className="bg-white p-12 flex flex-col pl-20">
          <h3 className="text-xl font-bold">Especificações técnicas</h3>
          <ul className="py-6 pl-8 h-full">
            {
              attributesSliced.map((attribute) => {
                const { name, value_name: valueName, id } = attribute;
                return (
                  <li
                    key={ id }
                    className="text-gray-600 list-disc"
                  >
                    {`${name}: ${valueName}`}
                  </li>
                );
              })
            }
          </ul>
          <div
            className="flex flex-col items-center
          md:flex-row justify-between pr-10 gap-5"
          >
            <p className="text-gray-500 text-center">
              R$
              {' '}
              <span className="text-gray-700 text-xl font-bold">
                {basePrice.toFixed(2).replace('.', ',')}
              </span>
            </p>
            <button
              type="button"
              onClick={ this.addToCart }
              data-testid="product-detail-add-to-cart"
              className="font-bold py-2 px-8 mx-auto
              bottom-4 bg-[#31C28D] text-white
              rounded-sm hover:bg-[#036B52] hover:scale-105"
            >
              Adicionar ao carrinho
            </button>
            <Link
              to="/shopping-cart"
              data-testid="shopping-cart-button"
              className="text-gray-800 hover:text-black hover:scale-105"
            >
              <FaShoppingCart size={ 30 } />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    pictures: PropTypes.arrayOf(Object),
    attributes: PropTypes.arrayOf(Object),
    base_price: PropTypes.number,
  }).isRequired,
};
