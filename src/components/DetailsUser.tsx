import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { getUserDetails } from '@/helpers';
import { UserDetailType } from '@/types';


interface DetailsUserProps {
  id: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const DetailsUser = (props: DetailsUserProps) => {

  const [user, setUser] = useState<UserDetailType>()

  useEffect(() => {
    getUserDetails(props.id).then((user) => {
      console.log("🚀 ~ getUserDetails ~ user:", user)
      setUser(user)
    })
  }, [props.id])

  return (
    <>
      {
        !user
          ? <span>Cargando....</span>
          : (
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base/7 font-semibold text-gray-900">Detalle del Usuario</h2>

                  <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-6">
                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="id" className="block text-sm/6 font-medium text-gray-900">
                        Id
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="id"
                            name="id"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.id}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                        Titulo
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.title}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                        Nombres
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.firstName}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                        Apellidos
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.lastName}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="picture" className="block text-sm/6 font-medium text-gray-900">
                        Imagen
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="picture"
                            name="picture"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.picture}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                        Genero
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="gender"
                            name="gender"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.gender}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Correo electronico
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.email}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="dateOfBirth" className="block text-sm/6 font-medium text-gray-900">
                        Fecha de nacimiento
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.dateOfBirth}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-4 mt-2 flex items-center gap-2">
                      <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                        Telefono
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <input
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="janesmith"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            value={user.phone}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-end gap-x-3">
                <button onClick={()=> props.setShowModal(false)} type="button" className="text-sm/6 font-semibold text-gray-900">
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Guardar
                </button>
              </div>
            </form>
          )
      }
    </>
  )
}

export default DetailsUser