import { chamadaURL } from "./url.js"; 

document.getElementById("form-cadastro").addEventListener("submit", cadastrar);

async function cadastrar(evento) {
    evento.preventDefault(); // Evita que a página recarregue

    const nome = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirma_senha = document.getElementById("confirma_senha").value.trim();
    const data_nascimento = document.getElementById("data_nascimento").value;
    const sexo = document.getElementById("sexo").value;

    // Validação simples de senha
    if (senha !== confirma_senha) {
        alert("As senhas não coincidem!");
        return;
    }

    const dados = {
        nome: nome,
        email: email,
        senha: senha,
        data_nascimento: data_nascimento,
        sexo: sexo
    };

    try {
        const result = await chamadaURL('cadastro.php', {
            method: 'POST',
            body: JSON.stringify(dados)
        });

        if (result.success === false) {
            alert('Erro: ' + (result.message || 'Erro ao cadastrar'));
            return;
        }

        alert('Usuário cadastrado com sucesso!');
        // Redireciona para a tela de login
        window.location.href = 'YourDiet.html';

    } catch (e) {
        alert('Erro: Falha ao conectar com o servidor.');
        console.error(e);
    }
}