import React, { Component } from 'react';
import { checkStatus, parseJSON } from './utils';

class OnEvent extends Component {
  state = {
    loading: false,
    data: null
  }

  render() {
    const data = JSON.stringify(this.state.data, null, 4);
    return (
      <div>
        <button onClick={this.fetchUser}>Fetch User</button>
        <pre>
          {this.state.loading
            ? 'Fetching user...'
            : data
          }
        </pre>
      </div>
    );
  }

  fetchUser = () => {
    const handleUserError = (error) => {
      console.error('Request failed', error);
    }
    const handleUserSuccess = (data) => {
      this.setState({
        data,
        loading: false,
      });
    }

    this.setState({
      loading: true
    });
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(checkStatus)
      .then(parseJSON)
      .then(handleUserSuccess)
      .catch(handleUserError);
  }
}

export default OnEvent;
