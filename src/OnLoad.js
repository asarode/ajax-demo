import React, { Component } from 'react';
import { checkStatus, parseJSON } from './utils';

class OnLoad extends Component {
  state = {
    loading: true,
    data: null
  }

  render() {
    const data = JSON.stringify(this.state.data, null, 4);
    return (
      <pre>
        {this.state.loading
          ? 'Loading...'
          : data
        }
      </pre>
    );
  }

  componentDidMount() {
    const handleUserError = (error) => {
      console.error('Request failed', error);
    }
    const handleUserSuccess = (data) => {
      this.setState({
        data,
        loading: false,
      });
    }

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(checkStatus)
      .then(parseJSON)
      .then(handleUserSuccess)
      .catch(handleUserError);
  }
}

export default OnLoad;
