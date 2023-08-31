import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons"; // Certifique-se de importar o FontAwesome corretamente

function MyModal({ isVisible, onClose }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleConfirm = () => {
    if (selectedOption === "email") {
      console.log("Email digitado:", emailInput);
      console.log("Enviando email de recuperação para:", emailInput);
      setEmailInput("");
    }
    onClose();
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, backgroundColor: "white", padding: 20, maxHeight: 450 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Recuperar Senha
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Escolha a opção para recuperar a senha:
        </Text>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          <Picker.Item label="Escolha uma opção" value="" />
          <Picker.Item label="Recuperar por Email" value="email" />
        </Picker>
        {selectedOption === "email" && (
          <View style={{ marginTop: 10 }}>
            <Text>Digite o email associado à conta:</Text>
            <TextInput
              style={{
                borderColor: "#DD242C",
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                marginTop: 5,
              }}
              placeholder="Email"
              value={emailInput}
              onChangeText={setEmailInput}
            />
          </View>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: "#DD242C",
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={handleConfirm}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: "#DD242C",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={onClose}
        >
          <Text style={{ color: "#DD242C", textAlign: "center" }}>Cancelar</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: 20,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:20 }}>
          <FontAwesome name="github" size={40} color="#DD242C" />
          <FontAwesome name="code-fork" size={40} color="#DD242C" />
        </View>
      </View>
    </Modal>
  );
}

export default MyModal;
