import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ShareableForm extends PureComponent {
  static propTypes = {
    shareableType: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    onComplete: PropTypes.func.isRequired
  };

  state = {
    name: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { shareableType, onComplete } = this.props;

    const submission = { ...this.state, type: shareableType };
    onComplete('5b327868cf85ff348f7775e4', { shareable: submission });
    this.setState({ name: '' });
  };

  render() {
    const { action } = this.props;
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleChange}/>
        <button type="submit">{action}</button>
      </form>
    );
  }
}