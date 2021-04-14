import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() { //чтобы функция стала доступна извне, её нужно экспортировать
    return (<View style={styles.container}>
        <Text style={styles.text}>Получение погоды...</Text>
        </View>)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "flex-end",
            paddingHorizontal: 30,
            paddingVertical: 100,
            backgroundColor: "#FC0"
        },
        text: {
            color: "#2c2c2c",
            fontSize: 30
        }
    })