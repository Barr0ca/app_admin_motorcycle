import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import  styles  from "../styles/styleCadastro";

export default function CadastroEmpresa() {

    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [what, setWhat] = useState('')
    const [tel, setTel] = useState('')

    const Cadastrar = () => {
        alert()
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
                <View 
                style={styles.boxLabel}>
                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Nome da Empresa"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={setNome}/>
                    </View>

                <View 
                style={styles.boxLabel}>
                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Endereço da Empresa"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={setEndereco}/>
                </View>

                <View 
                style={styles.boxLabel}>
                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Whatsapp da Empresa"
                    keyboardType="numeric"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={setWhat}/>
                </View>

                <View 
                style={styles.boxLabel}>
                    <TextInput
                    style={styles.labelCadastro}
                    placeholder="Telefone da Empresa"
                    keyboardType="numeric"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    onChangeText={setTel}/>
                </View>

                <View>
                    <TouchableOpacity 
                    style={styles.boxButton}
                    onPress={() => Cadastrar()}
                    >
                        <Text style={styles.textCadastrar}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}