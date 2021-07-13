import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { requireNativeComponent, View, UIManager, findNodeHandle } from 'react-native';

class StreamAxiaView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <RCTStreamaxiaView
          {...this.props}
          ref={RCT_VIDEO_REF}
        />;
    };

}

const RCTStreamaxiaView = requireNativeComponent('RNStreamaxia', StreamAxiaView);
  
StreamAxiaView.name = RCT_VIDEO_REF;
module.exports = StreamAxiaView;