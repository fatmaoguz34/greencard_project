import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  CheckBox,
} from 'react-native';



import Logo from './../svg/logo.svg';
import Password from './../svg/lock.svg';
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
        
    CheckBoxTest(){
        this.setState({
            check:!this.state.check

        })
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

               <View style={{flexDirection:'row', alignSelf:'flex-start' }}>
                    <Text style={{fontSize:25, fontFamily:'RBNo2.1a-W00-Medium' }}>Devam etmek için lütfen </Text>
                <View style={{borderBottomWidth:3, borderBottomColor:'#FFCC33'}}>
                    <Text style={{fontSize:25, fontFamily:'RBNo2.1a-W00-Medium' }}>giriş yapın.</Text>
                </View>
                </View>

                <Text style={{fontSize:18, color:'#6C6C6C', alignSelf:'flex-start', alignItems:'center' ,fontFamily:'futuran_0', fontFamily:'futuran_0', fontSize:18, marginTop:HEIGHT/30 }}>E-mail:</Text>
                <View style={styles.SectionStyle}>
                <TextInput
                    style={{flex:1, fontFamily:'futuran_0', fontSize:18, }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    keyboardType="email-address" 
                />
                <Email style={{width:20, height:20,}}/>
                </View>

                <Text style={{fontSize:18, color:'#6C6C6C', alignSelf:'flex-start', alignItems:'center' ,fontFamily:'futuran_0', fontFamily:'futuran_0', fontSize:18, marginTop:HEIGHT/30 }}>Şifre:</Text>
                <View style={styles.SectionStyle}>
                <TextInput
                    style={{flex:1, fontFamily:'futuran_0', fontSize:18, }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    
                />
                <Password style={{width:20, height:20,}}/>
                </View>

                

                
                <View style={{flexDirection:'row', alignItems:'center',  alignSelf:'flex-start',  marginTop:HEIGHT/100,}}>
                <CheckBox value={this.state.check} onChange={() => this.CheckBoxTest()} style={{opacity:0.3, }} />
                <Text style={{color:'#C3C3C3', fontFamily:'futuran_0', fontSize:15}}>Beni hatırla</Text>
    
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ForgotPassword')} style={{marginLeft:HEIGHT/8}}  >
                    <Text style={{color:'#C3C3C3', fontFamily:'futuran_0' ,fontSize:15}}> Şifremi unuttum </Text>
                </TouchableOpacity>   
                </View>

                <TouchableOpacity style={{borderWidth:0.1, borderRadius:20, backgroundColor:'#FFCC33',  width:WIDTH/2, padding:HEIGHT/55, alignSelf:'center', marginTop:HEIGHT/20 }}>
                    <Text style={{textAlign:'center', fontSize:18,color:'#191919', fontFamily:'futurah_0'}}>Giriş Yap</Text>
                </TouchableOpacity>
                    
                  
                  
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}  style={{ alignSelf:'center', padding:10, marginTop:HEIGHT/45 }}>
                    <Text style={{textAlign:'center', fontSize:18, fontFamily:'futuran_0' }}>Kayıt Ol</Text>
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
            alignSelf:'center'
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
