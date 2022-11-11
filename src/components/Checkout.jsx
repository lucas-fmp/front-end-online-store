import React, { Component } from 'react';
import { FaCcVisa, FaCcMastercard, FaBarcode } from 'react-icons/fa';
import Pix from '../assets/pix.svg';
import ProductCardCart from './ProductCardCart';

export default class Checkout extends Component {
  render() {
    const gettingProductsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div
        className="grid grid-cols-1 lg:grid-cols-2
        h-auto lg:h-screen bg-[#ECECEC]"
      >
        <div
          className="m-8 bg-white p-12
          shadow-md rounded-md divide-y-2 overflow-y-auto"
        >
          <h3
            className="text-center text-xl font-bold h-fit pb-8"
          >
            Revise seus pedidos
          </h3>
          {
            gettingProductsLocalStorage
              .map(({ id, title, price, thumbnail, quantity }, index) => (
                <div key={ index }>
                  <ProductCardCart
                    key={ id }
                    id={ id }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
                    quantity={ quantity }
                  />
                </div>
              ))
          }
        </div>

        <div className="bg-white p-12 flex flex-col justify-center">
          <h3 className="text-xl font-bold h-fit pb-6">Informações do Comprador</h3>
          <div className="flex justify-between flex-wrap gap-2 mb-8">
            <label
              htmlFor="fullname"
              className=" w-full sm:w-[49%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                data-testid="checkout-fullname"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Nome Completo"
                className="w-full shadow appearance-none border rounded py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="cpf"
              className="w-full sm:w-[49%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                data-testid="checkout-email"
                type="numbers"
                name="cpf"
                id="cpf"
                placeholder="CPF"
                className="w-full shadow appearance-none border
                rounded py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="email"
              className="w-full sm:w-[49%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                data-testid="checkout-cpf"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full shadow appearance-none border rounded py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="telefone"
              className="w-full sm:w-[49%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                data-testid="checkout-phone"
                type="numbers"
                name="telefone"
                id="fulltelefone"
                placeholder="Telefone"
                className="w-full shadow appearance-none border rounded py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="fullname"
              className="w-full sm:w-[25%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                data-testid="checkout-cep"
                type="numbers"
                name="cep"
                id="cep"
                placeholder="CEP"
                className="w-full shadow appearance-none border rounded py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="endereço"
              className="w-full sm:w-[73%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                data-testid="checkout-address"
                type="text"
                name="endereço"
                id="endereço"
                placeholder="Endereço"
                className="w-full shadow appearance-none border rounded py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="complemento"
              className="w-full sm:w-[73%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                type="text"
                name="complemento"
                id="complemento"
                placeholder="Complemento"
                className="w-full shadow appearance-none border rounded py-2 px-3
                text-gray-700 leading-tightfocus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="numero"
              className="w-full sm:w-[25%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                type="number"
                name="numero"
                id="numero"
                placeholder="Número"
                className="w-full shadow appearance-none borderrounded py-2 px-3
                text-gray-700 leading-tightfocus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="cidade"
              className="w-full sm:w-[73%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                type="text"
                name="cidade"
                id="cidade"
                placeholder="Cidade"
                className="w-full shadow appearance-none border rounded py-2 px-3
                text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
              />
            </label>
            <label
              htmlFor="estados"
              className="w-full sm:w-[25%] block text-gray-700 text-sm font-bold mb-2"
            >
              <input
                type="text"
                name="estado"
                id="estado"
                placeholder="Estado"
                className="w-full shadow appearance-none border rounded py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <h3 className="text-xl font-bold h-fit pb-6">Método de pagamento</h3>

          <form
            className="grid grid-cols-2 sm:flex md:flex-row justify-around items-center"
          >
            <label htmlFor="boleto" className="flex gap-2 items-center">
              <input
                type="radio"
                name="paymentMethod"
                id="boleto"
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />
              <FaBarcode size={ 75 } />
            </label>
            <label htmlFor="pix" className="flex gap-2 items-center">
              <input
                type="radio"
                name="paymentMethod"
                id="pix"
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />
              <img src={ Pix } alt="pix" className="w-20" />
            </label>
            <label htmlFor="visa" className="flex gap-2 items-center">
              <input
                type="radio"
                name="paymentMethod"
                id="visa"
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />
              <FaCcVisa size={ 75 } />
            </label>
            <label htmlFor="mastercard" className="flex gap-2 items-center">
              <input
                type="radio"
                name="paymentMethod"
                id="mastercard"
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />
              <FaCcMastercard size={ 75 } />
            </label>
          </form>
          <div className="flex justify-center">
            <button
              type="button"
              className="font-bold py-2 px-20 mt-12 bg-[#31C28D] text-white
            rounded-sm hover:bg-[#036B52] hover:scale-105"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
