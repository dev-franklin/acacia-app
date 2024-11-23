import {Image ,View , StyleSheet, ScrollView, Text, ImageBackground, TextInput, TouchableOpacity, Linking} from "react-native";
import { Link } from 'expo-router';
import { Inter_300Light, Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold, useFonts } from "@expo-google-fonts/inter"
import { DrawerToggleButton } from "@react-navigation/drawer";




export default function Index(){
    const [fontsLoaded] = useFonts({
      Inter_600SemiBold,
      Inter_300Light,
      Inter_800ExtraBold,
      Inter_400Regular,
      
  

    });

   if(!fontsLoaded){
    return null;
   }
  
   const openWhatsApp = () => {
    const phoneNumber = '5592993519434';
    const message = 'Olá, gostaria de saber mais sobre os cursos.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch((err) => console.error('Erro ao tentar abrir o WhatsApp: ', err));
  };

    return (

    <ScrollView style={styles.container}>
        <View>
          <View>
                <ImageBackground style={styles.box} source={require('../imagens/back.jpg')}>
                     <View style={styles.header}>
                          <Image style={styles.logo} source={require('../imagens/acacia.png')}></Image>
                          <View style={styles.drawer}>
                          <DrawerToggleButton tintColor="white"/>
                          </View>
                     </View>
                     <View  style={styles.banner}>
                      <Text style={styles.banner1}>Design e Photoshop</Text>
                      <Text  style={styles.banner2}>Ganhe 40% de desconto</Text>
                      <Text  style={styles.banner3}>na sua matricula</Text>
                      <Link style={styles.banner4} href={'./cursos'}>Confira agora</Link>
                     </View>
                </ImageBackground>
          </View>

            
            <View style={styles.box3}>

              <View style={styles.lista}>

                 <Text style={styles.categorias}>Em Destaque</Text>

                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                  <View style={styles.listacursos}>
                    <Image source={require('../imagens/img3.jpg')} style={styles.image}/>
                       <Text style={styles.cursos}>Informática</Text>
                       <Text style={styles.duracao}>110 horas</Text>
                  </View>
                  <View style={styles.listacursos}>
                    <Image source={require('../imagens/img4.jpg')} style={styles.image} />
                       <Text style={styles.cursos}>Manutenção</Text>
                       <Text style={styles.duracao}>120 horas</Text>
                  </View>
                  <View style={styles.listacursos}>
                    <Image source={require('../imagens/img6.jpg')} style={styles.image} />
                       <Text style={styles.cursos}>Programação</Text>
                       <Text style={styles.duracao}>102 horas</Text>
                  </View>
                  <View style={styles.listacursos}>
                    <Image source={require('../imagens/design.jpg')} style={styles.image} />
                    <Text style={styles.cursos}>Design</Text>
                    <Text style={styles.duracao}>143 horas</Text>
                  </View>
                  <View style={styles.listacursos}>
                    <Image source={require('../imagens/formacao.jpg')} style={styles.image} />
                    <Text style={styles.cursos}>Inglês</Text>
                    <Text style={styles.duracao}>122 horas</Text>
                  </View>

                 </ScrollView>
            
             </View>

            </View>

            <View style={styles.box4}>

            <Text style={styles.titulotutor}>Tutores</Text>
                
                <View style={styles.tutores}>
                         <View style={styles.descricao}>
                         
                         <Image source={require('../imagens/jonan.webp')} style={styles.tutor} />
                         <Text style={styles.nometutor} >Alfredro</Text>
                         <Text style={styles.materia} >Inglês</Text>
                         
                         </View>
                         
                         <View style={styles.descricao}>
                            
                         <Image source={require('../imagens/jessica.webp')} style={styles.tutor} />
                         <Text style={styles.nometutor} >Jessica</Text>
                         <Text style={styles.materia} >Gestão</Text>
                         </View>
                         
                         <View style={styles.descricao}>
                         
                         <Image source={require('../imagens/alffredo.webp')} style={styles.tutor} />
                         <Text style={styles.nometutor}>Jonathan</Text>
                         <Text style={styles.materia} >Informática</Text>
                         </View>
                         
                         
                </View>
            </View>

            <Text style={styles.titulorecomendacoes}>Cursos Recomendados</Text>
            
            <View style={styles.box5}>
                   <View style={styles.recomendacoes}>
                         <Image  style={styles.imagerecomendacoes} source={require('../imagens/curso4.jpg')}></Image>
                         <Link style={styles.detalhes}href={'../cursos'}>Mais Detalhes</Link>
                         <Text style={styles.textobox5}>Edição com Ilustrator e Photoshop</Text>
                     
                           <View style={styles.star}>
                                <Text style={styles.textostar}>Duração : 8 meses</Text>
                                 
                                 <View style={styles.pontuacao}>
                                        <Image style={styles.imgstar} source={require('../imagens/estrela.png')}></Image>
                                        <Text>5,0</Text>
                                 </View>
                           </View>
               </View>


                      <View style={styles.recomendacoes}>
                            <Image  style={styles.imagerecomendacoes} source={require('../imagens/curso2.jpg')}></Image>
                            <Link style={styles.detalhes}href={'./cursos'}>Mais Detalhes</Link>
                            <Text style={styles.textobox5}>Inglês Intermediário e Avançado</Text>
                             
                             <View style={styles.star}>
                                      <Text style={styles.textostar}>Duração : 12 meses</Text>
                                 
                                  <View style={styles.pontuacao}>
                                          <Image style={styles.imgstar} source={require('../imagens/estrela.png')}></Image>
                                          <Text>5,0</Text>
                                 </View>
                           </View>


               </View>


               <View style={styles.recomendacoes}>

                         <Image  style={styles.imagerecomendacoes} source={require('../imagens/manutencao.jpg')}></Image>
                         <Link style={styles.detalhes}href={'./cursos'}>Mais Detalhes</Link>
                         <Text style={styles.textobox5}>Manutenção de Computadores</Text>
                         
                         <View style={styles.star}>
                                      <Text style={styles.textostar}>Duração : 6 meses</Text>
                                 
                                   <View style={styles.pontuacao}>
                                        <Image style={styles.imgstar} source={require('../imagens/estrela.png')}></Image>
                                        <Text>5,0</Text>
                                 </View>
                           </View>
               </View>
            </View>
            
            
            <View style={styles.lista2}>

                 <Text style={styles.categorias}>Habilidades</Text>

                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                  <View>
                    <Image source={require('../imagens/working.jpg')} style={styles.image2}/>
                       <Text style={styles.cursos2}>Trabalho em grupo</Text>
                       
                  </View>
                  <View>
                    <Image source={require('../imagens/laptop.jpg')} style={styles.image2} />
                       <Text style={styles.cursos2}>Planejamento Profissional</Text>
                       
                  </View>
                  <View>
                    <Image source={require('../imagens/multi.jpg')} style={styles.image2} />
                       <Text style={styles.cursos2}>Network</Text>
                       
                  </View>
                  <View>
                    <Image source={require('../imagens/plan.jpg')} style={styles.image2} />
                    <Text style={styles.cursos2}>Desenvolvimento Acadêmico</Text>
                    
                  </View>
                  <View>
                    <Image source={require('../imagens/keyboard.jpg')} style={styles.image2} />
                    <Text style={styles.cursos2}>Conversação bílingue</Text>
                    
                  </View>

                 </ScrollView>
            
             </View>

             <View style={styles.box7}>
                 <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
                 <Text style={styles.buttonText}>Quero me Inscrever</Text>
                </TouchableOpacity>
             </View>
  
        </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    
    img:{
     height:400,  
    },

    texto:{
      color:'black',
    },

    box:{
     width:'100%',
     height:400,

     
    },
    drawer:{
    width: 80,
    height: 80,
    transform: [{ scale: 1.5 }],
    marginTop: 50,



    },

    header:{
     width: '100%',
     height:80,
     marginTop:20, 
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
      

    },
    logo:{
    
    width:120,
    height:120,
    margin:10,
     
    
    },

    categorias:{
     fontSize:20,
     fontFamily:'Inter_800ExtraBold',
     alignSelf:'flex-start',
     margin:7,
     marginBottom:30,
    
    },

    tutores:{
      width:'100%',
      height:300,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop: -30,
      
    },

    tutor:{
     width:80,
     height:80,
     borderRadius:50, 
     flexDirection:'row',
     margin: 10,
      
    },

    titulotutor:{
     fontSize:20,
     fontFamily:'Inter_800ExtraBold',
     margin: 10,
     marginTop:20,
    },

    nometutor:{
    
    fontFamily:'Inter_800ExtraBold',


    },

    descricao:{
    flexDirection:'column',
    margin:10,
    alignItems:'center',
   

    },


    lista: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        
    },

    lista2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        marginTop:60,
    },
    
    image: {
        width: 220,
        height: 250, 
        marginRight: 20, 
        borderRadius: 10,
        

    },

    image2: {
        width: 350,
        height: 250, 
        marginRight: 20, 
        borderRadius: 10,
    
    },

    banner:{
      width:400,
      height:120,
      marginTop:150,
      marginLeft:15,
      
    },

    banner1:{
      color:'white',
      fontSize:17,
      fontFamily:'Inter_400Regular',
    },
    banner2:{
      color:'white',
      fontSize:30,
      fontFamily:'Inter_600SemiBold',
    },
    banner3:{
      color:'white',
      fontSize:32,
      fontFamily:'Inter_600SemiBold',
    },
    banner4:{
    
    fontSize:20,
    color:'#73c883',
    fontFamily:'Inter_800ExtraBold'

    },
    cursos:{
    
      position: 'absolute',
      color: 'white',
      fontSize: 20,
      fontFamily:'Inter_800ExtraBold',
      marginTop:180,
      marginLeft:15,

    
    },
    cursos2:{
    
      color: '#191919',
      fontSize: 22,
      fontFamily:'Inter_400Regular',
      padding:10,
      

    
    },
    duracao:{
      position: 'absolute',
      color: 'white',
      fontSize: 15,
      marginTop:210,
      marginLeft:15,
      fontFamily:'Inter_600SemiBold',
    
    
    },
    
    box3:{
     width:'100%',
     height:350,
     
    },
    box4:{
     width:'100%',
     height:300,
     
    },
    recomendacoes:{

     width:320,
     height:200,
     margin:30,
     borderRadius:10,
     alignItems:'center',
     
     
     
    },
    titulorecomendacoes:{
  
    fontSize:20,
    fontFamily:'Inter_800ExtraBold',
    margin: 5
    
    },
    imagerecomendacoes:{
    
      width:370,
      height:220,
      borderRadius:10,
      alignItems:'center',

    },
    box5:{
    
    gap:90,
    height:1000,
    alignItems:'center',

    },
    textobox5:{

    fontFamily:'Inter_600SemiBold',
    fontSize:18,
    marginTop:5,
    width:380,
    left:25,
    
    
    },
    star:{
    width:'100%',
    height:20,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',

    
    },

    textostar:{
      fontFamily:'Inter_400Regular',
      
    },
    pontuacao:{
    flexDirection:'row',
    gap:7,
    alignItems: 'center',


    },
    imgstar:{
    width:15,
    height:15,


    },

    box6:{
    width:'100%',
    height:100,
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
     
    },
    icone:{

    width:50,
    height:50,
    
  
     
    },
  detalhes:{
    
  width:96,
  height:30,
  position: 'absolute',
  backgroundColor:'#68d14f',
  borderRadius:20,
  padding:5,
  color: 'white',
  alignSelf:'flex-start',
  marginTop:170,
  fontSize:10,
  fontFamily:'Inter_600SemiBold',
  
  
    },
  box7: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginBottom: 30,
  },
  button: {
      backgroundColor: '#25D366',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
      alignItems: 'center',
      width:300,
  },
  buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
  },

   
}
);