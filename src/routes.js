import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ManterForma from "./pages/ManterForma";
import Home2 from "./pages/Home2";
import Avaliação from "./pages/Avaliacao";
import ResultAvaliacao from "./pages/ResultAvaliacao";
import TrocarUsu from "./pages/TrocarUsuario";
import PeitoBraco from "./pages/ExercPeitoBraco";
import Abdomen from "./pages/ExercAbdomen";
import OmbroCostas from "./pages/ExercOmbroCostas";
import Perna from "./pages/ExercPerna";
import Logar from "./pages/Login2";
import GifPuloLat from "./pages/GifPerna1";
import PeitoBracoInter from "./pages/ExercPeitoBracoInter";
import AbdomenInter from "./pages/ExercAbdomenInter";
import OmbroCostaInter from "./pages/ExercOmbroCostasInter";
import OmbroCostasInter from "./pages/ExercOmbroCostasInter";
import PernaIntermediario from "./pages/ExercPernaInter";
import PeitoBracoAvan from "./pages/ExercPeitoBracoAvan";
import AbdomenAvan from "./pages/ExercAbdomenAvan";
import OmbroCostasAvan from "./pages/ExercOmbroCostasAvan";
import PernaAvancado from "./pages/ExercPernaAvan";
import Execucao from "./pages2/Execucaoabd";
import Execucaoabdinter from "./pages2/Execucaoabdinter";
import Execucaoabdavan from "./pages2/Execucaoabdavan";
import ExecucaoOmbroCostas from "./pages2/ExecucaoOmbroCostas";
import ExecucaoOmbroCostasInter from "./pages2/ExecucaoOmbroCostasInter";
import ExecucaoOmbroCostasAvan from "./pages2/ExecucaoOmbroCostasAvan";
import ExecucaoPernaAvan from "./pages2/ExecucaoPernaAvan";
import ExecucaoPernaInter from "./pages2/ExecucaoPernaInter";
import ExecucaoPernaIniciante from "./pages2/ExecucaoPernaIniciante"
import ExecucaoPTBR from "./pages2/ExecucaoPTBR"
import ExecucaoPTBRInter from "./pages2/ExecucaoPTBRInter"
import ExecucaoPTBRAvan from "./pages2/ExecucaoPTBRAvan"

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,

                }}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="ManterForma"
                component={ManterForma}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Home2"
                component={Home2}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Avaliacao"
                component={Avaliação}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="btnCadastro"
                component={Cadastro}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="ResultAvaliacao"
                component={ResultAvaliacao}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="TrocarUsu"
                component={TrocarUsu}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="PeitoBraco"
                component={PeitoBraco}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Abdomen"
                component={Abdomen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="OmbroCostas"
                component={OmbroCostas}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Perna"
                component={Perna}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Logar"
                component={Logar}
                options={{
                    headerShown: false,

                }}
            />

            <Stack.Screen
                name="GifPuloLat"
                component={GifPuloLat}
                options={{
                    headerShown: false,

                }}
            />

            <Stack.Screen
                name="PeitoBracoInter"
                component={PeitoBracoInter}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="AbdomenInter"
                component={AbdomenInter}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="OmbroCostasInter"
                component={OmbroCostasInter}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="PernaIntermediario"
                component={PernaIntermediario}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="PeitoBracoAvan"
                component={PeitoBracoAvan}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="AbdomenAvan"
                component={AbdomenAvan}
                options={{
                    headerShown: false,
                }}
            />


            <Stack.Screen
                name="OmbroCostasAvan"
                component={OmbroCostasAvan}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="PernaAvancado"
                component={PernaAvancado}
                options={{
                    headerShown: false,
                }}
            />


            <Stack.Screen
                name="Execucao"
                component={Execucao}
                options={{
                    headerShown: false,
                }}
                />

            <Stack.Screen
                name="Execucaoabdinter"
                component={Execucaoabdinter} 
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="Execucaoabdavan"
                component={Execucaoabdavan} 
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoOmbroCostas"
                component={ExecucaoOmbroCostas}  
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoOmbroCostasInter"
                component={ExecucaoOmbroCostasInter}  
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoOmbroCostasAvan"
                component={ExecucaoOmbroCostasAvan}  
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoPernaAvan"
                component={ExecucaoPernaAvan}  
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoPernaIniciante"
                component={ExecucaoPernaIniciante}  
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoPernaInter"
                component={ExecucaoPernaInter}  
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoPTBR"
                component={ExecucaoPTBR}  
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoPTBRInter"
                component={ExecucaoPTBRInter}  
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="ExecucaoPTBRAvan"
                component={ExecucaoPTBRAvan}  
                options={{
                    headerShown: false,
                }}

            />


        </Stack.Navigator>
    );
}


