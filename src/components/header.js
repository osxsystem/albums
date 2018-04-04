import React, { Component } from 'react';
import { Text, View } from "react-native";

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#c2c2c2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.4
    },
    textStyle: {
        fontSize: 24
    }
};

export default Header;
