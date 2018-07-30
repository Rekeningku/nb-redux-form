import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { connect } from 'react-redux';

import Form from './Form';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

class Screen extends Component {
  handleSubmit = (values) => {
    Alert.alert(JSON.stringify(values));
  }

  render() {
    return (
      <View style={styles.container}>
        <Form {...this.props} onSubmit={this.handleSubmit} />
      </View>
    );
  }
}

export default connect()(Screen);
