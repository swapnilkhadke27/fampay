import React, {Component} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import Images from '../../helpers/Images'

export default class PinComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            input_1 : '',
            input_2 : '',
            input_3 : '',
            input_4 : ''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isVerify){
            this.setState({
                input_1 : '',
                input_2 : '',
                input_3 : '',
                input_4 : ''
            })
        }
    }

    checkFilled = (input, key, value, flag) => {
        if(flag ? (input || input == 0) : !input){
            this.setState({
                [key]: value
            })
        }
    }

    checkCondition = (value) => {
        this.state.input_1 === ''
        ? 
        this.checkFilled(this.state.input_1, "input_1", value) 
        : this.state.input_2 === ''
        ? 
        this.checkFilled(this.state.input_2, "input_2", value)
        : this.state.input_3 === ''
        ? 
        this.checkFilled(this.state.input_3, "input_3", value)
        : this.state.input_4 === ''
        ? 
        this.checkFilled(this.state.input_4, "input_4", value)
        : ''
    }

    checkRemoveCondition = () => {
        this.state.input_4 !== ''
        ? 
        this.checkFilled(this.state.input_4, "input_4", '', 1) 
        : this.state.input_3 !== ''
        ? 
        this.checkFilled(this.state.input_3, "input_3", '', 1)
        : this.state.input_2 !== ''
        ? 
        this.checkFilled(this.state.input_2, "input_2", '', 1)
        : this.state.input_1 !== ''
        ? 
        this.checkFilled(this.state.input_1, "input_1", '', 1)
        : ''
    }

    validate = () => {
        let condition = true
        if(this.state.input_1 === '' || this.state.input_2 === '' || this.state.input_3 === '' || this.state.input_4 === ''){
            condition = false
        } 

        if(condition){
            let val = String(this.state.input_1) + String(this.state.input_2) + String(this.state.input_3) + String(this.state.input_4)
            this.props.submit(val)
        }
    }

    renderHeader = () => {
        return(
            <View style={styles.header_container}>
                <Text style={styles.header_text}>{this.props.header}</Text>
                { this.props.welcome_text ? <Text style={styles.welcome_text}>{this.props.welcome_text}</Text> : null }
            </View>
        )
    }

    renderInputContainer = (key, val) => {
        return(
            <View style={styles.input_container}>
                <Text ref={key} style={styles.input_style} maxLength={1} >{ val }</Text>
                <View style={styles.bottom_view}></View>
            </View>
        )
    }

    renderInputPin = () => {
        return(
            <View style={{flex: 1}}>
                <Text style={styles.subheader_text}>{this.props.subheader}</Text>
                <Text style={styles.desc_text}>{this.props.description}</Text>
                <View style={styles.body_container}>
                    {this.renderInputContainer("input_1", this.state.input_1)}
                    {this.renderInputContainer("input_2", this.state.input_2)}
                    {this.renderInputContainer("input_3", this.state.input_3)}
                    {this.renderInputContainer("input_4", this.state.input_4)}
                </View>
            </View>
        )
    }

    renderPinDescription = () => {
        return(
            <View style={styles.pin_desc_container}>
                <Text style={styles.pin_desc_text}>
                    {this.props.pin_desc}
                </Text>
            </View>
        )
    }

    renderButtons = () => {
        let rows = []
        let cols = []
        let array = [1,2,3,4,5,6,7,8,9]

        array.forEach(i => {
            cols.push(
                <TouchableOpacity 
                    style={styles.cols_container_style}
                    onPress={() => {
                        this.checkCondition(i)
                    }}
                >
                    <Text style={[styles.col_style, (i == 2 || i == 5 || i == 8 ) ? styles.centerAlign : (i % 3 == 0) ? styles.rightAlign : styles.leftAlign]}>{i}</Text>
                </TouchableOpacity>
            )

            if(i % 3 == 0){
                rows.push(
                    <View style={styles.row_style}>
                        {cols}
                    </View>
                )
                cols = []
            }
        });

        cols.push(<TouchableOpacity style={styles.cols_container_style}><Text style={styles.col_style}></Text></TouchableOpacity>)
        cols.push(<TouchableOpacity style={styles.cols_container_style} onPress={() => {this.checkCondition(0)}}><Text style={[styles.col_style, styles.centerAlign]}>0</Text></TouchableOpacity>)
        cols.push(
            <TouchableOpacity 
                onPress={() => {
                    this.checkRemoveCondition()
                }}
                style={styles.cols_container_style}>
                <Image style={[styles.col_style, styles.rightAlign]} source={Images.chevron} style={styles.image_style}/>
            </TouchableOpacity>
        )
        rows.push(
            <View style={styles.row_style}>
                {cols}
            </View>
        )

        return(
            <View style={styles.numeric_container}>
                {rows}
            </View>
        )
    }

    renderSubmitButton = () => {
        return(
            <TouchableOpacity 
                onPress={() => {
                    this.validate()
                }}
                style={styles.button_container}
            >
                <Text style={styles.text_container}>{this.props.button_text}</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    {this.renderHeader()}
                    {this.renderInputPin()}
                    {this.renderPinDescription()}
                </View>
                <View style={styles.bodyContainer}>
                    {this.renderButtons()}
                    {this.renderSubmitButton()}
                </View>
            </View>
        )
    }
}