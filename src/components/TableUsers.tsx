import { UserType } from '@/types'
import { CheckIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { TableCellsIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import DetailsUser from './DetailsUser';
import { deleteUser } from '@/helpers';

interface TableUsersProps {
  data: UserType[];
  total: number;
  page: number;
  deleteUserFlag: Dispatch<SetStateAction<boolean>>;
}

const TableUsers = (props: TableUsersProps) => {
  const [showModal, setshowModal] = useState(false)
  const [userId, setUserId] = useState('');
  const [showModalDelete, setshowModalDelete] = useState(false)

  console.log("🚀 ~ TableUsers ~ props.data:", props.data)

  const handleDelete = (id: string) => {
    deleteUser(id).then(() => {
      setUserId(id)
      setshowModalDelete(true)
      props.deleteUserFlag(true);
    })
  }

  return (
    <>
      {
        props.data.length === 0
          ? <div>Cargando...</div>
          : (
            <div className="">
              <div className="mx-auto max-w-7xl">
                <div className="py-5 border border-b-2">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 flow-root">
                      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                          <table className="min-w-full divide-y divide-gray-700">
                            <thead>
                              <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">
                                  Id
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                                  Nombres y apellidos
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                                  Foto
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                                  Acciones
                                </th>
                                {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                          </th> */}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                              {props.data.map((user) => (
                                <tr key={user.id}>
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">
                                    {user.id}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{`${(user.title === "ms" || user.title === "mrs") && "Srta." || user.title === "mr" && "Sr."}  ${user.firstName} ${user.lastName}`}</td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                    <img
                                      className='h-10 w-10 rounded-full'
                                      src={user.picture}
                                    />
                                  </td>
                                  <td className="relative whitespace-nowrap flex gap-1 items-center py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <div>
                                      <TrashIcon
                                        className='h-6 w-6 cursor-pointer'
                                        onClick={() => {
                                          handleDelete(user.id)
                                        }}
                                      />
                                    </div>

                                    <div>
                                      <PencilSquareIcon
                                        className='h-6 w-6 cursor-pointer'
                                        onClick={() => alert("editar")}
                                      />
                                    </div>

                                    <div>
                                      <TableCellsIcon
                                        className='h-6 w-6 cursor-pointer'
                                        onClick={() => {
                                          setUserId(user.id)
                                          setshowModal(true)
                                        }}
                                      />
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className='flex flex-row gap-2'>
                  <span 
                    className='font-bold'
                  >
                    Anterior
                  </span>
                  <span 
                    className='font-bold'
                  >
                    Siguiente
                  </span>
                </nav>
              </div>
            </div>
          )
      }

      <Dialog open={showModal} onClose={setshowModal} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <DetailsUser
                id={userId}
                setShowModal={setshowModal}
              />
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog open={showModalDelete} onClose={setshowModalDelete} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon aria-hidden="true" className="size-6 text-green-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Usuario eliminado con exito
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      El usuario con ID <strong>{userId}</strong> ha sido eliminado del sistema.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={() => setshowModalDelete(false)}
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cerrar 
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default TableUsers