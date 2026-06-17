import { useState } from "react";
import {
  View,
  TextInput,
  Button,
} from "react-native";

export default function CadastroRegistroScreen({
  navigation,
  adicionarRegistro,
}: any) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  function salvar() {
    adicionarRegistro({
      id: Date.now(),
      nome,
      descricao,
      status: "normal",
      data: new Date().toLocaleDateString(),
    });

    navigation.goBack();
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}