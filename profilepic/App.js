import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import {RNCamera} from 'react-native-camera'

const PendingView = () => (
  <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:30, color:"red"}}>loading ....</Text>
  </View>
)

const App = ()  => {
  const [img,setImg] = useState(null)
  const takePic = async (camera) => {
    try {
      const options = {quality: 0.9, base64:false}
      const data = await camera.takePictureAsync(options)
      setImg(data.uri)
    } catch (error) {
      console.warn(error)
    }
  }
  return (
    <>
      <View style={styles.container}>
        {img ? (
          <View style={styles.preview}>
           <Text style={styles.camtext}>here is your new profile pic</Text>
           <Image style={styles.clicked} source={{uri: img, width:"100%",height:"80%"}}/>
           <Button title="click new image" onPress={() => setImg(null)}></Button>
          </View>
        ):(
          <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title:"permission to use camera",
            message:"longer text to use camera",
            buttonPositive:"OK",
            buttonNegative:"Cancel",
          }}
          androidRecordAudioPermissionOptions={{
            title:"permission to use audio",
            message:"longer text to use audio",
            buttonPositive:"OK",
            buttonNegative:"Cancel",
          }}>
            {({camera, status}) => {
              if(status !== 'READY') return <PendingView/>
              return (
                <View style={{
                  flex:0,
                  flexDirection:"row",
                  justifyContent:"center"
                }}>
                  <TouchableOpacity style={styles.capture} onPress={() => takePic(camera)}>
                    <Text>Snap</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
          </RNCamera>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"#0A79DF"
  },
  preview:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center"
  },
  capture:{
    flex:0,
    backgroundColor:"orange",
    padding:20,
    alignSelf:"center",

  },
  camtext:{
    backgroundColor:"#3498DB",
    color:"#FFFFFF",
    width:"100%",
    textAlign:"center",
    fontSize:25
  },
  clicked:{
    width:300,
    height:300,
    borderRadius:150
  }
})

export default App;
