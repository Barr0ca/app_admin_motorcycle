import React, { useState } from "react";
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import  styles  from "../styles/styleCadastro";
import { TextInputMask } from 'react-native-masked-text';

export default function CadastroEmpresa() {

    const [nome, setNome] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [what, setWhat] = useState(null);
    const [tel, setTel] = useState(null);
    const [cadastro, setCadastro] = useState(null);
    const [mensagem, setMensagem] = useState(null);

    async function sendForm()
    {
        let response=await fetch('http://10.0.0.108:3000/cadastro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nomeEmpresa: nome,
                enderecoEmpresa: endereco,
                whatsappEmpresa: what,
                telefoneEmpresa: tel
            }),
        });
        let ress = await response.json();
        setMensagem(ress);
    }

    return(
        <KeyboardAvoidingView style={styles.boxCadastro} keyboardVerticalOffset={10}>

            <TouchableOpacity style={styles.boxAvatar}>
                <Image source={require('./icons/camera.png')} style={styles.avatar}/>
            </TouchableOpacity>

            <View style={styles.boxTitle}> 
                <Text 
                style={styles.titleCadastro}>CADASTRO EMPRESA</Text>
            </View>

            <ScrollView style={styles.boxForm} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                <View style={styles.center}>
                    {mensagem && (
                        <Text>{mensagem}</Text>
                    )}

                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Nome da Empresa"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={text=>setNome(text)}/>

                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Endereço da Empresa"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={text=>setEndereco(text)}/>

                    <TextInputMask
                    style={styles.labelCadastro}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99)'
                    }}
                    placeholder="Whatsapp da Empresa"
                    keyboardType="numeric"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={text=>setWhat(text)}/>

                    <TextInputMask
                    style={styles.labelCadastro}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99)'
                    }}
                    placeholder="Telefone da Empresa"
                    keyboardType="numeric"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={text=>setTel(text)}/>

                    <TouchableOpacity 
                    style={styles.boxButton}
                    onPress={() => sendForm()}
                    >
                        <Text style={styles.textCadastrar}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    );
}