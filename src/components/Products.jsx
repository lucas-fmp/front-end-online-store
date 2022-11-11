import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class Products extends Component {
  validationProducts = () => {
    const { isFiltered, products, filteredProducts, searched } = this.props;
    if (isFiltered) return filteredProducts;
    if (searched && products.length === 0) {
      return (
        <div
          className="flex flex-col gap-4 pt-96"
        >
          <h3 className="text-[#5FD149] text-4xl justify-center text-center">
            NENHUM PRODUTO
            <br />
            FOI ENCONTRADO
          </h3>
          <p className="text-[#94979D] text-xl text-center">
            Digite outro termo de pesquisa ou
            <br />
            escolha uma categoria
          </p>
        </div>
      );
    }
    if (searched) return products;
    return (
      <div
        data-testid="home-initial-message"
        className="flex flex-col gap-4 pt-96"
      >
        <h3 className="text-[#5FD149] text-4xl justify-center text-center">
          VOCÊ AINDA NÃO
          <br />
          REALIZOU UMA BUSCA
        </h3>
        <p className="text-[#94979D] text-xl text-center">
          Digite algum termo de pesquisa ou
          <br />
          escolha uma categoria
        </p>
      </div>
    );
  };

  addingProductToCart = ({ target }) => {
    const { id } = target;
    const result = this.validationProducts();
    const filterCart = result.filter((item) => item.id === id);
    filterCart[0].quantity = 1;
    let gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

    if (!gettingProductsLocalStorage) {
      gettingProductsLocalStorage = JSON.stringify(filterCart);
      localStorage.setItem('cartItems', gettingProductsLocalStorage);
    } else {
      gettingProductsLocalStorage = [...gettingProductsLocalStorage, filterCart[0]];
      localStorage.setItem('cartItems', JSON.stringify(gettingProductsLocalStorage));
    }
  }

  render() {
    const result = this.validationProducts();
    return (

      Array.isArray(result) ? (
        <div
          className="w-full bg-[#ECECEC] grid
          grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 p-8 pt-28"
        >
          {
            result
              .map(({ id, title, price, thumbnail, shipping }) => (
                <div key={ id } className="relative hover:scale-105 duration-300">
                  <ProductCard
                    key={ id }
                    id={ id }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
                    shipping={ shipping }
                  />
                  <button
                    type="button"
                    data-testid="product-add-to-cart"
                    id={ id }
                    onClick={ this.addingProductToCart }
                    className="absolute font-bold left-4 right-4 py-1 mx-auto
                      bottom-4 bg-[#31C28D] text-white
                      rounded-md hover:bg-[#036B52]"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              ))
          }
        </div>
      ) : (
        <div className="w-full bg-[#ECECEC]">
          {
            result
          }
        </div>
      )
    );
  }
}

Products.propTypes = {
  filteredProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  isFiltered: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  searched: PropTypes.bool.isRequired,
};
