import React from 'react';
import { connect } from 'react-redux';
import UserInterface from '../components/UserInterface.jsx';
import store from '../store/store';
import { generateNewScreen } from '../actions/actions';

class TestContainer extends React.Component {

  likeClicked() {
    store.dispatch(generateNewScreen());
  }

  dislikeClicked() {
    store.dispatch(generateNewScreen());
  }

  render() {
    return (
      <div>
        <UserInterface
          location={this.props.location}
          color={this.props.color}
          shape={this.props.shape}
        />
        <button onClick={this.likeClicked}>Like</button>
        <button onClick={this.dislikeClicked}>Dislike</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.get('location'),
    color: state.get('color'),
    shape: state.get('shape')
  };
}

export default connect(mapStateToProps)(TestContainer);
