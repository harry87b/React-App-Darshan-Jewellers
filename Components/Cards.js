import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
const Cards = ({props}) => {
    const list=[
        {name:'Rings',image:"https://img.favpng.com/25/19/7/engagement-ring-diamond-jewellery-princess-cut-png-favpng-X7hCpeDXDyHAcdGc3q9bDbh0a.jpg"},
        {name:'Bracelet',image:"https://img.favpng.com/25/19/7/engagement-ring-diamond-jewellery-princess-cut-png-favpng-X7hCpeDXDyHAcdGc3q9bDbh0a.jpg"},
        {name:'Chains',image:"https://img.favpng.com/25/19/7/engagement-ring-diamond-jewellery-princess-cut-png-favpng-X7hCpeDXDyHAcdGc3q9bDbh0a.jpg"},
        {name:'Necklace',image:"https://img.favpng.com/25/19/7/engagement-ring-diamond-jewellery-princess-cut-png-favpng-X7hCpeDXDyHAcdGc3q9bDbh0a.jpg"},
        {name:'Bangles',image:"https://img.favpng.com/25/19/7/engagement-ring-diamond-jewellery-princess-cut-png-favpng-X7hCpeDXDyHAcdGc3q9bDbh0a.jpg"},
        {name:'Lockets',image:"https://img.favpng.com/25/19/7/engagement-ring-diamond-jewellery-princess-cut-png-favpng-X7hCpeDXDyHAcdGc3q9bDbh0a.jpg"},
    ]
    return (
        <View style={{flexDirection: 'row'}}>
        {list.map(item=>
        <TouchableOpacity key={item.name} style={styles.cont} onPress={()=>props.navigation.navigate('Products')}>
            <Text style={{color:'white',fontWeight:'bold',textTransform:'uppercase'}}>{item.name}</Text>
            <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius: 100}}/>
        </TouchableOpacity>
        )}
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    cont:{
        height:100,
        width:100,
        backgroundColor:'#BA904A',
        borderRadius:10,
        marginRight:10,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})
