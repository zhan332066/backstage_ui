import React, { useEffect , useState } from 'react';
import { Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table'; 
import { FilterValue} from 'antd/es/table/interface';

 


 
  
const ContentTable = ({data,columns}) => {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{ 
    if (data.length>0){
      console.log(data)
    }
    
  },[data])
  // const [data, setData] = useState([]);
  
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const [tablesize,setTableSize] = useState({x:0,y:0})


  useEffect(() => {
    const x = window.innerWidth -80
    const y = window.innerHeight - 180
    setTableSize({x:x,y:y})
    
  }, []);

  // useEffect(() => {

  //   console.log(modifyData)  
  // }, [modifyData]);

  // const handleTableChange = (
  //   pagination: TablePaginationConfig,
  //   filters: Record<string, FilterValue>,
  //   sorter: SorterResult<DataType>,
  // ) => {
  //   setTableParams({
  //     pagination,
  //     filters,
  //     ...sorter,
  //   });
  // };
 
  // const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  //   console.log('selectedRowKeys changed: ', newSelectedRowKeys);
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };

  // const rowSelection: TableRowSelection<DataType> = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  //   hideSelectAll:true,
  //   type:'radio'
  // }

  


  return (
    <div className='z-10 h-full'> 
       
        <div className='border-[1px] h-fit border-slate-400 rounded-md p-2'>
          <Table
          className='rounded-md '
          columns={columns}
          rowKey={(record) => record.id}
          // rowSelection={rowSelection}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          sticky={true}
          // onChange={handleTableChange}
          scroll={{x:tablesize.x,y:tablesize.y}}
          // onRow={(record)=>{
          //   return {
          //     onClick:(e)=>{onSelectChange([record.id])}
          //   }
          // }}
          >
            
          </Table>
         
        </div> 
    </div>
    
    
  );
};

export default ContentTable;