import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  NBTextInput,
  NBSwitch,
  NBTextArea,
  NBDatePicker,
} from 'nb-redux-form';
import {
  Button,
  Text,
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  button: {
    marginTop: 20,
  },
});

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Field name="name" component={NBTextInput} label="Name" placeholder="Input name here." />
            <Field name="agree" component={NBSwitch} label="Agree"/>
            <Field name="description" component={NBTextArea} label="Description"/>
            <Field name="date" component={NBDatePicker} label="Date of birth" />
          </View>
          <Button full onPress={handleSubmit}>
            <Text>
              Press
            </Text>
          </Button>
        </ScrollView>
      </View>
    );
  }
}

const ContainerForm = reduxForm({
  form: 'example',
})(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContainerForm;
