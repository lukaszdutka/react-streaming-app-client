import React from 'react';

class GoogleAuth extends React.Component {
  state = {isSignedIn: null}

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '567276739995-p3upptnkfe8f80mqpb2sl505fgnlst1h.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return 'idk bro'
    } else if (this.state.isSignedIn) {
      return 'I am signed in!'
    } else {
      return 'I am NOT signed in!'
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;