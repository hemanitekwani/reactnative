
import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Button,TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

   const image = { uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7Yf7ppRdzky4meQRlP4OynyGFwOUWsBIz4f6DhxK89o7fJA8Shlaec5xIAHaiuB7r3o&usqp=CAU"}; 
   class  App extends React.Component  {
   constructor()  
     {
      super();
       this.state = {
       name:"",
       password:"",
       address:"",
       }
     }
     submit() {
       alert("sure to submit")
     }

     test() {
      this.setState({data:"heya"})
       }
     render() {
     
       return (

       <View style={styles.container}>
         <Button  color="purple" onPress={()=> {this.props.navigator.navigate('Home')}} title="home screen"/>
        
       
       <ImageBackground source={image} style={styles.image}>
      
     <Text style={styles.text}> 
            SIGN LANGUAGE         
         </Text>
     
        <TextInput placeholder={"enter your name"}
        style={styles.textBox} 
        onChangeText={(text) => {this.setState({name:text})} }
         >
           </TextInput>
           <TextInput placeholder={"enter your password"}
        style={styles.textBox} 
        secureTextEntry={true}
        onChangeText={(text) => {this.setState({password:text})} }
         ></TextInput>
           <TextInput placeholder={"enter your address"}
        style={styles.textBox} 
        onChangeText={(text) => {this.setState({address:text})} }
         ></TextInput>
         
         <Button  color="purple" onPress={()=> {this.submit()}} title="Submit"/>
          
       </ImageBackground>
     </View>
     );
       }
     }
     function profile(props) {
      return(
       <View style={styles.container}>
       <Text>profile Screen</Text>
       </View>
      )
     }
    function about(props) {
      return(
       <View style={styles.container}>
       <Text>about screen</Text>
       </View>
      )
     }
    
     const AppNavigator=createStackNavigator ({
      Home: {
       screen:App,
      },
     profile: {
     screen:profile,
     },
     about:{
     screen:about,
    },

     });
     export default createAppContainer(AppNavigator);
     
   const styles = StyleSheet.create({
     container: {
       flex: 2,
       flexDirection: 'column',
     
     },
     image: {
       flex: 1,
       resizeMode: 'cover',
       justifyContent: 'center',
       backgroundColor:'white',
      
     },
     text: {
     textAlign:"center",
       color: 'white',
       fontSize: 40,
       textAlign:'center',
       fontWeight: 'bold',
       textAlignVertical:'top',
       marginVertical: 150,
       marginHorizontal: 20,
       

     },
     textBox:{
        
      bordercolor:"skyblue",
       borderWidth:1,
       padding:2,
       marginHorizontal:16,
       marginVertical:15, 
       fontSize:15,
       color:"purple",
       alignSelf:"stretch"

     },
     
    

     
     
     


   });
 