
import ListaProductos from "../components/ListaProductos";
import NavbarDashboard from "../components/NavbarDashboard";
const Dashboard = ()=>{
    return(
        <div>
            <NavbarDashboard/>
            <div>
                <ListaProductos/>
            </div>
        </div>
        
    )
}
export default Dashboard;