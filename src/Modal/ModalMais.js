import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function ModalMais(props) {
  return (
    <View style={styles.ViewContainer}>
      <SafeAreaView />

      <View style={styles.ViewContainerModal}>
        <TouchableOpacity style={styles.ButtonModal} onPress={props.voltar}>
          <Text style={styles.ButtonText}> Voltar </Text>
        </TouchableOpacity>

				<Text style={styles.TitleMovie}> {props.filme.nome} </Text>
				<Text style={styles.TitleMovie}>Sinopse:</Text>
				<Text style={styles.TextSinopse}> {props.filme.sinopse} </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
	
  ViewContainerModal: {
		height: '60%',
		backgroundColor: "#595858",
		borderRadius:10,
  },

	ButtonModal:{
		backgroundColor:'red',
		padding: 10,
		borderTopLeftRadius:10,
		borderTopRightRadius:10,
		borderBottomLeftRadius:5,
		alignItems:"center"
	},
	ButtonText:{
		fontSize:20,
	},

	TitleMovie:{
		color:'#fff',
		marginLeft:10,
		fontSize:20,
		marginTop:10,
		marginBottom:10
	},

	TextSinopse:{
		marginLeft:10,
		marginRight:10,
		fontSize:20,
		color:'#fff',
		textAlign:'justify'
	}
});
