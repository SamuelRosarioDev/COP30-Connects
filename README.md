# 🌍 Projeto de Gerenciamento de Voluntários para a COP30

## 📝 Descrição do Projeto

Este projeto foi concebido para ser uma ferramenta essencial na gestão e organização dos voluntários durante o evento da COP30 em Belém, Pará. Nosso objetivo principal é otimizar a coordenação de equipes, a atribuição de tarefas e, consequentemente, facilitar a interação dos voluntários com os visitantes de maneira eficiente e estruturada.

O sistema permite:
- **Cadastro e Perfil de Usuários:** Gerenciar coordenadores e voluntários.
- **Formação de Equipes:** Agrupar voluntários para facilitar a comunicação e a atribuição de responsabilidades.
- **Gestão de Tarefas:** Criar, atribuir e monitorar o status de tarefas em tempo real.
- **Coordenação Otimizada:** Fornecer aos coordenadores uma visão clara do progresso das atividades.

## ⚙️ Diagrama do Banco de Dados

O diagrama abaixo ilustra a estrutura do nosso banco de dados, mostrando as entidades e seus relacionamentos. Ele foi desenhado para ser escalável e suportar a complexidade do evento.

![Diagrama do Banco de Dados](https://github.com/user-attachments/assets/45de910a-44d3-46bb-af4c-4ebb46a2afe1)

## 🚀 Como Executar o Projeto

**Pré-requisitos:**
- Node.js, Git e Docker.
- PostgresSQL, BeekeeperStudio e Hoppscotch.

**Instalação da api:**

1.  Clone o repositório:
    ```bash
    git clone https://github.com/SamuelRosarioDev/COP30-Connects
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd api
    ```
3.  Instale as dependências:
    ```bash
    npm install && npm run dev
    ```

**Configuração do Banco de Dados:**

1.  Crie um banco de dados com o nome `cop30connects`.
2.  Importe o esquema do banco de dados (o diagrama acima).
3.  Configure as credenciais do banco de dados no arquivo `.env`.

**Execução:**

```bash
# Inicie o servidor de desenvolvimento
npm run dev
