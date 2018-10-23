import React, { Component } from 'react';
import {
  Text,
  Label,
  Item,
  Icon,
  Input,
  DatePicker
} from 'native-base';
import {
  View,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    bottom: 12,
  },
  hiddenForm: {
    position: 'absolute',
    borderColor: 'red',
    borderWidth: 3,
    opacity: 0,
  },
});

class NBDatePicker extends Component {
  render() {
    const {
      input, label, meta, disabled, regular, style,
      defaultDate, minimumDate, maximumDate,
      locale, timeZoneOffsetInMinutes, modalTransparent,
      animationType, androidMode, placeHolderText,
      textStyle, placeHolderTextStyle, iconComponent
    } = this.props;
    const { touched, error } = meta;
    return (
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
              label ?
                error ?
                  `${label}`
                  : label
                : null
          }
        </Label>
      )}
        <Label style={{ fontSize: 13 }}>
          {!regular ? error ? `${label} *` : label:null}
        </Label>
        <Item
         regular={regular}
         onPress={this.handlePress} 
         error={!!(touched && error)}
         style={{
          backgroundColor : regular ? ('#f8fbfc'):('#fff'),
         }}
        >
          <DatePicker
            {...input}
            disabled={disabled}
            defaultDate={defaultDate}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            locale={locale}
            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
            modalTransparent={modalTransparent}
            animationType={animationType}
            androidMode={androidMode}
            placeHolderText={placeHolderText}
            textStyle={
              disabled ? { color: 'grey', style } : textStyle
            }
            placeHolderTextStyle={placeHolderTextStyle}
            onDateChange={input.onChange}
          />
        </Item>
        {iconComponent}
        <Text note>
          {touched && error ? error : ''}
        </Text>
      </View>
    );
  }
}

NBDatePicker.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired,
  stackedLabel: PropTypes.bool,
  floatingLabel: PropTypes.bool
};

NBDatePicker.defaultProps = {
  label: '',
};

export default NBDatePicker;