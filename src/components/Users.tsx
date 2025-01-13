'use client'

import React, { useEffect, useState } from 'react'
import TableUsers from './TableUsers'
import { UserCircleIcon } from '@heroicons/react/16/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import CreateUser from './CreateUser'
import { getUsers } from '@/helpers'
import { UsersType } from '@/types'

const Users = () => {

  const [users, setUsers] = useState<UsersType>()
  const [deleUser, setDeleUser] = useState(false)
  const [page, setPage] = useState(0)
  console.log("🚀 ~ Users ~ page:", page)

  useEffect(() => {
     getUsers().then((users) => {
      setUsers(users)
     })
  }, [deleUser])

  console.log("🚀 ~ Users ~ users:", users)
  

  return (
    <>
      <div className='flex w-full flex-row bg-user text-white h-16'>
        <div className='w-9/12'>
          <span className='w-full block text-[25px] ml-10 leading-[64px]'>
            Módulo de Consulta y Registro de Usuarios al Sistema
          </span>
        </div>
        <div className='w-1/4 flex justify-end mr-10 items-center gap-3'>
          <span>
            <Bars3Icon
              className='h-10 w-10'
            />
          </span>
          <span>
            <UserCircleIcon
              className='h-10 w-10'
            />
          </span>
        </div>
      </div>
      <CreateUser/>
      <TableUsers 
        data={users?.data || []}
        page={users?.page || 0}
        total={users?.total || 0}
        deleteUserFlag={setDeleUser}
      />
    </>
  )
}

export default Users