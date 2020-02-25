import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap';
import firebase from '../../Firebase/firebase';
import productStyles from "../MainContainer.module.scss";

const Products = () => {
    const [fbData, setFbData] = useState(null)

    useEffect(() => {
        firebase.database().ref(`/Menu`).on('value', (snapshot) => {
            setFbData(snapshot.val());
        })
    }, []);


    if(fbData){
        const expectedIndex = [5, 4, 2, 3, 0, 1]
        const menuDataOrganized = expectedIndex.map(i => Object.entries(fbData)[i]);

        const handleProductStock = (e, titulo, i) => {
            firebase.database().ref('/Menu').child(titulo).child(i).update({
                stock: e.target.checked
            }).then((success) => console.log(success)).catch((error) => console.log(error))
        }

        return (
            <div className={productStyles.container}>
                <div className={productStyles.wrapper}>
                    <div style={{ position: "relative" }}>
                    {menuDataOrganized.map(([titulo, products], i) =>{
                        return(
                            <div key={titulo + i}>
                                <h2>{titulo}</h2>
                                <br/>
                                <div className='col-md-12 ml-sm-auto col-lg-12 px-4'>
                                    <table className='table table-hover'>
                                        <thead>
                                            <tr className="bg-primary text-white">
                                                <th>Producto</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product, i)=>{
                                                return(
                                                    <tr key={i}>
                                                        <td>{product.nombre}</td>
                                                        <td align="center">
                                                            <Form>
                                                                <Form.Check
                                                                    checked={product.stock}
                                                                    id={product.nombre}
                                                                    type="switch"
                                                                    label="Stock"
                                                                    onChange={(e) => handleProductStock(e, titulo, i)}
                                                                />
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                )})
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <h1>Cargando...</h1>
        )
    }
}

export default Products;