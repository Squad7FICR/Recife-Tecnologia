# Recife-Tecnologia

Projeto dos alunos da residência tecnológica II, do porto digital.

## Desafio:

`criar uma dashboard onde possa ser montado um relatório de forma automatizada por período (data de X à Y; Mensal; Trimestral; Semestral; Anual)`

## Tecnologias usadas até o momento:

`FrontEnd: React + CSS`
`BackEnd: none`
`Servidores: POWERBI, FIREBASE (AUT USERS.), SQL`

## Notas para o usuario:
> O projeto conta com email e senha padrão para testes, ```squad7@gmail.com (email) + teste123 (senha)```
Caro usuário, nesta versão do projeto você precisará seguir estes passos:

# Windows 



## 1º Instalação do Node.JS
- Acessar o site
```https://nodejs.org/en```

> Obs: Geralmente é melhor instalar a versão LTS, pois é a mais estável.
> No projeto, está sendo usada a versão ```20.10.0```, mas qualquer uma acima disso irá funcionar perfeitamente. 


## 2° Instalação do NPM
O NPM é um gerenciador de pacotes para o Node.js, uma plataforma que permite executar código JavaScript no lado do servidor. Para instalar o NPM, você precisa primeiro instalar o Node.js no seu sistema operacional.

> O NPM será instalado automaticamente após a instalção do Node.JS.


## Checando se tudo ocorreu bem
- Você deverá digitar no ```CMD``` ou no ```POWERSHELL``` o seguinte comando:
  ```
  NODE -V
  ```
- A seguinte tela deverá aparecer:
  ![image](https://github.com/Squad7FICR/Recife-Tecnologia/assets/122830909/bdacb59a-e797-49f5-bf7a-d1b27ef4fe4e)

 - Seguindo a lógica do Node, você deverá digitar também no ```CMD``` ou ```POWERSHELL```
   ```
   NPM -V
   ```
> Obs: Se der erro em alguma dessas etapas, certifique que você está digitando o código corretamente e/ou se você reiniciou a máquina.

# Linux

> Instalará a última versão disponível no package.

## Instalação do Node.js e do NPM no Linux

Dependendo da distribuição Linux que você está usando, você pode instalar o Node.js e o NPM usando o gerenciador de pacotes do seu sistema ou baixando o código fonte.

### Usando o gerenciador de pacotes

- Para distribuições baseadas em Debian e Ubuntu, você pode usar o seguinte comando:

```bash
sudo apt-get install nodejs npm
```
 
- Para distribuições baseadas em Fedora, você pode usar o seguinte comando:
```sudo dnf install nodejs npm```


- Para distribuições baseadas em Arch Linux, você pode usar o seguinte comando:
```sudo pacman -S nodejs npm```

# Baixando o código fonte
> Obs: Baixando o código fonte, você consegue escolher a versão de sua prefererência.

- Se você preferir instalar o Node.js e o NPM a partir do código fonte, siga os seguintes passos:

  - Acesse o site oficial do Node.js ```(https://nodejs.org/en/download/)``` e baixe o arquivo tar.gz da 
    versão desejada.
  - Extraia o arquivo em um diretório de sua escolha.
  - Abra um terminal e navegue até o diretório onde você extraiu o arquivo.
  - Execute os seguintes comandos para configurar e compilar o Node.js: 
    ```
    ./configure
    make
    sudo make install
    ```

## Verificando a instalação
- Para verificar se a instalação foi bem sucedida, abra um terminal e digite os seguintes comandos:
  ```
  node -v
  npm -v
  ```
  


#Instalando os pacotes e configurando o ambiente para rodar em ambiente local:

##Abra seu editor de texto ou ide.
> Neste exemplo, utilizarei o visual studio.

- Abra o terminal da sua ide e certifique que o projeto está na pasta correta!
  -Se não estiver, você deverá entrar na pasta correta usando o comando ```cd Recife-Tecnologia```
> Se tudo estiver ok, como o exemplo abaixo:
> ![image](https://github.com/Squad7FICR/Recife-Tecnologia/assets/122830909/66968d2f-9357-4a6f-95f6-ef04555474bb)

- Você deverá iniciar o npm dentro do seu repositório local.
```
npm init -y
```
- Após o npm inicializar e configurar todo o ambiente local, você deverá instalar as dependencias adicionais.
```
npm install
```
> Obs: esse processo tende a ser demorado, se sua conexão com a internet for boa, rapidamente será instalado.
- Se tudo ocorrer bem, você deverá utilizar o comando:
```
npm run dev
```
- ![image](https://github.com/Squad7FICR/Recife-Tecnologia/assets/122830909/07f54e6b-ef64-489a-805a-a6c05bc80a55)
 - Clicando com o ```ctrl + botão esq. mouse```, você conseguirá rodar normalmente o aplicativo web.
