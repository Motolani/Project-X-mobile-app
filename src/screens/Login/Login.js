import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useContext, useState}  from 'react'
import InputWithText from '../../components/InputWithText/InputWithText';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Button } from '@rneui/themed';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onSubmit = async() => {
    console.log(email, email);
  }
  
  return (
    <View style={styles.container}>
      {/* <Text>Login</Text> */}
      <InputWithText
        placeholder="Email address"
        value={email}
        setValue={setEmail}
        label="Email Address"
      />
      <InputWithText
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        label="Password"
      />
      
      <View style={styles.button}>
        <CustomButton
          text="Log in"
          onPress={onSubmit}
          type="DEFAULT"
          textColor="Blue"
        />
      </View>
      <View style={styles.SiginRegisterButtonView}>
        <Text style={styles.SigInText}> Don't have an account? </Text>
        <TouchableOpacity>
          <Button onPress={() => navigation.navigate('Register')} style={styles.SigupRegisterButtonViewTwo} size="sm" type="clear">
            Sign up
          </Button> 
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    alignItems: "center",
    // backgroundColor: "#ff0000",
  },
  button:{
    marginTop:420,
  },
  SiginRegisterButtonView:{
    flexDirection: 'row',
    marginTop: 1,
    alignContent: "center",
  },
  SigupRegisterButtonViewTwo:{
    marginTop: -8
  }
})
export default Login