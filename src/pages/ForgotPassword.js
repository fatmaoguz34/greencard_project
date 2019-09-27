import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  
} from 'react-native';


import Logo from './../svg/logo.svg';
import Email from './../svg/e-mail-envelope.svg';
import { TextInput } from 'react-native-gesture-handler';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
export default class App extends Component  {
    constructor(props){
        super(props);
        this.state={check:false,
            email:'',
            password:'',
         }
        }
   
    static navigationOptions={
        header:null
      }
    render() {
        
        return(
            <ImageBackground source={require('./../images/background30.png')} style={{width: WIDTH, height: HEIGHT ,}}>
               
            
                <View style={styles.logo}>
                <Logo style={{fill:'#004596'}} width={WIDTH/1.7} height={HEIGHT/4} />
                </View>
               
               <View style={styles.container}>
                <View style={{flexDirection:'row', alignSelf:'flex-start'}}>
               <View style={{borderBottomWidth:3, borderBottomColor:'#FFCC33', alignItems:'center', alignSelf:'flex-start' }}>
                  <Text style={{fontSize:26, fontFamily:'RBNo2.1a-W00-Medium', }}>Şifrenizi</Text>
                  </View>
                
                    <Text style={{fontSize:26, fontFamily:'RBNo2.1a-W00-Medium' }}> mi unuttunuz? </Text>
                </View>
                
                <Text style={{fontSize:18, color:'#6C6C6C', alignSelf:'flex-start', alignItems:'center' ,fontFamily:'futuran_0', fontFamily:'futuran_0', fontSize:18, marginTop:HEIGHT/15 }}>E-mail:</Text>
                <View style={styles.SectionStyle}>
                <TextInput
                    style={{flex:1, fontFamily:'futuran_0', fontSize:18, }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    keyboardType="email-address" 
                />
                <Email style={{width:20, height:20,}}/>
                </View>

           
               
                <TouchableOpacity style={{borderWidth:0.1, borderRadius:20, backgroundColor:'#FFCC33',  width:WIDTH/2, padding:HEIGHT/55, alignSelf:'center', marginTop:HEIGHT/8 }}>
                    <Text style={{textAlign:'center', fontSize:18,color:'#191919', fontFamily:'futurah_0'}}>Parolayı Sıfırla</Text>
                </TouchableOpacity>
                    
                  
                  
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={{ alignSelf:'center', padding:10, marginTop:HEIGHT/45 }}>
                    <Text style={{textAlign:'center', fontSize:18, fontFamily:'futuran_0' }}>Vazgeç</Text>
                </TouchableOpacity>

                
               </View>
               
                </ImageBackground>
        );
    }}
    const styles=StyleSheet.create({
        logo:{
            alignItems:'center',
            height:HEIGHT/2,
            
            flex:0.5
            
        },
        container:{
            flex:1,
            alignItems:'center',
            alignSelf:'center',
            flexDirection:'column'
        },
        SectionStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-start',
        borderBottomWidth:0.5,
        borderBottomColor:'#6C6C6C',
        height: HEIGHT/17,
        width:WIDTH/1.35,
        borderRadius: 5,
        }
        
 });
