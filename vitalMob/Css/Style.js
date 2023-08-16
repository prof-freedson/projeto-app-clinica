
const colletion = []

const myStyle = [
    stylesPage = {
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:"center"
    },

    styleLogin = {
        flex:1,
        width:'100%',
        heigth:'100%',
        backgroundColor:'#fff',
        alignItems:"center",
        gap:2,
        
        containerHeader:{
            width:'100%',
            height:'25%',
            backgroundColor:'#fff',
            alignItems:"center",
            justifyContent:"space-between",
            backgroundColor:'blue',
            marginTop:20
        },
        SvgComponent:{
            width:'100%',
            height:'100%',
            backgroundColor:'#fff',
            padding:2
        },
        containerButtons:{
            width:'100%',
            padding:2,
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            gap:10
        },
        Buttons:{
            borderRadius:5,
            backgroundColor:"#fbae17",
            color :"black",
            fontWeight: 'bold',
            textAlignVertical: "center",
            padding:10,
            width:"30%", 
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',

        },
        // _propsButtons:{
        //     width:'50%',
        //     display:'flex',
        //     flexDirection:'row',
        //     justifyContent:'center',
        //     gap:10,      
        //     borderLeftColor:'#0071BC',
        //     borderTopColor:'#0071BC',
        //     borderRightColor:'#0071BC',
        //     borderBottomColor:'#fff',
        //     borderWidth:4,
        //     elevation:0,
        //     borderBottomLeftRadius:11,
        //     borderBottomRightRadius:11
        // },
        containerInput:{
            width:'100%',
            height:200,
            // backgroundColor:'red',
            display:'flex',
            flexDirection:'columns',
            justifyContent:'center',
            gap:10
        },

        Input:{
            width:'100%',
            // backgroundColor:'blue',
            display:'flex',
            padding:5,

        },
        

        containerFooter:{
            width:'100%',
            height:'100%',
            padding:10,
            backgroundColor:'#0071BC',
        },

        styleNavigation:{
            width:'100%',
            padding:2,
            display:'flex',
            flexDirection:'columns',
            alignItems:"center",
            gap:10,
            marginTop:10
        },
        styleNavigationButton:{
            borderRadius:5,
            textAlignVertical: "center",
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
        },
        styleNavigationText:{
            color :"#00ffff",
            fontWeight: 'bold',
            textAlignVertical: "center",
            fontSize:15,
        }
        ,
        boz:{
            fontWeight: 'bold',
            color:'#fff',
            fontSize:20,
        },
        bozzz:{
            fontWeight: 'bold',
            color:'#fff',
            fontSize:20,
        },
        bozz:{
            fontWeight: 'bold',
            color:'#ff00ff',
            fontSize:20,
        },
        config:{
            fontWeight: 'bold',
            color:'#4f6466',
            fontSize:20,
        },
        _propsView:{
            width:'100%',
            padding:1,
            backgroundColor:'#fff',
            marginTop:15
        },
        styleContainerSend:{
            width:'100%',
            padding:2,
            display:'flex',
            flexDirection:'row',
            justifyContent:"space-between",
            gap:10,
            marginTop:10,
            alignItems:'center'
        },
        styleButtonSend:{
            width:'40%',
            backgroundColor:"#4f6466",
            borderRadius:5,
            textAlignVertical: "center",
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            padding:10,

        }
    },

    StylesModule = {
        Label:{
            color:'#fff',
            fontWeight:900,
            fontSize:20,
        },
        Inputs:{
            backgroundColor:'#76f76f',
            width:'85%',
            height:50,
            borderRadius:5,
            paddingLeft:10,
            shadowColor: '#fbae17', // Cor da sombra
            shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra (eixo X e eixo Y)
            shadowOpacity: 1, // Somente valor numérico entre 0 e 1
            shadowRadius: 2, // Raio da sombra
            elevation: 10, // Efeito de elevação para plataformas Android
            
        },
        Svg:{
            width:40,
            height:40,
            backgroundColor:'#ccc',
            padding:10,
            borderRadius:200,
            borderWidth:3,
            borderColor:'#fff'
           
        },
        _PropsInput:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            padding:2,
            gap:10
        }
    },

    styleRegistre = {
        flex:1,
        width:'100%',
        heigth:'100%',
        backgroundColor:'#fff',
        alignItems:"center",
        gap:2,
        
        containerHeader:{
            width:'100%',
            height:'25%',
            backgroundColor:'#fff',
            alignItems:"center",
            justifyContent:"space-between",
            // backgroundColor:'blue',
            marginTop:20
        },
        SvgComponent:{
            width:'100%',
            height:'85%',
            backgroundColor:'#fff',
            padding:2
        },

        containerInput:{
            width:'100%',
            height:300,
            // backgroundColor:'red',
            display:'flex',
            flexDirection:'columns',
            justifyContent:'center',
            gap:10
        },

        Input:{
            width:'100%',
            // backgroundColor:'blue',
            display:'flex',
            padding:5,
            

        },
        
        containerFooter:{
            width:'100%',
            height:'100%',
            backgroundColor:'#0071BC',
            padding:10
        },

        styleButtonSend:{
            width:'40%',
            backgroundColor:"#4f6466",
            borderRadius:5,
            textAlignVertical: "center",
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            padding:10
        }
        ,NamedLogo:{
            borderRadius: 5,
            width: '100%',
            height: 50,
            textAlign: 'center',
            backgroundColor: '#4f6466',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -35,
            borderBottomWidth: 7, // Adiciona borda inferior
            borderBottomColor: '#FFA500', // Cor da borda laranja
            shadowColor: '#fbae17', // Cor da sombra
            shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra (eixo X e eixo Y)
            shadowOpacity: 1, // Somente valor numérico entre 0 e 1
            shadowRadius: 2, // Raio da sombra
            elevation: 10, // Efeito de elevação para plataformas Android
            textX:{
                color:'#fff',
                fontWeight:900,
                fontSize:20,
            }
        }
        ,
        styleContainerSend:{
            width:'100%',
            // backgroundColor:'red',
            padding:2,
            display:'flex',
            flexDirection:'row',
            justifyContent:"center",
            gap:10,
            marginTop:10,
            alignItems:'center'
        },
        styleButtonSend:{
            width:'55%',
            backgroundColor:"#4f6466",
            borderRadius:5,
            textAlignVertical: "center",
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            padding:10,
            gap:10
        },
        Svg:{
            width:20,
            height:20,
        },
    },
]



class Styles {
    constructor(style){
        this.style = style
    }
    method(){
        for (let index = 0; index < this.style.length; index++) {
            const element = this.style[index];
            colletion.push(element)
        }
        return colletion
    }
    exe(){
        if(this.style){
            return this.method()
        }
        return this
    }
}
const allStyle = new Styles(myStyle)
export default allStyle.exe()
