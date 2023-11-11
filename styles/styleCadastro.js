import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
boxCadastro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
},

boxForm: {
    flex: 1,
    width: '100%',
    zIndex: 1,
    //backgroundColor: 'red',
    marginTop: 20,
},

center: {
    justifyContent: 'center',
    alignItems: 'center'
},

labelCadastro: {
    backgroundColor: '#DADADA',
    width: '72%',
    marginBottom: 15,
    color: '#8500FF',
    fontSize: 17,
    borderRadius: 5,
    padding: 10,
    marginVertical: '3%',
    overflow: 'hidden',
},

titleCadastro: {
    color: '#8500FF',
    fontSize: 25,
    marginTop: 10
},

boxAvatar: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DADADA',
    borderRadius: 100,
    marginTop: 40,
    //backgroundColor: 'green',
},

avatar: {
    height: 150,
    width: 150,
    borderRadius: 100
},

boxTitle: {
    overflow: 'hidden',
},

boxButton: {
    backgroundColor: '#8500FF',
    width: '40%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: '5%',
},

textCadastrar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
},

alert: {
    color: '#8500FF'
},

alertImagem: {
    color: '#8500FF',
    marginTop: 10
},
});

export default styles