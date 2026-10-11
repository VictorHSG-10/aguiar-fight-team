# Aguiar Fight Team — modelo de landing page para academia de kickboxing

Landing page de uma equipe de kickboxing em Itaipuaçu, Maricá, feita como modelo para
apresentar ao cliente. Uma página só, que se adapta a computador, tablet e celular.
HTML, CSS e JavaScript puros, sem framework.

Endereço, preços, horários e telefone são de exemplo: troque pelos dados reais antes de publicar.

## Arquivos

| Arquivo | O que faz |
|---|---|
| `index.html` | Conteúdo e estrutura: turmas, planos, horários, aula experimental e endereço |
| `style.css` | Cores, fonte, layout e versões para tablet (até 1000px) e celular (até 760px) |
| `script.js` | Menu do celular, mensagens do WhatsApp e ano no rodapé |

## Publicar a prévia no GitHub Pages

1. Crie um repositório público, por exemplo `aguiar-fight-team`.
2. **Add file → Upload files** e envie os 4 arquivos (não a pasta).
3. **Settings → Pages** → Branch `main`, pasta `/ (root)` → **Save**.
4. Em alguns minutos: `https://victorhsg-10.github.io/aguiar-fight-team/`.

Para atualizar depois, faça o upload de novo com os mesmos nomes de arquivo e
recarregue o site com **Ctrl + Shift + R**.

## Adaptar para o cliente

- **Cores:** bloco `:root` no topo do `style.css` (`--vermelho`, `--preto`, `--branco`).
- **WhatsApp:** procure `5521999990000` no `index.html` e troque pelo número do cliente
  (55 + DDD + número).
- **Mensagens do WhatsApp:** cada botão tem um `data-mensagem="..."` com o texto pronto.
  É só editar o texto; o `script.js` monta o link.
- **Turmas:** cada turma é um `<article class="turma">` com número, nome e descrição.
- **Planos:** cada plano é um `<article class="plano">`. O plano com fundo vermelho
  tem a classe `plano--destaque` e o selo `plano__selo`.
- **Horários:** linhas `<div><dt>…</dt><dd>…</dd></div>` dentro de `.tabela`.
- **Rodapé:** remova a linha "Modelo demonstrativo".
