import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LivePrice = ({ navigation }) => {
    const [price, setPrice] = useState(null)
    useEffect(() => {
        axios.get('https://www.metals-api.com/api/latest?access_key=yakk4a9b3j7o8y6x7934ox9rjlluv1tj2dkuq3t18phf7552nm0b70ths4o5&base=INR&symbols=XAU')
        .then((res)=>{
            let perounce=res.data.rates.XAU
            let price=parseInt(perounce)
            price=parseInt(price/31)
            price=parseInt(price+price*0.13)
            setPrice(price)
        })
        .catch(e=>console.log(e))
    }, [navigation])
    return (
        <SafeAreaView style={styles.cont}>
        <View style={{width:'90%',backgroundColor:'#fff',elevation:10,borderRadius:20,padding:10,flexDirection: 'row',alignItems: 'center',justifyContent:'space-evenly',margin:20}}>
            <Text style={{fontSize:30,color:'#000'}}>Gold Price /1g</Text>
            <Text style={{fontWeight:'bold'}}>{price}</Text>
        </View>
        <View style={{width:'90%',backgroundColor:'#fff',elevation:10,borderRadius:20,padding:10,flexDirection: 'row',alignItems: 'center',justifyContent:'space-evenly'}}>
            <Text style={{fontSize:30,color:'#000'}}>Gold Price /10g</Text>
            <Text style={{fontWeight:'bold'}}>{price*10}</Text>
        </View>
        </SafeAreaView>
    )
}

export default LivePrice

const styles = StyleSheet.create({
    cont:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C38F3A',
    }
})
