
const colletion = []


const Layout = {
    colores:{
        _color_one:"#fff",
        _color_two:"#DD242C"
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
            backgroundColor:'#fff',
            alignItems:"center",
            justifyContent:"center",
            width:'100%',
            height:'100%',
                ContainerImgLogo:{
                    display:'flex',
                    backgroundColor:'red',
                    alignItems:"center",
                    justifyContent:"center",
                    width:'100%',
                    height:'30%',
                    padding:2
                },
                ContainerInput:{
                    backgroundColor:'green',
                    width:'100%',
                    height:'70%',
                    padding:2
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
