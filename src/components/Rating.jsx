import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      rating: '',
      comment: '',
    };
  }

handleClick = () => {
  const { email, rating, comment } = this.state;
  const { addReview } = this.props;
  addReview({ email, rating, comment });
  this.setState({
    email: '',
    rating: '',
    comment: '',
  });
}

  handleChange = ({ target }) => {
    const valor = (target.name === 'rating') ? target.id : target.value;
    const { name } = target;

    this.setState({
      [name]: valor,
    });
  }

  render() {
    const { email, comment } = this.state;

    return (
      <form className="flex flex-col justify-center items-center bg-white p-6">
        <h4 className="text-lg font-bold pb-6">Avaliações</h4>
        <div className="px-4 flex flex-col gap-4 w-2/6 min-w-fit">
          <div className="flex justify-between items-center">
            <label htmlFor="emailField" className="w-3/4 flex">
              <input
                name="email"
                data-testid="product-detail-email"
                type="email"
                value={ email }
                onChange={ this.handleChange }
                placeholder="Email"
                className="p-1 border border-gray-500
                focus:border-gray-600 w-full"
              />
            </label>
            <div className="w-1/5 flex form-check justify-between gap-1">
              <input
                id="1"
                name="rating"
                data-testid="1-rating"
                type="radio"
                onChange={ this.handleChange }
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />

              <input
                name="rating"
                id="2"
                data-testid="2-rating"
                type="radio"
                value="2"
                onChange={ this.handleChange }
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />

              <input
                onChange={ this.handleChange }
                name="rating"
                id="3"
                data-testid="3-rating"
                type="radio"
                value="3"
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />

              <input
                onChange={ this.handleChange }
                id="4"
                name="rating"
                data-testid="4-rating"
                type="radio"
                value="4"
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />

              <input
                onChange={ this.handleChange }
                name="rating"
                id="5"
                data-testid="5-rating"
                type="radio"
                value="5"
                className="appearance-none rounded-full h-4 w-4
                border border-gray-500 checked:bg-[#31C28D]
                 checked:border-[#31C28D] focus:outline-none transition
                 duration-200 cursor-pointer"
              />
            </div>

          </div>

          <label htmlFor="commentField">
            <textarea
              name="comment"
              value={ comment }
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
              rows="5"
              cols="33"
              onChange={ this.handleChange }
              className="p-1 border border-gray-500 focus:border-gray-600 w-full"
            />
          </label>
        </div>

        <button
          onClick={ this.handleClick }
          type="button"
          data-testid="submit-review-btn"
          className="mt-2 px-12 font-bold py-2 mx-auto
          bottom-4 bg-[#31C28D] text-white
          rounded-sm hover:bg-[#036B52] hover:scale-105"
        >
          Avaliar
        </button>

      </form>
    );
  }
}

Rating.propTypes = {
  addReview: PropTypes.func.isRequired,
};

export default Rating;
