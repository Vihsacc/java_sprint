import { View, FlatList, Button } from "react-native";
import RegistroCard from "../components/RegistroCard";

export default function ListaRegistrosScreen({
  navigation,
  registros,
}: any) {
  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Novo Registro"
        onPress={() => navigation.navigate("Cadastro")}
      />

      <FlatList
        data={registros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RegistroCard
            registro={item}
            onPress={() =>
              navigation.navigate("Detalhe", { registro: item })
            }
          />
        )}
      />
    </View>
  );
}