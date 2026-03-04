import { chamadaURL } from "./url";

//Inserir o cadastro no btn (cadastrar) no cadastro.html
async function cadastrar() {
    const dados = {
        nome: document.getElementById("nome").value.trim,
    } 
}


try {
    const result = await chamadaURL('cadastro.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
    });

    if (!result.success) {
        Alert.alert('Erro', result.message || 'Erro ao cadastrar');
        return;
    }

    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    if (result.usuario) {
        onLogin(result.usuario);
    }

} catch (e) {
    Alert.alert('Erro', 'Falha ao conectar com o servidor');
}
