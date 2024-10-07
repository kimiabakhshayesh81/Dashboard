import React from 'react'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import './UserList.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'


export default function UserList() {

  let userRow = [
    {
      id : 1,
      username : 'Ali',
      avatar : 'download.png',
      status : 'active',
      transaction : '$100'
    },
    {
      id : 2,
      username : 'Reza',
      avatar : 'download.png',
      status : 'active',
      transaction : '$800'
    },
    {
      id : 3,
      username : 'Ida',
      avatar : 'download.png',
      status : 'active',
      transaction : '$500'
    },
    {
      id : 4,
      username : 'Mohammad',
      avatar : 'download.png',
      status : 'active',
      transaction : '$10'
    },
  ]

  const [userData , setUserData] = useState(userRow)

  const userDelete = (userID) => {
    setUserData(userData.filter(user => user.id !== userID))
  }

  const columns = [
    {
      field : 'id',
      headerName : 'ID',
      width : 90
    },
    {
      field : 'user',
      headerName : 'User',
      width : 200,
      renderCell : (params) => {
        return(
          <Link to='/' className='link'>
            <div className='userListUser'>
              <img src={params.row.avatar} className='userListImg'/>
              {params.row.username}
            </div>
          </Link>
        )
      }
    },

    {
      field : 'status',
      headerName : 'Status',
      width : 200
    },

    {
      field : 'transaction',
      headerName : 'Transaction',
      width : 200
    },

    {
      field : 'action',
      headerName : 'Action',
      width : 200,
      renderCell : (params) => {
        return(
          <>
          <Link to={`/user/${params.row.id}`} className='link'>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutlineIcon 
          className='userListDelete'
          onClick = {() => userDelete(params.row.id)}
          />
          </>

        )
      }
    },
  ]

  return (
    <div className='ContainerUsertList'>
      <DataGrid rows={userRow} columns={columns} pageSizeOptions={2} />
    </div>
  )
}
