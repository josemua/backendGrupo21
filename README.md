# Grupo21_Divergentes

Proyecto Grupo 21 Ciclo 3 MinTIC
Jose Fernando Muñoz Alvarez;


Para instalar las dependencias usamos npm install, 
Para empezar el servidor usamos npm start (es necesario tener nodemon instalado como dependencia global o instalarlo usando: npm install nodemon -g),
usando postman podemos probar los métodos y las rutas usando los modelos:
http://localhost:3000/api/auth/register - post - Registrar un usuario (requiere: username, email y password - opcionales: isAdmin, status)
http://localhost:3000/api/auth/login - Post - autenticar un usuario (requiere username y password de un ususario ya registrado) - Si no tienes acceso a la base de datos de Mongodb, Postman dará un user_id y un token) - necesitas el token para autenticarte y poder realizar las funciones de la página. En headers, usar llave token y como value usar la siguiente formula: Bearer token - (importante el espacio despues del Bearer)
http://localhost:3000/api/users/6165b1a04465731419fcb175 - Get - obtener usuario
http://localhost:3000/api/users/6165b1a04465731419fcb175 - Post - actualizar usuario
http://localhost:3000/api/products/ - get - Obtener todos los productos

Admin
Logearse como admin y guardar el token. En headers, usar llave token y como value usar la sguiente formula: Bearer + " " + token
{
"username": "admin",
"password": "1234"
}
http://localhost:3000/api/users/find/6165c0db8d44551212aeb69b - Get -  se puede reemplazar el id por el de cualquier usuario
http://localhost:3000/api/users/ - Get - obtener todos los usuarios
http://localhost:3000/api/users?new=true - Get - obtener los ultimos 5 usuarios registrados
http://localhost:3000/api/users/stats - Get - estadisticas de usuarios registrados por mes
http://localhost:3000/api/products/ - Post - Agregar un producto (require: name, desc, img, price, available. opcionales: categories, size, color)
http://localhost:3000/api/orders/income - Get - estadisticas de ganancias los dos ultimos meses
se siguen las mismas rutas cambiando 
http://localhost:3000/api/cart - carrito
http://localhost:3000/api/orders - ordenes
