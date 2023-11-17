//importing  components
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { auth } from '../../services/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
//importing styles & responsiveSTYLES.
import '../../css/relatório/relatório.css'
import '../../css/responsive/Relatórioresponse.css';
import exit from '../../assets/icons8-exit.gif';
import find from '../../assets/find.png';
import { usePageTitle } from '../../main.jsx';

function Titlerelatorio() {
    usePageTitle('Recife Tecnologia | Relatório');
}



const Relatorio = () => {
    Titlerelatorio();

    const handleFiltrarClick = () => {
        const novoDataInicio = document.getElementById('dataInicio').value;
        const novoDataFim = document.getElementById('dataFim').value;
        const periodo = document.getElementById('periodo');

        // Verifica se a data inicial é menor ou igual à data final
        if (new Date(novoDataInicio) <= new Date(novoDataFim)) {
            periodo.innerHTML = `Período: ${novoDataInicio} - ${novoDataFim}`;
        } else {
            // Caso contrário, exibe uma mensagem de erro e mantém os estados atuais
            alert('Selecione uma data inicial menor ou igual à data final.');
        }
    };




    const [dataAtual, setDataAtual] = useState('');
    const [horaAtual, setHoraAtual] = useState('');
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logOut = async () => {
        await signOut(auth);
    };
    useEffect(() => {
        function exibirDataAtual() {
            var data = new Date();
            var dataFormatada = data.toLocaleDateString();
            setDataAtual(dataFormatada);
        }

        function exibirHoraAtual() {
            function atualizarHora() {
                var hora = new Date();
                var horaFormatada = hora.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                setHoraAtual(horaFormatada);
            }

            atualizarHora();

            setInterval(atualizarHora, 1000);
        }

        exibirDataAtual();
        exibirHoraAtual();
    }, []);

    return (

        <div className='body'>
            <header className="header-bg">
                <div className="header-container">
                    <div className="container-search">
                        <div className="container-imgsearch"><img src={find} alt="search" /></div>
                        <input type="search" name="search" placeholder="Pesquisar..." className="search" />
                    </div>
                    <nav className="user-menu font-1-m" id="nav-menu">
                        <span id="hamburger">
                            <div></div>
                        </span>
                        <ul id="ul-menu" role="menu">
                            <li><a href="/Dashboard">Dashboard</a></li>
                            <li><a href="/Relatorio">Relatórios</a></li>
                            <li><a id="hora-atual1">{horaAtual}</a></li>
                            <li><a id="data-atual1">{dataAtual}</a></li>
                            <li><a href="">{user?.email}</a></li>
                            <li><a onClick={logOut} href='/'><img src={exit} alt="Exit Icon" width="24" height="24" /></a></li>
                        </ul>
                    </nav>
                    <div id="mobile-menu">
                        <ul>
                            <li><a href="/Dashboard">Dashboard</a></li>
                            <li><a href="/Relatorio">Relatório</a></li>
                            <li><a id="hora-atual2">{horaAtual}</a></li>
                            <li><a id="data-atual2">{dataAtual}</a></li>
                            <li><a>Nome Cliente</a></li>
                            <li><a href="">Minha conta</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="container-relatório">
                <div className='submenu'>
                    <ul>
                        <li><a >Baixar</a></li>
                        <li><a >Imprimir</a></li>
                        <li>
                            <a id='filtrodata'>
                                Filtrar período
                                <p>Início</p>
                                <input
                                    type="date"
                                    name="data"
                                    id="dataInicio"
                                />
                                <p>Fim</p>
                                <input
                                    type="date"
                                    name="data"
                                    id="dataFim"
                                />
                                <button onClick={handleFiltrarClick}>Filtrar</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='container-folharelatorio'>
                    <div className='folharelatorio'>
                        <h1>Recife Tecnologia</h1>
                        <h2>Folha de relatório</h2>
                        <p id="periodo">Período: - </p>
                        <p>Data extração: {dataAtual}</p>

                        <h3>Chamados por categoria:</h3>
                        <table>
                            <tr>
                                <th>Soluções</th>
                                <th>Atribuições</th>
                                <th>Problemas</th>
                                <th>Chamadas</th>
                                <th>Dúvidas</th>
                            </tr>
                            <tr>
                                <td>57</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                        </table>

                        <h3>Usuários:</h3>
                        <table>
                            <tr>
                                <th>Usuários</th>
                                <th>Usuários Principais</th>
                                <th>Usuários Telefone</th>
                            </tr>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                        </table>

                        <p>Lorem ipsum...</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Relatorio;
