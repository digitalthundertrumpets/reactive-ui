import React from 'react';
import { connect } from 'react-redux';
import UserInterface from '../components/UserInterface.jsx';
import store from '../store/store';
import { generateNewScreen, updateWeightings } from '../actions/actions';

class TestContainer extends React.Component {

  likeClicked() {
    store.dispatch(updateWeightings(true));
    store.dispatch(generateNewScreen());
  }

  dislikeClicked() {
    store.dispatch(updateWeightings(false));
    store.dispatch(generateNewScreen());
  }

  render() {
    return (
      <div>
        <UserInterface
          location={this.props.location}
          colour={this.props.colour}
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
    location: state.getIn(['currentDisplay','location']),
    colour: state.getIn(['currentDisplay','colour']),
    shape: state.getIn(['currentDisplay','shape'])
  };
}

export default connect(mapStateToProps)(TestContainer);
