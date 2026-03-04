import { chamadaURL } from "./url";

const nome = "";
const email= "";
const senha= "";
const data_nascimento= "";
const peso = "";
const altura ="";
const sexo = "";


try {
    const result = await chamadaURL('cadastro.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome,
            email,
            senha,
            data_nascimento,
            peso_kg: Number(peso),
            altura_cm: Number(altura),
            sexo,
            nivel_atividade: nivelAtividade,
            meta: meta
        }),
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
