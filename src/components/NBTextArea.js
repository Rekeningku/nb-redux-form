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
  floatingLabel,
  regular,
  prefix,
  style,
  disabled,
  placeholder,
  meta: { touched, error },
}) => (
  <View style={styles.container}>
    { regular && (
        <Label
          style={{
              position: null,
              top: null,
              left: null,
              right: null,
              paddingBottom: 5,
              alignSelf: "flex-start",
              fontSize: 13,
          }}
        >
          {
            prefix ?
              prefix
              : label ?
                error ?
                  `${label}`
                  : label
                : null
          }
        </Label>
      ) }
      <Item 
        regular={regular}
        floatingLabel={floatingLabel} 
        stackedLabel={stackedLabel} 
        error={!!(touched && error)}
        disabled={disabled}
        style={{
          backgroundColor: '#f8fbfc', 
          // borderColor: '#D0DCF1', 
          marginLeft: 0
        }}
      >
      <Label>
        {
          !regular ?
          error ? `${label}` 
          : label : null
        }
      </Label>
      <Input
        {...input}
        placeholder={placeholder}
        placeholderTextColor='#aaa'
        disabled={ disabled || false }
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline
        numberOfLines={4}
        style={
          disabled ? { color: 'grey', ...style } : style
        }
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
  stackedLabel: PropTypes.bool,
  floatingLabel: PropTypes.bool
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
