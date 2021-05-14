import React from 'react';
import { Text, View,FlatList,TouchableOpacity,StyleSheet } from 'react-native';
import {SearchBar} from 'react-native-elements'

export default class Searchscreen extends React.Component {
  constructor(){
    super()
    this.state={
      lastVisibleTransaction: null,
      allTransactions: [],
      search:''
    }
    
  }
  fetchMoreTransactions = async ()=>{
    var text = this.state.search.toUpperCase()
    var enteredText = text.split("")

    
    if (enteredText[0].toUpperCase() ==='S'){
    const query = await db.collection("SaveStory").where('story','==',text).startAfter(this.state.lastVisibleTransaction).limit(10).get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions: [...this.state.allTransactions, doc.data()],
        lastVisibleTransaction: doc
      })
    
    })
    }
    }
    searchTransactions= async(text) =>{
      var enteredText = text.split("")  
      if (enteredText[0].toUpperCase() ==='S'){
        const story =  await db.collection("story").where('story','==',text).get()
        transaction.docs.map((doc)=>{
          this.setState({
            allTransactions:[...this.state.allTransactions,doc.data()],
            lastVisibleTransaction: doc
          })
        })
      }
      
    }

    
    componentDidMount = async ()=>{
      const query = await db.collection("transactions").limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions: [],
          lastVisibleTransaction: doc
        })
      })
    }
    
    render() {
      return (
        <View>
          <View>
          <SearchBar
        placeholder="Type Here..."
        onChangeText={(text)=>{this.setState({search:text})}}
        value={this.state.search}
      />
      <TouchableOpacity
            style = {styles.searchButton}
            onPress={()=>{this.searchTransactions(this.state.search)}}
          ></TouchableOpacity>
          </View>
           
      <FlatList
          data={this.state.allTransactions}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>{"Title " + item.title}</Text>
              <Text>{"Story: " + item.story}</Text>
              <Text>{"Author: " + item.author}</Text>
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
        /> 
        </View>
     
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })