
const colletion = []


const Layout = {
    colores:{
        _color_one:"#fff",
        _color_two:"#DD242C",
        _color_three:"#f4f4f4"
    }
}

const myStyle = [
    stylesPage = {
        flex:1,
        backgroundColor:Layout.colores._color_one,
        alignItems:"center",
        justifyContent:"center",
    },

    stylesHome ={
        container:{
            display:'flex',
            backgroundColor:Layout.colores._color_one,
            alignItems:"center",
            justifyContent:"center",
            width:'100%',
            height:'100%',
            // padding:10,
            gap:2,
                boxContainerNamed:{
                    display:'flex',
                    backgroundColor:Layout.colores._color_two,
                    width:'100%',
                    height:'70%',
                    alignItems:"left",
                    flexDirection:'column-reverse',
                    padding:10,
                    Text:{
                        color:Layout.colores._color_one,
                        fontSize:20
                    }
                },
                boxContainerAllButtons:{
                    display:'flex',
                    backgroundColor:Layout.colores._color_one,
                    width:'100%',
                    height:'30%',
                    alignItems:"center",
                    justifyContent:"center",
                },
                boxContainerButtons:{
                    display:'flex',
                    backgroundColor:Layout.colores._color_one,
                    width:'100%',
                    height:'50%',
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:'row',
                    gap:10,
                    padding:20
                },
                Button:{
                    ButtonPrimary:{
                        display:'flex',
                        backgroundColor:Layout.colores._color_two,
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:'row',
                        padding:10,
                        borderRadius:6,
                        width:'50%',
                        Text:{
                            color:'#fff'
                        }
                    },
                    ButtonSecondary:{
                        display:'flex',
                        backgroundColor:Layout.colores._color_one,
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:'row',
                        padding:10,
                        borderRadius:6,
                        borderWidth:1,
                        borderColor:Layout.colores._color_two,
                        width:'50%',
                        Text:{
                            color:Layout.colores._color_two
                        }
                    }
                }
        }
    }
    ,

    stylesLogin = {
        container:{
            display:'flex',
            backgroundColor:Layout.colores._color_three,
            alignItems:"center",
            justifyContent:"center",
            width:'100%',
            height:'100%',
            padding:5,
                ContainerImgLogo:{
                    display:'flex',
                    // backgroundColor:'red',
                    alignItems:"center",
                    justifyContent:"center",
                    width:'100%',
                    height:'40%',
                    padding:2
                },
                ContainerInput:{
                    // backgroundColor:'green',
                    width:'100%',
                    height:'60%',
                    padding:2,
                    // display:'flex',
                    // alignItems:'center',
                    gap:15,
                    Text:{
                        fontSize:30,
                        fontWeight:500,
                    }
                },

                ContainerBoxInput:{
                    // display:'flex',
                    // backgroundColor:'blue',
                    // alignItems:"center",
                    width:'100%',
                    padding:2,
                    Input:{
                        width:'100%',
                        backgroundColor:'#fefefe',
                        padding:5,
                        borderRadius:6,
                    },
                    inputView:{
                        width:'100%',
                        // backgroundColor:'red',
                        display:'flex',
                        justifyContent:'space-between',
                        flexDirection:'row',
                        Input:{
                            width:'90%',
                            backgroundColor:'#fefefe',
                            padding:5,
                            borderTopLeftRadius:6,
                            borderBottomLeftRadius:6
                        },
                        Button:{
                            backgroundColor:'#fefefe',
                            display:'flex',
                            justifyContent:'center',
                            width:'10%',
                            alignItems:'center',
                            borderTopRightRadius:6,
                            borderBottomRightRadius:6
                        }
                    }
                    ,ButtonSend:{
                        backgroundColor:Layout.colores._color_two,
                        display:'flex',
                        justifyContent:'center',
                        width:'100%',
                        alignItems:'center',
                        borderRadius:6,
                        padding:10,
                        Text:{
                            color:Layout.colores._color_one,
                            fontSize:15
                        }
                    }
                }


        }
    },


    stylesRegistro = {
        container:{
            display:'flex',
            backgroundColor:Layout.colores._color_three,
            alignItems:"center",
            justifyContent:"center",
            width:'100%',
            height:'100%',
            padding:5,
                ContainerImgLogo:{
                    display:'flex',
                    // backgroundColor:'red',
                    alignItems:"center",
                    justifyContent:"center",
                    width:'100%',
                    height:'20%',
                    padding:2
                },
                ContainerInput:{
                    // backgroundColor:'green',
                    width:'100%',
                    height:'80%',
                    padding:2,
                    // display:'flex',
                    // alignItems:'center',
                    gap:15,
                    Text:{
                        fontSize:30,
                        fontWeight:500,
                    }
                },

                ContainerBoxInput:{
                    // display:'flex',
                    // backgroundColor:'blue',
                    // alignItems:"center",
                    width:'100%',
                    padding:2,
                    Input:{
                        width:'100%',
                        backgroundColor:'#fefefe',
                        padding:5,
                        borderRadius:6,
                    },
                    inputView:{
                        width:'100%',
                        // backgroundColor:'red',
                        display:'flex',
                        justifyContent:'space-between',
                        flexDirection:'row',
                        Input:{
                            width:'90%',
                            backgroundColor:'#fefefe',
                            padding:5,
                            borderTopLeftRadius:6,
                            borderBottomLeftRadius:6
                        },
                        Button:{
                            backgroundColor:'#fefefe',
                            display:'flex',
                            justifyContent:'center',
                            width:'10%',
                            alignItems:'center',
                            borderTopRightRadius:6,
                            borderBottomRightRadius:6
                        }
                    }
                    ,ButtonSend:{
                        backgroundColor:Layout.colores._color_two,
                        display:'flex',
                        justifyContent:'center',
                        width:'100%',
                        alignItems:'center',
                        borderRadius:6,
                        padding:10,
                        Text:{
                            color:Layout.colores._color_one,
                            fontSize:15
                        }
                    }
                    ,GroupRadiosButtons:{

                        display:'flex',
                        justifyContent:'center',
                        width:'100%',
                        alignItems:'center',
                        flexDirection:'row'
                        
                    }
                }

        }
    }
    
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
