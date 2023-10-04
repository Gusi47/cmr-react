



export async function obtenerClientes() {
 
    const respuesta = await fetch('http://localhost:3000/clientes')
    const resultado = await respuesta.json()

   
 console.log(resultado);

}