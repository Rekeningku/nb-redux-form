import React, { Component } from 'react';
import {
    Picker,
    Item,
    Label,
} from 'native-base';
import {
    View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
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
                        marginLeft: 0
                    }, style]}
                    
                >
                    <Picker
                        enabled={enabled}
                        {...input}
                        mode={this.props.mode}
                        selectedValue={input.value || selectedValue}
                        textStyle={textStyle}
                        iosIcon={iosIcon}
                        onValueChange={(value) => this.onValueChange(value)}
                    >
                        {this.props.children}
                    </Picker>
                </Item>
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
