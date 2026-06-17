import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from "react";

import { mockRegistros } from "./src/data/mockRegistros";

import ListaRegistrosScreen from "./src/screens/ListaRegistrosScreen";
import CadastroRegistroScreen from "./src/screens/CadastroRegistroScreen";
import DetalheRegistroScreen from "./src/screens/DetalheRegistroScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [registros, setRegistros] = useState(mockRegistros);

  const adicionarRegistro = (novoRegistro: any) => {
    setRegistros([...registros, novoRegistro]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista">
          {(props) => (
            <ListaRegistrosScreen
              {...props}
              registros={registros}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Cadastro">
          {(props) => (
            <CadastroRegistroScreen
              {...props}
              adicionarRegistro={adicionarRegistro}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Detalhe"
          component={DetalheRegistroScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}