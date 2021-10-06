const SidebarItems = [
    {
        name: "Inicio",
        route: '/'
    },
    {
        name: "Estadísticas",
        route: "/userList"
    },
    {
        name: "Usuarios",
        route: "/user/:userId"
    },
    {
        name: "Nuevo Usuario",
        route: "/newUser"
    },
    {
        name: "Producto",
        route: "/newproduct"
    },
    {
        name: "Ventas",
        route: "/productList"
    },
    {
        name: "Reportes",
        route: "/product/:productId"
    },
];

export default SidebarItems;