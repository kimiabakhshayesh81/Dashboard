import React from 'react'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { products } from '../../datas';
import { Link } from 'react-router-dom';
import './Product.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function Product() {
  const [productsData , setProductsData] = useState(products)

  const productDelete = productID => {
    setProductsData(productsData.filter(user => user.id !== productID))
  }

  const columns = [
    {
      field : 'id',
      headerName : 'ID',
      width : 90
    },
    {
      field : 'title',
      headerName : 'Name',
      width : 200,
      renderCell : (params) => {
        return(
          <Link to='/' className='link'>
            <div className='userListUser'>
              <img src={params.row.avatar} className='userListImg'/>
              {params.row.name}
            </div>
          </Link>
        )
      }
    },

    {
      field : 'price',
      headerName : 'Price',
      width : 180
    },

    {
      field : 'action',
      headerName : 'Action',
      width : 180,
      renderCell : (params) => {
        return(
          <>
          <Link to={`/product/${params.row.id}`} className='link'>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutlineIcon 
          className='userListDelete'
          onClick = {() => productDelete(params.row.id)}
          />
          </>

        )
      }
    },
  ]

  return (
    <div className='ContainerProductList'>
      <DataGrid checkboxSelection rows={productsData} columns={columns} pageSizeOptions={2} />
    </div>
  )
}


