import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,KeyboardAvoidingView,ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase'
import db from '../config'

export default class Writeastory extends React.Component {
  constructor(){
    super();
    this.state={
      author:'',
      title:'',
      content:'',
    }
  }
  saveStory=(showToasty)=>{

    
  //  showToasty=showToast
    db.collection("SaveStory").add({
     

      'author':this.state.author,
      'story':this.state.content,
      'title':this.state.title
    })
    this.setState({
      title:'',
      author:'',
      content:''
    })
  }
    render(){
      return(
        <KeyboardAvoidingView style={styles.container}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:-20 }}>
         
         <View style={{marginTop:-270,height:100}}>
         <Header
         leftComponent={{ icon: 'menu', color: '#fff' }}
         centerComponent={{ text: 'STORY HUB', style: { color: '#fff' } }}
         rightComponent={{ icon: 'home', color: '#fff' }}
       />
         </View>
         
      
         <View>
           
           <TextInput 
             style={styles.inputBox}
             placeholder="Story title"
             onChangeText={(text)=>{
               this.setState({
                 title:text
               })
             }}
             value={this.state.title}
             />
           
         
         </View>
        <View>
        <TextInput 
             style={styles.inputBox2}
             placeholder="Author"
             onChangeText={(text)=>{
               this.setState({
                 author:text
               })
             }}
             value={this.state.author}
             
             /> 
             
        </View>
            <View>
            
             <TextInput 
             style={styles.inputBox3}
             placeholder="Your Story"
             multiline={true}
             onChangeText={(text)=>{
               this.setState({
                 content:text
               })
             }}
             value={this.state.content}
             /> 
            </View>
            <TouchableOpacity style={{alignSelf:"center"}} onPress={()=>{
              this.saveStory()
              
                ToastAndroid.show("Story successfully submitted!", ToastAndroid.SHORT);
              
            }}>
              <Text>Submit</Text>
            </TouchableOpacity>
            
       </View>
        </KeyboardAvoidingView>
        
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
     
      fontSize: 20,
      
      
      alignSelf:'center',
      
     

    },
    inputBox2:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      color:"lightgreen",
      
      
      alignSelf:'center',
      

    },
    inputBox3:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      color:"red",
      
      
      alignSelf:'center',
      

    },
  });
    

  
  