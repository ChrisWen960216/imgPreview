import React, { Component } from 'react';
import connect from 'react-redux';

class SiderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<h1>This is SiderBar</h1>);
  }
}

function mapStateToProps(state) { }
function mapDispatchToProps(dispatch, ownProps) {

}

export default connect(mapStateToProps, mapDispatchToProps)(SiderBar);
