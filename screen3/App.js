import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      locations={[0, 0.3, 0.85, 1]}>
      <Image source={require('./assets/lock.png')} />
      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.text}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <View style={styles.imageInput}>
            <Image source={require('./assets/email.png')} />
          </View>
          <TextInput style={styles.textInput} placeholder="Email" />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 60,
    width: '100%',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 200,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0 0 10px',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    height: 60,
    backgroundColor: '#C4C4C4',
    paddingLeft: 20,
  },
  imageInput: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  textInput: {
    width: '90%',
    height: '100%',
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
