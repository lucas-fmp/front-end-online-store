import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCardCart from '../components/ProductCardCart';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (gettingProductsLocalStorage !== null) {
      this.setState({ products: gettingProductsLocalStorage });
    }
  }

  render() {
    const { products } = this.state;
    let total = 0;

    products.map((product) => {
      total += Number(product.price);
      return total;
    });

    return (
      <div className="bg-[#ECECEC]">
        {
          products.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
              <div
                className="m-8 bg-white p-12 shadow-md
              rounded-md divide-y-2 overflow-y-auto"
              >
                <h3
                  className="text-center text-xl font-bold h-fit pb-8"
                >
                  Carrinho de Compras
                </h3>
                {
                  products
                    .map(({
                      id, title, price, thumbnail,
                      quantity, available_quantity: availableQuantity,
                    }) => (
                      <ProductCardCart
                        key={ id }
                        id={ id }
                        title={ title }
                        price={ price }
                        thumbnail={ thumbnail }
                        quantity={ quantity }
                        availableQuantity={ availableQuantity }
                      />
                    ))
                }
              </div>
              <div
                className="bg-white flex flex-col gap-4
              justify-center items-center p-12"
              >
                <h3 className="font-bold text-xl">
                  Valor total da compra:
                </h3>
                <h3 className="font-bold text-xl">
                  {
                    `R$ ${total.toFixed(2).replace('.', ',')}`
                  }
                </h3>
                <Link
                  to="/checkout"
                  data-testid="checkout-products"
                  className="font-bold py-2 px-20 mt-12 bg-[#31C28D] text-white
                  rounded-sm hover:bg-[#036B52] hover:scale-105"
                >
                  Finalizar compra
                </Link>
              </div>
            </div>

          ) : (
            <div
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </div>
          )
        }
      </div>
    );
  }
}
