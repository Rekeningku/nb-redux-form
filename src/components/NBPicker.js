import React, { Component } from 'react';
import {
    Picker
} from 'native-base';
import {
    View
} from 'react-native';
import PropTypes from 'prop-types';

let NBPicker = class NBPicker extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { input } = this.props
        return (
            <View>
                <Picker
                    {...input}
                    mode={this.props.mode}
                    selectedValue={input.value.toString()}
                    onValueChange={(value) => input.onChange(value)}
                >
                    {this.props.children}
                </Picker>
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
};

NBPicker.defaultProps = {
    label: '',
    mode: 'dropdown'
};

export default NBPicker