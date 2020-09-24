# :computer: Instalation 

```bash
# Clone the Repository
$ git clone https://github.com/KaikySantos/crud-users-api.git
# Go to folder
$ cd crud-users-api
```
### 📦 Run API

```bash
# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

```bash
# Install Insomnia Core
https://insomnia.rest/download/
```

## 🚀 Functionalities:

### Read:

<table>
    <thead>
        <th>HTTP METHOD</th>
        <th>ADRESS</th>
        <th>DESCRIPTION</th>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>http://localhost:3333/users</td>
            <td>List all registered users</td>
        </tr>
    </tbody>
</table>

### Create:

<table>
    <thead>
        <th>HTTP METHOD</th>
        <th>ADRESS</th>
        <th>DESCRIPTION</th>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>http://localhost:3333/users</td>
            <td>Register new user</td>
        </tr>
    </tbody>
</table>

#### <b>Observation:</b> <i>It is necessary to send a JSON with this structure:</i>

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
        <th>HTTP METHOD</th>
        <th>ADRESS</th>
        <th>DESCRIPTION</th>
    </thead>
    <tbody>
        <tr>
            <td>PUT</td>
            <td>http://localhost:3333/users/{user_id}</td>
            <td>Update already registered user</td>
        </tr>
    </tbody>
</table>

#### <b>Observation:</b> <i>It is necessary to send a JSON with this structure:</i>

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
        <th>HTTP METHOD</th>
        <th>ADRESS</th>
        <th>DESCRIPTION</th>
    </thead>
    <tbody>
        <tr>
            <td>PUT</td>
            <td>http://localhost:3333/users/{user_id}</td>
            <td>Delete already registered user</td>
        </tr>
    </tbody>
</table>
