import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'

export default function LoadingScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>RideSync</Header>
      <Paragraph> Loading... </Paragraph>
      
    </Background>
  )
}
