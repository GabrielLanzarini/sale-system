# Rotas da API e funções 
## Rotas Adm
- **`POST /adm/login`**
- A rota deve receber `username`, `password`, dentro do corpo da requisição.
- Com o login bem sucedido ele armazenará um JWT nos cookies da sessão.
- Ela deve ser armazenada dentro de um objeto com o seguinte formato :
```JSON
{
	"username": string,
	"password": string
}
```
>  Para o login ser bem sucedido o administrador deve existir no banco de dados.

- **`POST /product/create`**
- A rota deve receber `name`, `description`, `photo`, `amount` e `value` dentro do corpo da requisição.
- Ela deve ser armazenada dentro de um objeto com o seguinte formato:
```JSON
{
	"name": string,
	"description": string,
	"photo": string,
	"amount": number,
	"value": number
}
```

- **`PUT /adm/updatePass`**
- A rota deve receber `password` e `newPassword`,dentro do corpo da requisição.
- Ela deve ser armazenada dentro de um objeto com o seguinte formato:
```JSON
{
	"password": string,
	"newPassword": string
}
```

- **`PUT /adm/updatePass`**
- A rota deve receber `username` e `password`,dentro do corpo da requisição.
- Ela deve ser armazenada dentro de um objeto com o seguinte formato:
```JSON
{
	"username": string,
	"password": string
}
```

- **`DELETE /product/delete/:id`**
- A rota deve receber `id`, nos parametros da requisição.

## Rotas Usuário
- **`POST /user/create`**
- A rota deve receber `name`, `last_name`, `cpf``, `username`, `password` e `email`, dentro do corpo da requisição.
- Ela deve ser armazenada dentro de um objeto com o seguinte formato:
```JSON
{
	"name": string,
	"last_name": string,
	"cpf": string,
	"username": string,
	"password": string,
	"email": string
}
```

- **`POST /user/login`**
- A rota deve receber `name`, `last_name`, `cpf``, `username`, `password` e `email`, dentro do corpo da requisição.
- Ela deve ser armazenada dentro de um objeto com o seguinte formato:
```JSON
{
	"user": string,
	"password": string,
}
```

- **`PUT /product/sell/:id`**
- A rota deve receber `amount` dentro do corpo da requisição e `id` nos parametros.
- Ela deve ser armazenada dentro de um objeto com o seguinte formato:
```JSON
{
	"amount": number
}
```

- **`PUT /user/updatePass`**
- A rota deve receber `password` e `newPassword` dentro do corpo da requisição.
- Ela deve ser armazenada dentro de um objeto com o seguinte formato:
```JSON
{
	"password": "12345",
	"newPassword": "12345"
}
```

- **`GET /user/requests`**
- A rota retorna as requests do usuário logado.

- **`GET /user/infos`**
- A rota retorna as infos do usuário logado.

- **`GET /user/delete`**
- A rota deleta o usuário logado.


- **`POST /logout`**
- A rota apaga o cookie JWT armazenado.
