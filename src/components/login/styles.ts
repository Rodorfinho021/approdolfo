import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  // ====== Login ======
  loginContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  mensagemInput: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  botaoEnviar: {
    width: "100%",
    backgroundColor: "#6d116d",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },

  // ====== Home (Chat) ======
  divPrincipal: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
    paddingVertical: 20,
  },
  conteinerLateral: {
    width: width * 0.25,
    backgroundColor: "rgba(128,0,128,0.8)",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  conteudo: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#111",
    borderRadius: 10,
    overflow: "hidden",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#222",
  },
  topBarTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  topBarGear: {
    color: "#aaa",
    fontSize: 20,
  },
  mensagensContainer: {
    flex: 1,
    padding: 10,
  },
  mensagemBarra: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#333",
    backgroundColor: "#111",
  },
  mensagemInputChat: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  botaoEnviarChat: {
    backgroundColor: "#6d116d",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  cardeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
