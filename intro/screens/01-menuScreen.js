import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './02-contadorScreen';
import BotonesScreen from './03-botonesScreen';
import TextImputScreen from './04-textImputScreen';
import ImageBackgroundScreen  from './05-imageBackgroundScreen';
import ScrollViewScreen from './06-scrollVerticalViewScreen'; 
import ScrollHorizontalViewScreen from './06-scrollHorizontalViewScreen';
import ActivityIndicatorScreen from './07-activityIndicatorScreen'
import ListsScreen from './08-listsScreen';
import ModalScreen from './09-modalScreen';
import BottomSheetScreen from './10-bottomSheetScreen';
import Repaso1Screen from './11-repaso1Screen';
import SwitchButton from './03-switch';



export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'textImput':
            return <TextImputScreen/>;
        case 'imageBackground':
            return <ImageBackgroundScreen/>;
        case 'scrollView':
            return <ScrollVerticalViewScreen/>;
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>;
        case 'lists':
            return <ListsScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottomSheet':
            return <BottomSheetScreen/>
        case 'repaso1':
            return <Repaso1Screen/>
        case 'scrollHorizotnalView':
            return <ScrollHorizontalViewScreen/>
        case 'switch':
            return <SwitchButton/>
        case 'menu':

            default:
                  return (
                        <View>
                            <Text>Menu de prácticas</Text>
                            <Button onPress={()=>setScreen('contador')} title='Pract: Contador'/>
                            <Button onPress={()=>setScreen('botones')} title='Pract: Botones'/>
                            <Button onPress={()=>setScreen('textImput')} title='Pract: Text Imput'/>
                            <Button onPress={()=>setScreen('imageBackground')} title='Pract: Image Background'/>
                            <Button onPress={()=>setScreen('scrollView')} title='Pract: Scroll View'/>
                            <Button onPress={()=>setScreen('scrollHorizotnalView')} title='Pract: Scroll Horizontal View'/>
                            <Button onPress={()=>setScreen('activityIndicator')} title='Pract: Activity Indicator'/>
                            <Button onPress={()=>setScreen('lists')} title='Pract: Lists'/>
                            <Button onPress={()=>setScreen('modal')} title='Pract: Modal'/>
                            <Button onPress={()=>setScreen('bottomSheet')} title='Pract: Bottom Sheet'/>
                            <Button onPress={()=>setScreen('repaso1')} title='Repaso1'/>
                        </View>
                        )
    }
  
  
}

const styles = StyleSheet.create({});