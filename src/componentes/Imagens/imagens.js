import React, {useState} from "react";
import { View , TouchableHighlight, Image, StyleSheet, Modal, Text, Pressable} from "react-native";

export default function Imagens(){

    const imagens = [
        { 
            uri: require('../../../assets/monitor.png'),
            valor: 'Monitor - É um dispositivo de saída que exibe informações visuais geradas pelo computador. Geralmente, ele consiste em um painel plano ou curvo, que utiliza tecnologias como LED, LCD ou OLED para projetar imagens e texto na tela.',
        },
        {
            uri: require('../../../assets/mouse.png'),
            valor: 'Mouse - É um dispositivo de entrada usado para controlar o cursor na tela de um computador. Ele geralmente é composto por um corpo ergonômico que se encaixa na mão do usuário, botões clicáveis para ações primárias (como selecionar e clicar) e um sensor que rastreia os movimentos do mouse, convertendo-os em movimentos do cursor na tela. ',
        },
        {
            uri: require('../../../assets/teclado.png'),
            valor: 'Teclado - É um dispositivo de entrada que permite ao usuário inserir dados e comandos no computador. Geralmente, consiste em uma série de teclas organizadas em um layout padrão, incluindo letras, números, símbolos e teclas de função.',
        },
        {
            uri:require('../../../assets/cpu.png'),
            valor: 'CPU - Ele contem o cérebro do sistema. A CPU geralmente consiste em uma ou várias unidades de processamento, cada uma contendo núcleos individuais, que podem executar múltiplas tarefas simultaneamente. Ela executa operações básicas, como aritmética, lógica e controle, e interage com a memória, dispositivos de entrada e saída, e outros componentes do sistema.',
        }
      ]

    const [resultadoImagem, setResultadoImagem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    function mudarValor(valor){
        setResultadoImagem(valor);
        setModalVisible(true);
    }
    

    return(
        <View>
            <View style={styles.container}>
            <Text style={styles.texto2}>Clique na imagem abaixo para saber mais informações</Text>
            {imagens.map((imagem, index) => (
                <TouchableHighlight 
                activeOpacity={0.6}
                underlayColor="#FFF"
                key={index} onPress={() => mudarValor(imagem.valor
                )}>
                    <Image 
                    style={styles.border}
                    source={imagem.uri} />
                </TouchableHighlight>
            ))}
            </View>

            <Modal animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => { Alert.alert('Modal has been closed.');
                                                setModalVisible(!modalVisible);}}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.texto}>{resultadoImagem}</Text>
                            <Pressable style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!{ modalVisible })}>
                                <Text>Voltar</Text>
                            </Pressable>
                        </View>
                    </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    border: {
      borderWidth: 1,
      borderColor: 'black'
    }, 
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
        width: 300
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    }, 
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        height: 320, 
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        marginTop: 20
      },
      buttonOpen: {
        backgroundColor: '#2196F3',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      }, 
      texto: { 
          textAlign: 'justify'
      },
      texto2: {
        marginBottom: 20,
        width: 300,
        marginLeft: 40 
    }
  });