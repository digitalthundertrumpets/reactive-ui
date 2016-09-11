import React from 'react';
import { connect } from 'react-redux';
import TestComponent from '../components/TestComponent.jsx';

class TestContainer extends React.Component {
  render() {
    return <TestComponent header={this.props.state1}/>
  }
}

function mapStateToProps(state) {
  return {
    state1: state.get('state1')
  };
}

export default connect(mapStateToProps)(TestContainer);
