import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../assets/Loading'
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Card, Paragraph, Title } from 'react-native-paper';
import Cards from '../../Components/Cards';
export default function WelcomeScreen(props) {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    const components = [
        { label: 'Buy Gold', image: 'bank' },
        { label: 'Sold Gold', image: 'shopping-cart' },
        { label: 'Live price', image: 'balance-scale' },
    ]
    useEffect(() => {
        firestore().collection('Bracelet').get().then((e) => {
            setData(e.docs.map(doc => doc.data()))
        })
    }, [])
    const images = []
    {
        data.map(item => {
            images.push(item.image_url)
        })
    }
    const [search, setSearch] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.topView}>
                    <View style={styles.header}>
                        <View style={styles.input}>
                            <Text>Search</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Wish')}>
                                <Icon name="heart-o" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Icon name="bell-o" size={20} color={'white'} />
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 230, marginTop: 7 }}>
                        <SliderBox
                            images={images}
                            sliderBoxHeight={230}
                            autoPlay
                            circleLoop
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            paginationBoxStyle={{
                                position: "absolute",
                                bottom: 0,
                                padding: 0,
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                            }}
                            ImageComponentStyle={{ borderRadius: 20, width: '97%' }}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: "rgba(128, 128, 128, 0.92)"
                            }}
                        />
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ width: '86%', marginTop: 40, elevation: 5, height: 60, backgroundColor: '#fff', borderRadius: 20, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                        {components.map(item =>
                            <TouchableOpacity key={item.label} style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Icon name={item.image} size={18} color={'#C28E39'} />
                                <Text style={{ color: '#000' }}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <Card style={{ width: '86%', elevation: 5, borderRadius: 10, marginTop: 20 }}>
                        <Card.Title
                            title="Gold Price"
                            left={(props) => <Avatar.Icon {...props} icon="gift" />}
                        />
                        <Card.Content>
                            <Paragraph>ggsgnsdiugbisdfguisdbngiDBiufgDfbDIfbodufhodgdofgjdshfuhdofhndojojdhnjodsbnosdfgbnsodugbosjdgbdojgbsdjofgbo</Paragraph>
                        </Card.Content>
                        <Card.Content>
                            <Paragraph>Powered By: DARSHAN</Paragraph>
                        </Card.Content>
                    </Card>
                    <View style={styles.cards}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, color: '#000' }}>Categories</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Cards props={props} />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C28E39',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    customSlide: {
        width: "100%",
        height: 200
    },
    input: {
        flex: 2,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    item: {
        backgroundColor: "#fff",
        padding: 16,
        margin: 12
    },
    title: {
        fontSize: 24,
        fontFamily: "serif",
        color: "#000",
    },
    topView: {
        flex: 0.7,
        width: '100%',
        alignItems: 'center',
    },
    bottomView:
    {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: 'space-evenly',
    },
    cards: {
        flex: 1,
        width: '86%',
        height: 200,
        marginTop: 30,
    }
})
