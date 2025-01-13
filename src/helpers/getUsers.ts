
export const getUsers = async () =>{

  try {
    
    const reponse = await fetch("https://dummyapi.io/data/v1/user?limit=100",{
      method: "GET",
      headers:{
        "app-id": "63473330c1927d386ca6a3a5"
      }
    })

    const data = await reponse.json()
    // console.log("🚀 ~ getUser ~ data:", data)
    
    return data
  } catch (error) {
    console.error("no se pudo obtener data ", error)
  }
}