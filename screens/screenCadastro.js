import React, { useState } from "react";
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import  styles  from "../styles/styleCadastro";
import { TextInputMask } from 'react-native-masked-text';
import * as ImagePicker from 'expo-image-picker';
import config from '../config/config.json';

export default function CadastroEmpresa() {

    const [nome, setNome] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [what, setWhat] = useState(null);
    const [tel, setTel] = useState(null);
    const [imagem, setImagem] = useState(null);
    const [cadastro, setCadastro] = useState(null);
    const [mensagem, setMensagem] = useState(null);

    async function sendForm()
    {
        let response=await fetch(config.urlRootNode+'Empresa', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                nomeEmpresa: nome,
                enderecoEmpresa: endereco,
                whatsappEmpresa: what,
                telefoneEmpresa: tel,
                imagensEmpresa: imagem
            }),
        });
        let res = await response.json();
        setMensagem(res);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImagem(result.assets[0].uri)
        } else {
            alert('Imagem não adicionada! ')
        }
    };

    return(
        <KeyboardAvoidingView style={styles.boxCadastro} keyboardVerticalOffset={10}>

            <TouchableOpacity style={styles.boxAvatar} onPress={() => pickImage()}>
                <Image source={{ uri: imagem }} style={styles.avatar}/>
            </TouchableOpacity>
            <Text style={styles.alertImagem}>Inserir imagem</Text>

            <View style={styles.boxTitle}> 
                <Text 
                style={styles.titleCadastro}>CADASTRO EMPRESA</Text>
            </View>

            <ScrollView style={styles.boxForm} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                <View style={styles.center}>
                    {mensagem && (
                        <Text style={styles.alert}>{mensagem}</Text>
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