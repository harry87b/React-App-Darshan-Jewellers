import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default function ItemList({route,navigation}) {
    const collection = route.params?.collection ? route.params?.collection :'Bangles'
    const [data, setData] = useState([])
    useEffect(() => {
        firestore().collection(collection).get().then((e)=>
        {
            setData(e.docs.map(doc=>doc.data()))
        })
    }, [collection])
    // console.log(data)
    return (
        <View>
        <Text style={{fontSize:27,color:'black',alignSelf:'center',textTransform:'uppercase'}}>{collection}</Text>
        <ScrollView>
            {data.length!=0 ? 
            data.map(item=>
            <View key={item.weight}>
                <Image source={{uri:item.image_url}} style={{width:100,height:100}}/>
                <Text>{item.title}</Text>
                <Text>{item.weight}</Text>
            </View>):
            <Text>No Records Found</Text>
            }
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
