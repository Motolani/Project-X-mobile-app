import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
// import styles from '../../../style';

const InputWithText = ({value, setValue, placeholder, secureTextEntry, keyboardType, maxLength, label, editable, selectTextOnFocus }) => {
  return (
    <View>
        <Text style={styles.Label}>{label}</Text>
        <TextInput 
          value={value}
          onChangeText= {setValue}
          placeholder={placeholder}
          style={styles.customInput}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
          />
    </View>
  )
  
}
const styles = StyleSheet.create({ 
  customInput:{
    backgroundColor: "#F4F7FF",
    marginTop: 10,
    marginVertical: 5,
    width: 360,
    borderColor: '#4772E1',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 15,
    paddingLeft: 25,
    marginBottom: 25 ,
    
},
Label:{
    color: 'rgba(71, 114, 225, 1)',
    fontWeight: '400',
    marginLeft: 20,
    
}
});
export default InputWithText

