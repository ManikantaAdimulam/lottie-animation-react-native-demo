// components/Hello.tsx
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'
const anim = require('./jump_loader.json')
const anim2 = require('./water_glass.json')
export default class Hello extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View>
        <LottieView
          autoSize={true}
          autoPlay
          source={anim}
          style={styles.lottieView}
        />
        <LottieView
          autoSize={true}
          autoPlay
          source={anim2}
          style={styles.lottieView}
        />
      </View>
    )
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  },
  lottieView: {
    top: 20,
    height: '50%',
    width: '50%'
  }
})
