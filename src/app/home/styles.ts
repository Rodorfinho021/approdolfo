import { StyleSheet, Dimensions, Button } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/Colors";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    marginTop: "10%",
    width: "100%",
    paddingLeft: '3%'
  },
  tittle:{
    height: 30,
    width: '75%',
    marginBottom: 10
  },
  text:{
    color: 'green',
    fontSize: 20,
    
  },

  container_search: {
    height: 35,
    width: "100%",
    flexDirection: "row",
    gap: 10,


  },
  input:{
    backgroundColor: 'black',
    width: "80%",
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    color:'white'
  },
  

  button:{
    backgroundColor: 'black',
    width: "12%",
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonDel:{
    backgroundColor: 'black',
    width: "8%",
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  products: {
    height: '100%',
    width:'97%',
    backgroundColor: 'pink',
    marginBlockStart: 30,
    borderRadius: 10,
    borderWidth: 1
  },

  itemText: {
    color: "green"
  },
  itemText2: {
    color: "green",
    justifyContent: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  
});


