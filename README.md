# Cartão Digital - Rian Nicolau Advogado

Este projeto é um Cartão de Visita Digital interativo desenvolvido para o advogado Rian Nicolau. Ele permite que clientes entrem em contato facilmente via WhatsApp, localizem o escritório, salvem o contato na agenda e compartilhem o cartão via QR Code.

## 🚀 Tecnologias

O projeto foi construído com as seguintes tecnologias principais:

-   **React** (v18)
-   **TypeScript**
-   **Vite** (Build tool e dev server)
-   **Lucide React** (Ícones modernos)
-   **QRCode.react** (Geração de QR Code para compartilhamento)
-   **CSS Modules** (Estilização isolada e organizada)

## ✨ Funcionalidades

-   **Perfil Profissional:** Exibe foto, nome (com fonte Cinzel), cargo e slogan.
-   **Ações de Contato:**
    -   **WhatsApp:** Botão "Falar agora" que abre diretamente o chat.
    -   **Endereço:** Link direto para o Google Maps.
    -   **Salvar Contato:** Gera e baixa automaticamente um arquivo `.vcf` (vCard) para a agenda do celular.
    -   **Compartilhar:** Exibe um QR Code na tela para facilitar o compartilhamento presencial.
-   **Redes Sociais:** Links diretos para Instagram, TikTok e Facebook.
-   **Design Premium:** Paleta de cores em Azul Marinho (#051024) e Dourado (#D4AF37), transmitindo seriedade e elegância.

## 📦 Instalação e Uso

1.  **Clone o repositório** (se aplicável) ou baixe os arquivos.
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O projeto estará rodando em `http://localhost:5173`.

4.  **Para gerar a versão de produção (Build):**
    ```bash
    npm run build
    ```
    Os arquivos estáticos serão gerados na pasta `dist`.

## 📱 Estrutura do Projeto

-   `src/components`: Componentes reutilizáveis (Header, ContactActions, SocialLinks, ShareModal).
-   `src/data`: Dados do perfil (fácil de editar em `Data.ts`).
-   `src/styles`: Estilos globais e variáveis CSS.
-   `src/utils`: Gerador de vCard.

## 📄 Licença

Este projeto foi desenvolvido por **TamarAI**.
Todos os direitos reservados © 2025.
