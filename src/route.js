import NewUser from "./pages/NewUser/NewUser"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"
import UserList from "./pages/user/UserList"

let routes = [
    {path : '/' , element: <Home/>},
    {path : '/user' , element: <UserList/>},
    {path : '/product' , element: <Product/>},
    {path : '/newuser' , element:<NewUser/>}
]

export default routes