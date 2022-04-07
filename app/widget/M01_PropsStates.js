import React from 'react';
import { Text, View } from 'react-native';
import {useState} from "react";

/**
 * Classe que hereta de Component i que permet utilitzar 
 * propietats inmutables i estats
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */
export class M01_PropsStates extends React.Component {
    constructor(props) {
        super(props);
        this.state={logat:false};
    }
    canviarLog = () =>{
        if(this.state.logat){
            this.setState({logat:false})
        }
        else {
            this.setState({logat:true})
        }
    }
    render() {

        let missatge = this.state.logat?'Usuari anònim':this.props.missatge; //fem servir l'estat per a mostrar un o un altre missatge
        return (
            <View >
                <Text onPress={this.canviarLog} >{missatge}</Text>
            </View>
        );

    }
}