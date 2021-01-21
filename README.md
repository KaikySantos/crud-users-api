# :computer: Instação

```bash
# Clone o repositório:
$ git clone https://github.com/KaikySantos/crud-users-api.git
# Entre na pasta criada:
$ cd crud-users-api
```
### 📦 Rode a API

```bash
# Instale as dependências
$ yarn install

# Inicie a API
$ yarn start
```

```bash
# Recomendo que instale o Insomnia!
https://insomnia.rest/download/
```

## 🚀 Funcionalidades:
### CRUD (CREATE, READ, UPDATE, DELETE)
### Read:

<table>
    <thead>
        <th>MÉTODO</th>
        <th>CAMINHO</th>
        <th>DESCRIÇÃO</th>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/users</td>
            <td>Lista todos os usuários cadastrados.</td>
        </tr>
    </tbody>
</table>

### Create:

<table>
    <thead>
        <th>MÉTODO</th>
        <th>CAMINHO</th>
        <th>DESCRIÇÃO</th>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/users</td>
            <td>Registra novo usuário.</td>
        </tr>
    </tbody>
</table>

#### <b>Observação:</b> <i>É necessário enviar um JSON com essa estrutura:</i>

```
{
	"name": "",
	"phone": "",
	"email": ""
}
```

### Update:

<table>
    <thead>
        <th>MÉTODO</th>
        <th>CAMINHO</th>
        <th>DESCRIÇÃO</th>
    </thead>
    <tbody>
        <tr>
            <td>PUT</td>
            <td>/users/{user_id}</td>
            <td>Edita um usuário já cadastrado.</td>
        </tr>
    </tbody>
</table>

#### <b>Observação:</b> <i>É necessário enviar um JSON com essa estrutura:</i>

```
{
	"name": "",
	"phone": "",
	"email": ""
}
```

### Delete:

<table>
    <thead>
        <th>MÉTODO</th>
        <th>CAMINHO</th>
        <th>DESCRIÇÃO</th>
    </thead>
    <tbody>
        <tr>
            <td>PUT</td>
            <td>/users/{user_id}</td>
            <td>Deleta um usuário específico.</td>
        </tr>
    </tbody>
</table>
