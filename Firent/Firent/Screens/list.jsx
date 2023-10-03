import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import { FIREBASE_AUTH } from '../FireBase'

const list = ({navigation})=> {
   
    return (
      <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Button onPress={() =>navigation.navigate('details')} title="Open Details"/>
        <Button onPress={() =>FIREBASE_AUTH.signOut()} title="Logout"/>
      </View>
    )
  
}

export default list