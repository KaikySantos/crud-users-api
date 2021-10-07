# :computer: How work ?

```bash
# Clone this repository
$ git clone https://github.com/KaikySantos/crud-users-api.git
# Access the project folder
$ cd crud-users-api
```
### 📦 Rode a API

```bash
# Install the dependencies
$ yarn install

# Run the application
$ yarn start
```

```bash
# I recommend installing insomnia:
https://insomnia.rest/download/
```

## 🚀 Functionalities:
### CRUD (CREATE, READ, UPDATE, DELETE)
### Read:

<table>
    <thead>
        <th>HTTP</th>
        <th>PATH</th>
        <th>DESCRIPTION</th>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/users</td>
            <td>List all registered users.</td>
        </tr>
    </tbody>
</table>

### Create:

<table>
    <thead>
        <th>HTTP</th>
        <th>PATH</th>
        <th>DESCRIPTION</th>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/users</td>
            <td>Register new user.</td>
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
        <th>HTTP</th>
        <th>PATH</th>
        <th>DESCRIPTION</th>
    </thead>
    <tbody>
        <tr>
            <td>PUT</td>
            <td>/users/{user_id}</td>
            <td>Edit an already registered user.</td>
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
        <th>HTTP</th>
        <th>PATH</th>
        <th>DESCRIPTION</th>
    </thead>
    <tbody>
        <tr>
            <td>PUT</td>
            <td>/users/{user_id}</td>
            <td>Deletes a specific user.</td>
        </tr>
    </tbody>
</table>
