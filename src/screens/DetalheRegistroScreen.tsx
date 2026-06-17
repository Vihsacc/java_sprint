import { View, Text } from "react-native";

export default function DetalheRegistroScreen({ route }: any) {
  const { registro } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome: {registro.nome}</Text>

      <Text>Descrição: {registro.descricao}</Text>

      <Text>Status: {registro.status}</Text>

      <Text>Data: {registro.data}</Text>
    </View>
  );
}