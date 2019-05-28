import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Text,
  Right,
  Left,
  Item,
} from 'native-base';
import {
  Switch,
  StyleSheet,
  View,
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

const NBSwitch = ({
  input: { value, onChange },
  label,
  disabled,
  meta: { touched, error },
}) => (
    <View style={styles.container}>
      <Item>
        <Left>
          <Label>
            {error ? `${label} *` : label}
          </Label>
        </Left>
        <Right>
          <Switch disabled={disabled} value={!!value} onValueChange={() => onChange(!value)} />
        </Right>
      </Item>
      <Text style={styles.formMessage} note>
        {touched && error ? error : ''}
      </Text>
    </View>
  );

NBSwitch.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object.isRequired,
};

NBSwitch.defaultProps = {
  label: '',
  disabled: false,
};

export default NBSwitch;
