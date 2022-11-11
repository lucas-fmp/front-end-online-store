import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getCategories } from '../services/api';
import CategoryCard from './CategoryCard';

export default class Categorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((data) => this.setState({ categorias: data }));
  }

  render() {
    const { onClickCategoryButton } = this.props;
    const { categorias } = this.state;
    return (
      <div
        className="grid grid-cols-1 divide-y-2 p-8 pt-24
        min-w-fit w-auto shadow-lg shadow-gray-300 h-fit"
      >
        <h2 className="text-xl font-bold pb-4">Categorias</h2>
        <div className="flex flex-col pt-4">
          {categorias.map((categoria) => (
            <CategoryCard
              category={ categoria.name }
              key={ categoria.name }
              id={ categoria.id }
              onClickCategoryButton={ onClickCategoryButton }
            />
          ))}
        </div>
      </div>
    );
  }
}

Categorias.propTypes = {
  onClickCategoryButton: PropTypes.func.isRequired,
};
