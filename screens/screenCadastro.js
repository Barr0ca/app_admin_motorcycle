import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import  styles  from "../styles/styleCadastro";

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
        <View style={styles.boxCadastro}>

            <View style={styles.boxIcon}>
                <Image
                source={require("./icons/iconMotorcycle.png")}/>
            </View>

            <View style={styles.boxTitle}> 
                <Text 
                style={styles.titleCadastro}>CADASTRO EMPRESA</Text>
            </View>

            <View style={styles.boxForm}>

                {mensagem && (
                    <Text>{mensagem}</Text>
                )}

                <View 
                style={styles.boxLabel}>
                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Nome da Empresa"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={text=>setNome(text)}/>
                    </View>

                <View 
                style={styles.boxLabel}>
                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Endereço da Empresa"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={text=>setEndereco(text)}/>
                </View>

                <View 
                style={styles.boxLabel}>
                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Whatsapp da Empresa"
                    keyboardType="numeric"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={text=>setWhat(text)}/>
                </View>

                <View 
                style={styles.boxLabel}>
                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Telefone da Empresa"
                    keyboardType="numeric"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={text=>setTel(text)}/>
                </View>

                <View>
                    <TouchableOpacity 
                    style={styles.boxButton}
                    onPress={() => sendForm()}
                    >
                        <Text style={styles.textCadastrar}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}