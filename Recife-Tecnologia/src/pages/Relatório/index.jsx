//importing  components
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { auth } from '../../services/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
//importing styles & responsiveSTYLES.
import '../../css/relatório/relatório.css'
import '../../css/responsive/Relatórioresponse.css';
import exit from '../../assets/icons8-exit.gif';
import find from '../../assets/find.png';
import { usePageTitle } from '../../main.jsx';


function Titlerelatorio() {
    usePageTitle('Recife Tecnologia | Relatório');
}

const ComponentToPrint = React.forwardRef(({ children }, ref) => (
    <div ref={ref} className="container-folharelatorio">
        {children}
    </div>
));

const Relatorio = () => {
    Titlerelatorio();

    /* const para imprimir a folha de relatório*/
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    /* const para filtrar por data os dados do relatório.*/
    const handleFiltrarClick = () => {
        const novoDataInicio = document.getElementById('dataInicio').value;
        const novoDataFim = document.getElementById('dataFim').value;
        const periodo = document.getElementById('periodo');

        if (new Date(novoDataInicio) <= new Date(novoDataFim)) {
            periodo.innerHTML = `Período: ${novoDataInicio} - ${novoDataFim}`;
        } else {

            alert('Selecione uma data inicial menor ou igual à data final.');
        }
    };
    /* const para baixar a folha de relatório*/
    const handleDownloadClick = async () => {
        const content = document.getElementById('folharelatorio');

        try {
            const canvas = await html2canvas(content);
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 210, 297);
            pdf.save('folha_relatorio.pdf');
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
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
                        <li><a id="downloadButton" onClick={handleDownloadClick} >Baixar</a></li>
                        <li><a onClick={handlePrint}>Imprimir</a></li>
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
                                <button onClick={handleFiltrarClick} className='buttonFiltrar'>Filtrar</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <ComponentToPrint ref={componentRef}>
                    <div className='container-folharelatorio'>
                        <div className='mensagem'>
                            <h1>Pré-visualização indisponível para o tamanho da tela.</h1>
                            <p>Filtre o período e clique em Baixar ou imprimir.</p>

                        </div>
                        <div className='folharelatorio' id='folharelatorio'>
                            <div className='textocentralizado'>
                                <h1>Recife Tecnologia - Folha de relatório</h1>
                                <p id="periodo">Período: - </p>
                                <p>Data extração: {dataAtual}</p>
                            </div>

                            <div className='container-tabela'>
                                <h3 className='titulodatabela'>Chamados por status</h3>
                                <table className='tabelarelatorio'>
                                    <tr>
                                        <th>Novos: </th>
                                        <th>Pendentes:</th>
                                        <th>Solucionados: </th>
                                        <th>Atribuídos: </th>
                                        <th>Planejados: </th>
                                        <th>Fechados: </th>

                                    </tr>
                                    <tr>
                                        <td>57</td>
                                        <td>89</td>
                                        <td>92</td>
                                        <td>41</td>
                                        <td>79</td>
                                        <td>126</td>
                                    </tr>
                                </table>

                                <h3 className='titulodatabela'>Categoria de chamados</h3>
                                <table className='tabelarelatorio'>
                                    <tr>
                                        <th>Duvidas: </th>
                                        <th>Outros: </th>
                                        <th>Problemas: </th>
                                        <th>Por acesso: </th>
                                        <th>Criar User: </th>
                                        <th>Falha rotina: </th>
                                    </tr>
                                    <tr>
                                        <td>53</td>
                                        <td>52</td>
                                        <td>41</td>
                                        <td>30</td>
                                        <td>21</td>
                                        <td>12</td>
                                    </tr>
                                </table>

                                <h3 className='titulodatabela'>Chamado por origem de requisição</h3>
                                <table className='tabelarelatorio'>
                                    <tr>
                                        <th>HelpDesk: </th>
                                        <th>Telefonema: </th>
                                        <th>WhatsApp: </th>
                                        <th>Teams: </th>
                                        <th>E-mail: </th>

                                    </tr>
                                    <tr>
                                        <td>100</td>
                                        <td>300</td>
                                        <td>150</td>
                                        <td>780</td>
                                        <td>166</td>

                                    </tr>
                                </table>
                                <table className='tabelarelatorioTOTAL'>
                                    <tr>
                                        <th className='titulodatabela'>Total de chamados</th>

                                    </tr>
                                    <tr>
                                        <td>2.189</td>
                                    </tr>
                                </table>


                            </div>

                            <footer className='footerRelatorio'>
                                <p>Recife Tecnologia</p>
                                <p>Edf. Dos Despachantes Aduaneiros Praça do Arsenal da Marinha - Recife, PE, 50030-360</p>
                                <p>Telefone: (081) 30401010</p>
                                <span>Email: recifetecnologia@rectecnologia.com.br</span>
                            </footer>
                        </div>
                    </div>
                </ComponentToPrint>
            </div>
        </div>
    );
};

export default Relatorio;
