import { StyleSheet, Dimensions, Button } from "react-native";
import { withTiming } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    titlle:{
        marginTop:20,
        marginLeft: 20,
        marginBottom: 40
    }
    ,
    titlleText:{
        fontSize: 23
    },
    search: {
        width: "70%"
    },
    products: {
        
    },
    inputText:{
        borderWidth: 1,
        borderRadius: 10,
        
    },
    button:{

    },
    buttonclick:{
        height: 'auto',
        backgroundColor: 'pink',
        width: "10%",
        justifyContent: "center",
    },
    buttontext:{
        color: "white"
    },
    container_search: {
    flexDirection: "row",
    gap: 20
    },
});


