import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Login, Sign } from "../screen";
import { Welcome } from "../screen/Welcome";

const Stack = createNativeStackNavigator();

// aqui organiza as rotas, essa é a rota de autenticação de usuario
export const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sign" component={Sign} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome}/>
    </Stack.Navigator>
  );
};

