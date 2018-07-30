import React, { Component } from 'react';
import {
  Text,
  Label,
  Item,
  Icon,
  Input,
} from 'native-base';
import {
  View,
  StyleSheet,
  DatePickerAndroid,
  Platform,
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
  handleChange(item) {
    const { input } = this.props;
    input.onChange(item.key);
    this.handleCloseModal();
  }

  handlePress = async () => {
    if (Platform.OS === 'android') {
      try {
        const {minDate, input} = this.props;
        const {value} = input;
        const {action, year, month, day} = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
          mode: 'calendar',
          date: value === '' ? new Date() : new Date(Number(moment(value).format('YYYY')), Number(moment(value).format('MM'))-1, Number(moment(value).format('DD')))
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          // DatePickered year, month (0-11), day
        }
        if (day) {
          this.props.input.onChange(moment(new Date(year, month, day)).format('YYYY-MM-DD'));
        } else {
          this.props.input.onChange('');
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
    }
  }

  render() {
    const {
      input, label, meta,
    } = this.props;
    const { touched, error } = meta;
    return (
      <View style={styles.container}>
        <Item floatingLabel onPress={this.handlePress} error={!!(touched && error)}>
          <Label>
            {error ? `${label} *` : label}
          </Label>
          <Input disabled {...input} />
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
};

NBDatePicker.defaultProps = {
  label: '',
};

export default NBDatePicker;
