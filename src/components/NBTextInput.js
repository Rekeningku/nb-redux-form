import React from 'react';
import {
  Item,
  Input,
  Label,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  formMessage: {
    marginLeft: 15,
    color: '#d9534e',
  },
});

const NBTextInput = ({
  input,
  label,
  secureTextEntry,
  keyboardType,
  onSubmit,
  getRef,
  disabled,
  autoFocus,
  returnKeyType,
  autoCapitalize,
  meta: { touched, error },
}) => (
  <View style={styles.container}>
    <Item floatingLabel error={!!(touched && error)}>
      <Label>
        {error ? `${label} *` : label}
      </Label>
      <Input
        {...input}
        value={input.value.toString()}
        disabled={disabled || false}
        getRef={c => (typeof (getRef) === 'function' ? getRef(c) : null)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmit}
        onChangeText={input.onChange}
        autoFocus={autoFocus}
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalize}
        style={disabled ? { color: 'gray' } : null}
      />
    </Item>
    <Text style={styles.formMessage} note>
      {touched && error ? error : ''}
    </Text>
  </View>
);

NBTextInput.propTypes = {
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
};

NBTextInput.defaultProps = {
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

export default NBTextInput;
