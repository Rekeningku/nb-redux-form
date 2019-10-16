import React, { Component } from 'react';
import {
  Text,
  Label,
  Item,
  Icon,
  Input
} from 'native-base';
import DatePicker from 'react-native-datepicker'
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
      input, label,labelStyle, meta, disabled, regular, style,
      defaultDate, minimumDate, maximumDate,
      locale, timeZoneOffsetInMinutes, modalTransparent,
      animationType, androidMode, placeHolderText,
      textStyle, placeHolderTextStyle, iconComponent,
      disabledStyle, enabledStyle, customStyles
    } = this.props;
    const { touched, error } = meta;
    console.log('input ini', input)
    return (
      <View>
        {regular && (
          <Label
            style={[{
              position: null,
              top: null,
              left: null,
              right: null,
              paddingBottom: 5,
              alignSelf: "flex-start",
              fontSize: 13,
            },labelStyle
          ]}
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
        {/* <Label style={{ fontSize: 13 }}>
          {!regular ? error ? ${label} * : label:null}
        </Label> */}
        <Item
          regular={regular}
          onPress={this.handlePress}
          error={!!(touched && error)}
          style={{
            borderColor: disabledStyle.borderColor,
            borderRadius:3,
            backgroundColor : disabled ?
              regular ? ( disabledStyle.backgroundColor) : ( disabledStyle.backgroundColor)
              : regular ? ( enabledStyle.backgroundColor) : ('red'),
            }
          }
        >
          <DatePicker
            {...input}
            disabled={disabled}
            date={input.value}
            minDate={minimumDate}
            maxDate={maximumDate}
            format="DD-MM-YYYY"
            locale={locale}
            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
            modalTransparent={modalTransparent}
            animationType={animationType}
            androidMode={androidMode}
            placeHolderText={placeHolderText}
            confirmBtnText="Ok"
            cancelBtnText="Cancel"
            style={{width:'100%'}}
            textStyle={
              disabled ? { color: 'grey', style } : textStyle
            }
            iconComponent={null}
            placeHolderTextStyle={placeHolderTextStyle}
            onDateChange={input.onChange}
            customStyles={customStyles}
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