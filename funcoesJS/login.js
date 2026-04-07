import { chamadaURL } from "./url.js";

document.getElementById("form-login").addEventListener("submit", fazerLogin);

async function fazerLogin(evento) {
    evento.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    try {
        const result = await chamadaURL('login.php', {
            method: 'POST',
            body: JSON.stringify({ email: email, senha: senha })
        });

        if (!result.sucesso) {
            alert('Erro: ' + (result.mensagem || 'Credenciais inválidas'));
            return;
        }

        alert(`Bem-vindo(a), ${result.usuario.nome}!`);
        
        // Aqui você salva os dados do usuário para usar nas outras páginas
        localStorage.setItem("usuario_logado", JSON.stringify(result.usuario));

        // Redirecionar para a página principal da dieta
        // window.location.href = 'pagina_principal.html'; 

    } catch (error) {
        alert('Erro ao conectar com o servidor.');
        console.error(error);
    }
}