import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/view/Navbar'
import { Dashboard } from './components/pages/Dashboard'
import { Product } from './components/pages/Product'
import { Order } from './components/pages/Order'
import { Purchase } from './components/pages/Purchase'
import { Manufacturer } from './components/pages/Manufacturer'
import { Customer } from './components/pages/Customer'
import { Rne } from './components/pages/Rne'
import { Permissions } from './components/pages/Permissions'
import Login from './components/pages/Login'

export const App = () => {
  document.title = 'Mooce 後台管理平台'
  return (
    <div className="w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/rne" element={<Rne />} />
        <Route path="/permissions" element={<Permissions />} />
      </Routes>
    </div>
  )
}
