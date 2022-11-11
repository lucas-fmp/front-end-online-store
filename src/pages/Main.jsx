import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa';
import Categorias from '../components/Categorias';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';
import Logo from '../assets/logo.svg';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searched: false,
      query: '',
      filteredProducts: [],
      isFiltered: false,
    };
  }

  onClickCategoryButton = ({ target }) => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          filteredProducts: data.results,
          isFiltered: true,
          searched: false,
        });
      });
  }

  onHandleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  }

  onHandleClick = async () => {
    const { query } = this.state;
    const data = await getProductsFromCategoryAndQuery(query);
    this.setState({ products: data.results, searched: true, isFiltered: false });
  }

  render() {
    const {
      products, query, searched, isFiltered, filteredProducts,
    } = this.state;
    return (
      <div className="flex">
        <div
          className="flex justify-between px-4 w-full
          items-center h-20 fixed bg-gradient-to-r from-blue-800 to-[#003BE5] z-10"
        >
          <label htmlFor="search" className="relative flex items-center">
            <ImSearch
              className="absolute right-2 cursor-pointer items-center justify-center"
              color="#5FD149"
              size={ 20 }
              data-testid="query-button"
              onClick={ this.onHandleClick }
            />
            <input
              name="search"
              type="text"
              data-testid="query-input"
              onChange={ this.onHandleChange }
              value={ query }
              placeholder="Digite o que você busca"
              className="p-2 my-4 border-2
                rounded-sm focus:outline-green-500"
            />
          </label>
          <img src={ Logo } alt="" />
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
            className="mr-2 text-gray-200 hover:scale-105 hover:text-white"
          >
            <FaShoppingCart size={ 30 } />
          </Link>
        </div>
        <Categorias onClickCategoryButton={ this.onClickCategoryButton } />
        <Products
          isFiltered={ isFiltered }
          searched={ searched }
          products={ products }
          filteredProducts={ filteredProducts }
        />
      </div>
    );
  }
}
