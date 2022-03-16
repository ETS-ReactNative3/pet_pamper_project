import React from 'react';
import { StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputs = () => {
    const [text, setText] = React.useState('');

  return (
      <View style={styles.signin_form}>
        <TextInput
            style= {styles.email_input}
            mode="outlined"
            label="Email"
            placeholder="Enter Email"
        />

        <TextInput
            style= {styles.email_input}
            label="Password"
            secureTextEntry= {true}
            right={<TextInput.Icon name="eye" />}
        />
        </View>
  );
};

const styles = StyleSheet.create({
    email_input: {
        height: 45
    },

    signin_form: {
        marginTop: 30,
        width: '90%',
        
    }
    
})


export default TextInputs;