// import { message } from 'antd';
import React, { useRef, useState } from 'react'

export const Topbar = () => {
  const buttonType = useRef("");
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleCreate = ()=>{
    buttonType.current="新增資料"
    setIsModalOpen(true)
  } 
  const handleEdit =  ()=>{
    // if (selectedRowKeys[0]!==undefined){
    //   buttonType.current="編輯資料"
    //   // setModifyData(selectedRowKeys[0])
    //   const id = parseInt(selectedRowKeys[0].toString())
    //   const rowData = data.filter(item=>item.id===id)[0]
    //   console.log(rowData)
    //   setIsModalOpen(true)
    // }
    // else{
    //   message.warning("請選擇項目!")
    //   // alert("請選擇項目!")
    // }
  }
  const handleSearch = ()=>{
    // // alert(selectedRowKeys)
    // if (selectedRowKeys[0]!==undefined){
    //   // buttonType.current="編輯資料"
    //   // setIsModalOpen(true)
    // }
    // else{
    //   message.warning("請選擇項目!")
    //   // alert("請選擇項目!")
    // }
  }
  const handleDelete = async()=>{
    // if (selectedRowKeys[0]!==undefined){
    //   if(confirm(`是否要刪除編號${selectedRowKeys}資料?`)){
    //     await axios
    //   .delete(`http://127.0.0.1:8080/api/customer/${selectedRowKeys}`)
    //   .then(()=>
    //   fetchData())
    //   }
    // }
    // else{
    //   message.warning("請選擇項目!")
    // } 
  }

  return (
    <div className='border-[1px] p-2 flex justify-between items-center  rounded-md border-slate-400 w-full mb-2 h-[6%]'>
    <p className='text-2xl font-bold w-32 rounded-md '>客戶資料</p>
    <div className='flex gap-1'>
      <button 
      className='bg-green-400  hover:bg-green-300  border-green-400'
      onClick={handleCreate}>新增</button>
      <button 
      className='bg-yellow-400  hover:bg-yellow-300   border-yellow-400'
      onClick={handleEdit} >編輯</button>
      <button 
      className='bg-blue-400  hover:bg-blue-300  border-blue-400'
      onClick={handleSearch}>查詢歷史資料</button>
      <button 
      className='bg-red-400  hover:bg-red-300  border-red-400 '
      onClick={handleDelete}>刪除</button>
    </div> 
    </div>
  )
};
 