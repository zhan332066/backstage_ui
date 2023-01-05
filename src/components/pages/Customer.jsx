import React, { useEffect, useRef, useState } from 'react'
import ContentTable from '../view/ContentTable'
import { Topbar } from '../view/Topbar'
import { getCustomer } from '../api/fatchdata'

 
const columns = [
  {
    title: '廠編',
    dataIndex: 'id',
    render: (id) => `C${id.toString().padStart(3, '0')}`,
    sorter: (a, b) => a.id - b.id,
    width: '10%',
    fixed: 'left',
  },
  {
    title: '名稱',
    dataIndex: 'name',
    width: '15%',
    filters: [],
    onFilter: (value, record) =>
      record.name.startsWith(value.toString()),
    filterSearch: true,
    fixed: 'left',
  },
  {
    title: '電話',
    dataIndex: 'phone',
    width: '10%',
    filters: [],
    onFilter: (value, record) =>
      record.phone.startsWith(value.toString()),
    filterSearch: true,
  },
  {
    title: '地址',
    dataIndex: 'address',
    filters: [],
    onFilter: (value, record) =>
      record.address.startsWith(value.toString()),
    filterSearch: true,
  },
  {
    title: '備註',
    dataIndex: 'note',
    filters: [],
    onFilter: (value, record) =>
      record.note.startsWith(value.toString()),
    filterSearch: true,
  },
]

export const Customer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getCustomerData = async () => {
      const response_data = await getCustomer()
      setData(response_data)
    }

    if (data.length === 0) {
      getCustomerData()
      // console.log(data)
    }
  }, [data])

  return (
    <div className="bg-yellow-50 contain ">
      <Topbar />
      <ContentTable data={data} columns={columns} />
    </div>
  )
}
