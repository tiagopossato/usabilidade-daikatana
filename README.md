# usabilidade-daikatana

[Demonstração](https://tiagopossato.github.io/usabilidade-daikatana)
> Desenvolvido por: [Tiago Possato](https://github.com/tiagopossato) e [Mateus Zanini](https://github.com/mateuszanini)

### Definição da atividade
Realizar a adaptação do website daikatana que atualmente apresenta uma interface fluída para que esta se torne uma interface responsiva. Tal atividade deve contemplar no mínimo 5 modificações no layout original e as mesmas devem ser descritas. 
Além disso, dentro do site deverá ser criada uma nova seção que sofrerá modificação estrutural diante modificação de dispositivo (desktop, tablet e smartphone).

### Modificações no Layout
O *layout* adapta-se a diferentes tamanhos de tela. Possui *media queries* para três tamanhos, sendo:
* **Small** (pequeno): telas com largura de até **600px**;
* **Medium** (médio): telas com largura entre **601px** e **992px**;
* **Large** (grande): telas com largura maior que **992px**.

As modificações realizadas no layout foram:
* **header** (logo e menu)
  * *Telas pequenas (sm)*: o logo é reduzido e alinhado à esquerda; o menu é ocultado e um botão para abrí-lo é exibido;
  * *Telas médias (md)*: o logo é reduzido e centralizado, ocupando uma linha; o menu é centralizado e exibido abaixo do logo;
  * *Telas grandes (lg)*: o logo é alinhado à esquerda; o menu é alinhado à direita.
* **footer** (logo e menu)
  * *Telas pequenas (sm)*: o logo é reduzido e centralizado, ocupando uma linha; o menu é centralizado e exibido abaixo do logo, um item por linha;
  * *Telas médias (md)*: o logo é reduzido e centralizado, ocupando uma linha; o menu é centralizado e exibido abaixo do logo;
  * *Telas grandes (lg)*: o logo é alinhado à esquerda; o menu é alinhado à direita.
* **section.cliente img** (lista de imagens de clientes)
  * *Telas pequenas (sm)*: uma imagem por linha;
  * *Telas médias (md)*: duas imagens por linha;
  * *Telas grandes (lg)*: três imagens por linha
* **section.mapa** (mapa de localização) *[seção adicional]*
  * *Telas pequenas (sm)*: é exibido um botão que abrirá a localização no aplicativo de mapas do celular;
  * *Telas médias (md)*: largura máxima da tela e altura de 400px;
  * *Telas grandes (lg)*: largura máxima da tela e altura de 600px.
* **h2, p.descricao** (títulos e textos)
  * *Alinhamento*: centralizado;
  * *Fonte*: seu tamanho é alterado conforme a *media querie*, facilitando a leitura.
