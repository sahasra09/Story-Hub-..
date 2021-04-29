import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
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
  saveStory=()=>{
    
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
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
             <TouchableOpacity style={{alignSelf:"center"}} onPress={this.saveStory}>
               <Text>Submit</Text>
             </TouchableOpacity>
             
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      color:"red",
      
      alignSelf:'center',
      fontFamily:"Arial",

    },
    inputBox2:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      color:"red",
      marginTop:20,
      
      alignSelf:'center',
      fontFamily:"Arial",

    },
    inputBox3:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      color:"red",
      marginTop:20,
      
      alignSelf:'center',
      fontFamily:"Arial",

    },
  });
    

  
  