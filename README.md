
# SvconnectSystemClient

![Logo](https://via.placeholder.com/150x50?text=SvconnectSystemClient)  
*Sistema Cliente para Svconnect*  

Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.3.

## 🚀 Começando

### 1. **Clone o repositório**

Para começar a trabalhar com o projeto, primeiro clone este repositório para o ambiente local:

```bash
git clone git@github.com:luissecundes/svconnect-system-client.git
```

### 2. **Instale as dependências**

Instale as dependências do projeto utilizando o NPM:

```bash
cd svconnect-system-client
npm install
```

---

## ⚡ Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute o seguinte comando:

```bash
ng serve
```

Após o servidor estar em execução, abra o navegador e navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer um dos arquivos de origem.

### Arquivo de Configuração de `angular.json`

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "svconnect-system-client": {
      "projectType": "application",
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/svconnect-system-client",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "styles": [
              "@angular/material/prebuilt-themes/azure-blue.css",
              "src/styles.scss",
              "node_modules/ngx-spinner/animations/ball-scale-multiple.css",
              "node_modules/ngx-spinner/animations/ball-spin-clockwise.css"
            ]
          }
        }
      }
    }
  }
}
```

---

## 💡 Scripts

Aqui estão alguns comandos úteis para o desenvolvimento:

| Comando       | Descrição                          |
| ------------- | ----------------------------------- |
| `npm start`   | Inicia o servidor de desenvolvimento com `ng serve` |
| `npm run build` | Cria uma versão de produção do projeto (build). |
| `npm run test`  | Executa os testes com o Jasmine/Karma. |
| `npm run watch` | Observa as mudanças no código e recompila. |

---

## ⚙️ Dependências

Este projeto utiliza as seguintes dependências:

### **Dependências principais**:

- `@angular/material`: Componentes de interface de usuário.
- `ngx-mask`: Máscaras de entrada personalizadas para os formulários.
- `ngx-spinner`: Animações de carregamento para melhorar a experiência do usuário.
- `rxjs`: Biblioteca para programação reativa no Angular.

### **Dependências de desenvolvimento**:

- `@angular-devkit/build-angular`: Ferramenta para construção e compilação do projeto Angular.
- `karma`, `jasmine`: Ferramentas para testes unitários.

Aqui está a configuração do `package.json`:

```json
{
  "name": "svconnect-system-client",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "dependencies": {
    "@angular/cdk": "^19.2.8",
    "@angular/common": "^19.2.4",
    "@angular/core": "^19.2.4",
    "@angular/forms": "^19.2.4",
    "@angular/material": "^19.2.8",
    "ngx-mask": "^19.0.6",
    "ngx-spinner": "^19.0.0",
    "rxjs": "~7.8.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.2.5",
    "@angular/cli": "^19.2.5",
    "karma": "~6.4.0",
    "typescript": "~5.7.2"
  }
}
```

---

## 🎯 Testes

Execute os testes unitários utilizando o Jasmine/Karma:

```bash
ng test
```

---

## 🛠️ Ferramentas e Tecnologias

Este projeto utiliza as seguintes tecnologias:

- **Angular 19.2.3**: Framework para o desenvolvimento de SPAs.
- **SCSS**: Pré-processador CSS.
- **NgRx (se utilizado no projeto)**: Gerenciamento de estado.
- **Node.js**: Ambiente de execução JavaScript.

---

## 🔗 Links Úteis

- [Documentação do Angular](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [Ngx Mask](https://www.npmjs.com/package/ngx-mask)
- [Ngx Spinner](https://www.npmjs.com/package/ngx-spinner)


