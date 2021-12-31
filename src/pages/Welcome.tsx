import React, { useState } from "react";
import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button';

export function Welcome(){
    const [visible, setVisible] = useState(false);
    
    function handleVisibility(){
        setVisible(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.img} />
            }

            <Text style={styles.subtitle}>                
                Não esqueça mais de regar suas {'\n'} 
                plantas. Nós cuidamos de lembrar você {'\n'}
                sempre que precisar.
            </Text>
                
            <Button title=">" />
           
        </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between'
      },
      title: {
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
          color: colors.heading,
          marginTop: 38
      },
      subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading
      },
      img: {
          width: 292,
          height: 284
      }
  });