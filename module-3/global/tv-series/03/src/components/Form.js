import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.formHandle = this.formHandle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  formHandle(ev) {
    ev.preventDefault();
  }

  handleSearch(ev) {
    // console.log('Valor del input', ev.target.value);
    // console.log('This', this);
    this.props.handleSearch(ev.target.value);
  }

  render() {
    return (
      <form onSubmit={this.formHandle}>
        <label
          htmlFor="search"
          className="form__label"
        >
          Introduce el nombre de la serie a buscar:
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="form__input-text"
          onKeyUp={this.handleSearch}
        />
        <input
          type="submit"
          className="form__btn"
        />
      </form>
    );
  }
}

export default Form;
