import {LogBox} from "react-native"
import { initFirebase } from "./src/utils"
import { NavigationContainer } from "@react-navigation/native"
import { AppNavigation } from "./src/navigation/AppNavigation"

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}

