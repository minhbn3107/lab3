import { Text, View, Button,  } from 'react-native';


export default function App() {
  return (
    <View style={{display: 'flex', flex: 1, backgroundColor: "#239ED0"}}>
      <View style={{flex: 2, display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <View style={{width: "100px", height: "100px", borderRadius: "50%", border: "8px solid black"}}></View>
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: "25px", fontWeight: "700", textAlign: "center"}}>Grow</Text>
        <Text style={{fontSize: "25px", fontWeight: "700", textAlign: "center", margin: "-10px"}}> Your Business</Text>
      </View>
      <View style={{flex: 1, fontSize: "15px", fontWeight: "700", textAlign: "center"}}>
        We will help you grow your bussiness using online server
      </View>
      <View style={{flex: 1, textColor: "black",
      flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "15px",
      fontWeight: "700"}}>
        <View style={{backgroundColor: "yellow", width: "100px", height: "35px", borderRadius: "10px", justifyContent: "center", alignItems: "center"}}>LOGIN</View>
        <View style={{backgroundColor: "yellow", width: "100px", height: "35px", borderRadius: "10px", justifyContent: "center", alignItems: "center"}}>SIGN UP</View>
      </View>
    </View>
  );
}
