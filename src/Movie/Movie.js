import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

import ModalMais from "../Modal/ModalMais";

//descontruindo data
export default function Movie({ data }) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.Card}>
        <Text style={styles.TextTitleMovie}> {data.nome} </Text>

        <Image source={{ uri: data.foto }} style={styles.CapMovie} />

        <View style={styles.ViewButton}>
          <TouchableOpacity
            style={styles.ButtonMore}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.ButtonMoreText}>Leia Mais</Text>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} visible={modalVisible} animationType="slide">
          <ModalMais filme={data} voltar={() => (setModalVisible(false))} />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    flexDirection: "column",
    elevation: 2,
    margin: 10,
    backgroundColor: "#636262",
    marginBottom: 30,
  },

  TextTitleMovie: {
    fontSize: 20,
    margin: 10,
    color: "#fff",
    fontWeight: "600",
  },

  CapMovie: {
    flex: 1,
    zIndex: 2,
    height: 250,
    width: 350,
  },

  ViewButton: {
    alignItems: "flex-end",
    marginTop: -60,
    zIndex: 3,
  },

  ButtonMore: {
    width: 100,
    backgroundColor: "#e63238",
    marginRight: 20,
    opacity: 1,
    padding: 5,
    alignItems: "center",
    borderRadius: 15,
  },

  ButtonMoreText: {
    fontSize: 20,
    padding: 2,
    color: "#fff",
  },
});
