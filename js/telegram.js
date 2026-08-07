/**
 * Envio de formulário para o telegram
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const tipo_material = document.getElementById('tipo_material').value;
            const mensagem = document.getElementById('mensagem').value.trim();
            const respostaDiv = document.getElementById('resposta');
            
            
            if (!nome || !telefone || !mensagem) {
                respostaDiv.innerHTML = '<div class="alert alert-warning">⚠️ Por favor, preencha todos os campos obrigatórios.</div>';
                return;
            }
            
            
            let texto = `📩 *Nova mensagem do site!*\n\n`;
            texto += `👤 *Nome:* ${nome}\n`;
            texto += `📞 *Telefone:* ${telefone}\n`;
            texto += `♻️ *Material:* ${tipo_material || 'Não informado'}\n`;
            texto += `💬 *Mensagem:* ${mensagem}`;
            
           
            if (typeof BOT_TOKEN === 'undefined' || typeof CHAT_ID === 'undefined') {
                respostaDiv.innerHTML = '<div class="alert alert-danger">❌ Erro de configuração. Token ou Chat ID não definidos.</div>';
                console.error('BOT_TOKEN ou CHAT_ID não estão definidos. Verifique o arquivo config.js');
                return;
            }
            
            
            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
            
            
            respostaDiv.innerHTML = '<div class="alert alert-info">⏳ Enviando mensagem para os voluntários...</div>';
            
            
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: texto,
                    parse_mode: 'Markdown'
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    respostaDiv.innerHTML = '<div class="alert alert-success">✅ Mensagem enviada com sucesso! Os voluntários serão notificados no Telegram.</div>';
                    form.reset();
                } else {
                    respostaDiv.innerHTML = '<div class="alert alert-danger">❌ Erro ao enviar mensagem. Tente novamente mais tarde.</div>';
                    console.error('Erro na API do Telegram:', data);
                }
            })
            .catch(erro => {
                respostaDiv.innerHTML = '<div class="alert alert-danger">❌ Erro de conexão. Verifique sua internet e tente novamente.</div>';
                console.error('Erro de rede:', erro);
            });
        });
    }
});