import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {

  const [name, setName] = useState({
    name: '',
  });
  const [email , setEmail ] = useState({
    email: '',
  });
  const [password, setPassword] = useState({
    password: '', 
  });
  const [emessage, setEMessage] = useState();


  const validate = () => {
    setEMessage('');
    if (nameValidator(name.value) && emailValidator(email.value) && passwordValidator(password.value)) {
      setName({ ...name })
      setEmail( { ...email })
      setPassword({ ...password })
    // JSONify, feed into server that stores it in the database

      navigation.reset({
      index: 0,
      routes: [{ name: 'LoadingScreen' }],
    }) 
      return
    }
    else{
      setEMessage( "Please check Name, Email, and if Password is more than 5 characters long.");
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>

      <TextInput
        label = "Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text})}
      />
      <TextInput
        label = "Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text})}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text})}
        secureTextEntry
      />
      <Text style={styles.error}>{emessage}</Text>
      <Button
        mode="contained"
        onPress={validate}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text> Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
