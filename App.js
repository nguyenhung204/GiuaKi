import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/NavigationContainer";


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <AppNavigator />
    </NavigationContainer>
  );
};
