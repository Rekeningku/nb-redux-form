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
      input, label, meta,
      stackedLabel, floatingLabel,
      defaultDate, minimumDate, maximumDate,
      locale, timeZoneOffsetInMinutes, modalTransparent,
      animationType, androidMode, placeHolderText,
      textStyle, placeHolderTextStyle
    } = this.props;
    const { touched, error } = meta;
    return (
      <View style={styles.container}>
        <Item floatingLabel={floatingLabel} onPress={this.handlePress} error={!!(touched && error)}>
          <Label>
            {error ? `${label} *` : label}
          </Label>
          <DatePicker
            {...input}
            defaultDate={defaultDate}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            locale={locale}
            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
            modalTransparent={modalTransparent}
            animationType={animationType}
            androidMode={androidMode}
            placeHolderText={placeHolderText}
            textStyle={textStyle}
            placeHolderTextStyle={placeHolderTextStyle}
            onDateChange={input.onChange}
            floatingLabel={floatingLabel}
            stackedLabel={stackedLabel}
          />
        </Item>
        <Icon style={styles.icon} active name="calendar" />
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