import { Link } from "react-router-dom"
import React from 'react';

const labels = [
    "ID",
    "No. Servicio",
    "Fecha",
    "Direccion destino",
    "Ciudad destino",
    "Estado"
  ]


const Listados = ({datos}) => {
    return (
        <>        
            <div className="listados">
                <table className="table">
                    <thead>
                        <tr>
                            {labels.map((label, index) => {
                                return (<th key={index} scope="col">{label}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((datos, index) => {
                            return (
                                <tr key={index}>
                                    <td>{datos.id}</td>
                                    <td>{datos.nservicio}</td>
                                    <td>{datos.fecha}</td>
                                    <td>{datos.ddestino}</td>
                                    <td>{datos.cdestino}</td>
                                    <td>{datos.estado}</td>  
                                  
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Listados

