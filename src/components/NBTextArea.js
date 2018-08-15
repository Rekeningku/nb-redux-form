import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Input,
  Label,
  Text,
} from 'native-base';
import {
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  formMessage: {
    marginLeft: 15,
    color: '#d9534e',
  },
});

const NBTextArea = ({
  input,
  label,
  secureTextEntry,
  keyboardType,
  stackedLabel,
  meta: { touched, error },
}) => (
  <View style={styles.container}>
    <Item floatingLabel error={!!(touched && error)}>
      <Label>
        {error ? `${label} *` : label}
      </Label>
      <Input
        {...input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline
        stackedLabel={stackedLabel}
        numberOfLines={4}
      />
    </Item>
    <Text style={styles.formMessage} note>
      {touched && error ? error : ''}
    </Text>
  </View>
);

NBTextArea.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  onSubmit: PropTypes.func,
  getRef: PropTypes.func,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  meta: PropTypes.object.isRequired,
  stackedLabel: PropTypes.bool
};

NBTextArea.defaultProps = {
  label: '',
  secureTextEntry: false,
  keyboardType: 'default',
  onSubmit: null,
  getRef: null,
  disabled: false,
  autoFocus: false,
  returnKeyType: 'done',
  autoCapitalize: 'none',
};

export default NBTextArea;
