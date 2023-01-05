import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { useState } from 'react'
import { message } from 'antd'
import axios from 'axios'
import { newPermission } from '../api/permission'

const getCustomerData = async () => {
  console.log('come inside')
  // Load hash from your password DB.
  const {hash ,salt}= await newPermission('moocelife')
  // console.log(hashpwd, salt)
  const data = {}
  await axios
    .post('http://127.0.0.1:8080/permission', {
      account: 'root',
      pwd: hash,
      salt: salt,
      name: '管理者',
      permission: 'root',
      status: 1,
      note: '',
    })
    .then((res) => {
      console.log(res.data)
    })
}
const Login = () => {
  const dispatch = useDispatch()
  const [account, setAccount] = useState('')
  const [pwd, setPwd] = useState('')
  const background_url =
    'https://pse.is/4pjswf'

  const handleLogin = async () => {
    if (account === '' || pwd === '') {
      message.warning('請輸入資料!')
      return
    }
    await axios.post('').then((res) => {
      dispatch(login('abc'))
    })
  }
  useEffect(() => {
    if (account === '') {
      getCustomerData()
      setAccount('a')
    }
  }, [])
  return (
    <div className="static h-full w-full flex justify-center">
      <img className="absolute  z-0 h-full w-full" src={background_url} />
      <div className=" border-l-2 border-t-2 border-white h-2/3 w-2/3 max-w-lg bg-white/50 backdrop-blur-sm flex flex-col self-center justify-center rounded-2xl hover:shadow-xl">
        <div className="text-2xl w-2/3 h-2 flex self-center">
          <p className="relative text-blue-400  top-0 left-4 ">Account</p>
        </div>
        <div className="w-2/3 h-16 flex self-center m-2 p-2 border-2 border-white/50 rounded-md ">
          <input
            className="pl-2 self-center w-full rounded-md text-2xl"
            type="text"
            value={account}
            onChange={(e) => {
              setAccount(e.target.value)
            }}
          />
        </div>
        <div className="text-2xl w-2/3 h-2 flex self-center">
          <p className=" relative text-blue-400 top-0 left-4 ">Password</p>
        </div>
        <div className="w-2/3 h-16 flex self-center m-2 p-2 border-2 border-white/50 rounded-md ">
          <input
            className="pl-2 self-center w-full rounded-md text-2xl"
            type="password"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value)
            }}
          />
        </div>
        <div className="w-2/3 flex self-center justify-end  m-2 ">
          <button
            className="bg-blue-400 p-2 rounded-md text-3xl h-fit "
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
