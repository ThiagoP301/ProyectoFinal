export const obtenerWorkspace= async () =>{
    const response= await fetch("/data.json", {
        method: "GET"
    })
    console.log({response})
    return response.json()

}