## 📖 nodejs---lib

Uma ferramenta simples desenvolvida em Node.js para análise de textos com o objetivo de detectar **palavras repetidas** em **cada parágrafo individualmente**. Ideal para revisores, escritores e desenvolvedores que queiram identificar repetições excessivas em seus textos.

* Lê um ou mais parágrafos de texto;
* Analisa palavra por palavra;
* E detecta **palavras repetidas** dentro de **cada parágrafo separadamente**.
---

### ✅ Funcionalidades

* 🔍 Análise de palavras repetidas **por parágrafo**
* 📂 Leitura de arquivos `.txt`
* 📊 Relatório de repetição com contagem de ocorrências
* 🧹 Ignora pontuação e diferencia maiúsculas/minúsculas

---

### 📁 Estrutura do Projeto

```
nodejs---lib/
├── arquivos/           # Textos de entrada (.txt)
├── resultados/         # Relatórios de saída (.txt ou .json)
├── src/                # Código-fonte principal
│   └── analisador.js   # Lógica de leitura e análise de repetição
├── .gitignore
└── package.json
```

---

### 🚀 Como Usar

1. Coloque seu arquivo `.txt` dentro da pasta `arquivos/`.

2. Execute o script de análise com:

```bash
node src/analisador.js arquivos/nomedoarquivo.txt
```

3. Veja o resultado no terminal ou na pasta `resultados/`.

---

### 💡 Exemplo de Uso

#### Texto de entrada:

```
Este é um parágrafo de exemplo. Este parágrafo possui palavras que se repetem, como este, parágrafo e palavras.
Outro parágrafo pode conter outras palavras. Palavras como pode, palavras e outras podem se repetir.
```

#### Saída esperada:

```
Parágrafo 1:
- este: 3x
- parágrafo: 2x
- palavras: 2x

Parágrafo 2:
- palavras: 2x
- pode: 2x
- outras: 2x
```

---

### 🛠️ Tecnologias Usadas

* [Node.js](https://nodejs.org/) – Plataforma base
* [`fs`](https://nodejs.org/api/fs.html) – Para leitura de arquivos
* [commander](https://www.npmjs.com/package/commander) – Para criação de comandos via terminal
* [chalk](https://www.npmjs.com/package/chalk) – Para colorir a saída no terminal
* Expressões Regulares – Para limpeza e análise de texto

---

### ✍️ Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

### 📄 Licença

pending...

---

