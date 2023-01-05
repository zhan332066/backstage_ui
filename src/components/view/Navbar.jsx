import React, { useRef, useState } from 'react'
import {
  GoldOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  TeamOutlined,
  ReconciliationOutlined,
  IdcardOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import {  Menu } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'
 
function getItem(
  label,
  key,
  icon,
  children
) {
  return {
    key,
    icon,
    children,
    label,
  } 
}

const Navbar  = () => {
  const [mode, setMode] = useState('inline')
  const [theme, setTheme] = useState('light')
  const isClick = useRef(false)
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline')
  }

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light')
  }
  const token = useSelector((state) => state.userSlice.token)

  const dispatch = useDispatch()

  const items  = [
    getItem(
      <Link to="/">Dashboard</Link>,
      '0',
      <DashboardOutlined style={{ fontSize: '24px' }} />
    ),
    getItem(
      <Link to="/product">產品資料</Link>,
      '1',
      <GoldOutlined style={{ fontSize: '24px' }} />
    ),
    getItem(
      <Link to="/order">銷貨資料</Link>,
      '2',
      <DollarOutlined style={{ fontSize: '24px' }} />
    ),
    getItem(
      <Link to="/purchase">進貨資料</Link>,
      '3',
      <ShoppingCartOutlined style={{ fontSize: '24px' }} />
    ),
    getItem(
      <Link to="/manufacturer">廠商資料</Link>,
      '4',
      <ShopOutlined style={{ fontSize: '24px' }} />
    ),
    getItem(
      <Link to="/customer">客戶資料</Link>,
      '5',
      <TeamOutlined style={{ fontSize: '24px' }} />
    ),
    getItem(
      <Link to="/rne">收支表</Link>,
      '6',
      <ReconciliationOutlined style={{ fontSize: '24px' }} />
    ),
    getItem(
      <Link to="/permissions">權限表</Link>,
      '7',
      <IdcardOutlined style={{ fontSize: '24px' }} />
    ),
    getItem(
      <Link onClick={() => dispatch(logout())} to="/">
        登出
      </Link>,
      '8',
      <LogoutOutlined
        onClick={() => dispatch(logout())}
        style={{ fontSize: '24px' }}
      />
    ),
  ]

  return (
    <div>
      {' '}
      {token === '' ? (
        <></>
      ) : (
        <Menu
          className="w-[5.5%] min-w-[80px] h-screen focus:absolute top-0 left-0 z-50 focus:w-[12%] backdrop-blur-xl bg-slate-600 text-white rounded-r-lg"
          mode={mode}
          theme={theme}
          items={items}
        />
      )}
    </div>
  )
}

export default Navbar
