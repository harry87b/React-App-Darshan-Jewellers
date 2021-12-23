import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { Caption, Card, Title } from 'react-native-paper';
import { Dimensions } from 'react-native';
export default function ItemList({ route, navigation }) {
    const collection = route.params?.collection ? route.params?.collection : 'Bangles'
    const [data, setData] = useState([])
    useEffect(() => {
        firestore().collection(collection).get().then((e) => {
            setData(e.docs.map(doc => doc.data()))
        })
    }, [collection])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: collection,
        });
    }, [navigation, collection])

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cards}>
                    {data.length != 0 ?
                        data.map(item =>
                            <View key={item.weight} style={styles.card}>
                                <Image source={{ uri: item.image_url }} style={styles.img} />
                                <View style={styles.desc}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.weight} >Weight : {item.weight}</Text>
                                </View>
                            </View>)
                        :
                        <Text>No Records Found</Text>
                    }
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cards: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: "wrap",
        paddingHorizontal: 13
    },
    card: {
        width: (Dimensions.get('window').width / 2) - 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
        padding: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000",
        textTransform: "capitalize",
    },
    desc: {

    },
    weight: {
        color: "#000",
    },

    img: {
        // resizeMode: 'contain',
        width: 180,
        height: 180,
    }

})
