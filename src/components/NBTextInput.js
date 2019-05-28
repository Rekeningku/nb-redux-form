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
    marginLeft: 0,
    color: '#d9534e',
    fontSize: 12
  },
  labelHelper: {
    color: "#575757"
  }
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
  regular,
  noBorder,
  fixedLabel,
  inlineLabel,
  floatingLabel,
  stackedLabel,
  style,
  prefix,
  placeholder,
  maxLength,
  leftComponents,
  rightComponents,
  meta: { touched, error },
}) => (
    <View style={styles.container}>
      {/* <Text style={styles.labelHelper}>{prefix && (label)}</Text> */}
      {regular && (
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
      )}
      <Item
        style={[
          {
            backgroundColor: disabled ?
              regular ? ('#e9ecef') : ('#e9ecef')
              : regular ? ('#f8fbfc') : ('#fff'),

            // borderColor: '#D0DCF1', 
            borderRadius: 3,
            marginLeft: 0,
            borderColor: touched && error ? '#d9534e' : noBorder ? 'transparent' : '#D0DCF1'
          }, style
        ]}
        placeholderLabel={true}
        regular={regular}
        noBorder={noBorder}
        fixedLabel={fixedLabel}
        inlineLabel={inlineLabel}
        floatingLabel={floatingLabel}
        stackedLabel={stackedLabel}
        disabled
        error={!!(touched && error)}>
        {leftComponents}
        <Label style={[
          prefix &&
          { paddingBottom: 3 },
        ]
        }>
          {
            !regular ?
              prefix ?
                prefix
                : label ?
                  error ?
                    `${label}`
                    : label
                  : null
              : null
          }
        </Label>
        <Input placeholderTextColor='#aaa' style={{ paddingLeft: 0, marginLeft: 0, }}
          {...input}
          placeholderTextColor='#aaa'
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
          placeholder={placeholder}
          maxLength={maxLength}
          style={
            disabled ? { color: 'grey', style } : style
          }
        />
        {rightComponents}
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
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  maxLength: PropTypes.number
};

NBTextInput.defaultProps = {
  label: null,
  secureTextEntry: false,
  keyboardType: 'default',
  onSubmit: null,
  getRef: null,
  disabled: false,
  autoFocus: false,
  returnKeyType: 'done',
  autoCapitalize: 'none',
  prefix: ''
};

export default NBTextInput;