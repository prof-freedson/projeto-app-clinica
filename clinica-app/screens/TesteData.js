import { Button, Platform, StyleSheet, Text, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function TesteData() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onChange = (event, selecionaData) => {
        const currentDate = selecionaData || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime)

        console.log(fDate + ' (' + fTime + ')')
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{text}</Text>
            <View style={{ margin: 20 }}>
                <Button title='DatePicker' onPress={() => showMode('date')} />
            </View>
            <View style={{ margin: 20 }}>
                <Button title='TimePicker' onPress={() => showMode('time')} />
            </View>

            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />)}

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    }
})