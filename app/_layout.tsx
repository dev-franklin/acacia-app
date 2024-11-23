import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer} from "expo-router/drawer"


export default function Layout (){
    return (
        <GestureHandlerRootView>
            <Drawer
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {   
                        width: 200,
                    },
                    drawerActiveTintColor: '#73c883',
                    drawerInactiveTintColor: '#7f8c8d', 
                    drawerLabelStyle: {
                        fontWeight: 'bold', 
                        fontSize: 20, 
                    },
                    drawerItemStyle: {
                        marginVertical: 5, 
                    },
                
            >
            <Drawer.Screen  name="index" options={{drawerLabel : "Inicio"}}/>
            <Drawer.Screen name="login" options={{drawerLabel : "Login"}}/>
            <Drawer.Screen name="cadastro" options={{drawerLabel : "Cadastro"}}/>
            <Drawer.Screen name="cursos" options={{drawerLabel : "Cursos"}}/>
            <Drawer.Screen name="recuperar" options={{drawerLabel : ""}}/>

            </Drawer>
        </GestureHandlerRootView>
    )
}

