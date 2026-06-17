import { View, Text, TouchableOpacity } from "react-native";

export default function RegistroCard({ registro, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 15,
          borderWidth: 1,
          marginBottom: 10,
          borderRadius: 8,
        }}
      >
        <Text>{registro.nome}</Text>

        <Text>Status: {registro.status}</Text>
      </View>
    </TouchableOpacity>
  );
}