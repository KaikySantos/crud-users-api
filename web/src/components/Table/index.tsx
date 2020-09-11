import React, { useState, useEffect } from 'react';
import './style.css';
import ImgEdit from '../../assets/images/editar.png';
import ImgDelete from '../../assets/images/deletar.png';
import api from '../../services/api';

function Table() {

    api.get('/users').then((response) => {
        console.log(response.data);
    });

    return(
        <div className="table-container">
            <div className="scroll">
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Nome</td>
                        <td>Telefone</td>
                        <td>Email</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Carlos Kaiky Santos</td>
                        <td>985321495</td>
                        <td>info.kaiky@gmail.com</td>
                        <td>
                            <button>
                                <img src={ImgEdit} alt=""/>
                            </button>
                            <button>
                                <img src={ImgDelete} alt=""/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Table;