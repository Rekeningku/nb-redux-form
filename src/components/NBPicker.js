import React, { Component } from 'react';
import {
    Picker,
    Item,
    Label,
    Text
} from 'native-base';
import {
    View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import store from '../../../../app/store';
import { change } from 'redux-form';

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
    formMessage: {
        marginLeft: 0,
        color: '#d9534e',
        fontSize: 12
      },
  });

let NBPicker = class NBPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: this.props.selectedValue
        }
    }

    onValueChange(value) {
        if(this.props.resetOnChange){
            store.dispatch(change('accountVerification', 'noIdentitas', ''))
        }
        this.setState({
            selected: value
        })

        this.props.input.onChange(value)
    }

    render() {
        const { 
            input, 
            label,
            textStyle, 
            style, 
            iosIcon, 
            selectedValue,
            enabled,
            regular,
            noBorder,
            placeholder,
            meta: { touched, error },
        } = this.props
        return (
            <View style={[styles.container, {style}]}>
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
                {label ? label : null}
                </Label>
                <Item
                    regular={regular}
                    style={[{
                        backgroundColor : regular ? ('#f8fbfc'): !enabled ? ('#f0f0f0'):('#fff'),
                        marginLeft: 0,
                        // borderColor: '#D0DCF1', 
                        borderColor: touched && error ? '#d9534e' : noBorder ? 'transparent':'#D0DCF1'
                    }, style]}
                    
                >
                    <Picker
                        enabled={enabled}
                        {...input}
                        mode={this.props.mode}
                        selectedValue={input.value ? input.value : selectedValue}
                        textStyle={textStyle}
                        iosIcon={iosIcon}
                        placeholder={placeholder}
                        onValueChange={(value) => this.onValueChange(value)}
                    >
                        {this.props.children}
                    </Picker>
                </Item>
                <Text style={styles.formMessage} note>
                   {touched && error ? error : ''}
                </Text>
            </View>
        );
    }
}

NBPicker.Item = class Item extends Component {
    render() {
        return (
            <Picker.Item label={this.props.label} value={this.props.value} />
        )
    }
}

NBPicker.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    selectedValue: PropTypes.string
};

NBPicker.defaultProps = {
    label: '',
    mode: 'dropdown'
};

export default NBPicker