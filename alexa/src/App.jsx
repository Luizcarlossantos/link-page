import Card from "./componentes/Card"
import alexa from "../public/alexa.png"
function App() {

  return (
   

  <div>
  <Card
   public={alexa}
   titulo="Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado | Cor Preta"
   descricao="Deixe sua vida mais fácil. Use sua voz para criar timers, adicionar itens a listas e criar eventos e lembretes. 
   Ouça notícias e confira a previsão do tempo. Peça resultados de jogos de futebol ou informações de personalidades históricas.
   Tudo isso apenas com a sua voz, Design moderno e elegante e som ainda melhor.
   O Echo é a combinação entre som de alta qualidade, hub de casa inteligente e sensor de temperatura.
   Os speakers potentes proporcionam agudos altos, médios dinâmicos e graves profundos que garantem um som de alta qualidade
   que se adapta a qualquer ambiente."
   valor="R$ 296,10"
   parcelamento="ou R$ 329,00 em até 12x de R$ 27,49 sem juros"
  botao1="Compre agora"
  botao2="Adicionar carrinho"
   />
  </div>
  )
}

export default App
