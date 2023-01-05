import React, { useState } from 'react'
import { Modal } from 'antd'
import { Button } from 'antd/es/radio'
import type { ColumnsType } from 'antd/es/table'; 

 const ModalTable:React.FC<{buttonType:string,isModalOpen:boolean,columns:ColumnsType<any>}> = ({buttonType,isModalOpen,columns}) => {
  const [modifyData,setModifyData] = useState({})
  const [isOk,setisOk] = useState(false)
  const [isCancel,setisCancel] = useState(false)

  const handleOK = ()=>{
    setisOk(false)

  }
  const handleCancel = () =>{
  }

  const handleModifyData=(e:any)=>{ 
    setModifyData((prev)=>( 
    {
      ...prev,
      [e.target.id.toString()] : e.target.value
    }))
  }
  return (
    <>
      <Modal title={buttonType} 
        open={isModalOpen}   
        footer={
          [
            <Button  onClick={handleOK}>
            取消
            </Button>,
            <Button  onClick={handleCancel}>
              確認
            </Button>,
          ]
        }
        >
            { 
            <div></div>
            // columns.map((item)=> {
            //   return (<div>
            //     <p>
            //       <span >{item.title}</span>：
            //       <input 
            //       className='border-2 w-full border-slate-200 rounded-md p-1 mb-1' 
            //       type="text" 
            //       id={item.dataIndex}
            //       onChange={(e)=>{handleModifyData(e)}}/>
            //     </p>
                
            //   </div>)
            //  }) 
             }
    </Modal>
    </>
  )
}

export default ModalTable