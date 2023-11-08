//importing  components
import React from 'react';
import { useState, useEffect } from 'react';
import { auth } from '../../services/firebase-config';
import {onAuthStateChanged, signOut} from 'firebase/auth';
//importing styles & responsiveSTYLES.
import '../../css/dashboard/dashboard.css';
import '../../css/responsive/DashboardResponse.css';
import exit from '../../assets/icons8-exit.gif';
import find from '../../assets/find.png';



const Dashboard = () => {
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
                          <li><a href="">Dashboard</a></li>
                          <li><a href="">Relatórios</a></li>
                          <li><a id="hora-atual1">{horaAtual}</a></li>
                          <li><a id="data-atual1">{dataAtual}</a></li>
                          <li><a href="">{user?.email}</a></li>
                          <li><a onClick={logOut} href='/'><img src={exit} alt="Exit Icon" width="24" height="24" /></a></li>
                      </ul>
                  </nav>
                  <div id="mobile-menu">
                      <ul>
                          <li><a href="">Dashboard</a></li>
                          <li><a href="">Relatórios</a></li>
                          <li><a id="hora-atual2">{horaAtual}</a></li>
                          <li><a id="data-atual2">{dataAtual}</a></li>
                          <li><a>Nome Cliente</a></li>
                          <li><a href="">Minha conta</a></li>
                      </ul>
                  </div>
              </div>
          </header>
          <div className="container-dashboard">
              <iframe title="Dashboard" width="1500" height="1600" src="https://app.powerbi.com/reportEmbed?reportId=2b32a6bc-b3f3-4ed7-b33b-cdbeb7b6dc22&autoAuth=true&ctid=2009dfae-df11-49c7-804d-fda8d5cd9865" frameborder="0" allowFullScreen="true"></iframe>
          </div>
      </div>
  );
};

export default Dashboard;
