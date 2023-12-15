//importing  components
import React from 'react';
import Header from '../../components/Header';

// import images
import bilola from '../../assets/telephone.svg';

const Dashboard = () => {
  return (
    <div className="body">
      <Header />
      <div className="dashboard-main">
        <div className="options-role">
          <option value="">Funcionário</option>
          <option value="">Origem Chamado</option>
          <option value="">Últimas 24h</option>
        </div>
        <div className="dashboard-data">
          <div className="dashboard-card">
            <h1 className="card-h1">Novos chamados</h1>
            <div className="card-info">
              <img src={bilola} alt="" className="card-img" />
              <p id="value-call" className="card-p">
                null
              </p>
            </div>
          </div>
          <div className="dashboard-card">
            <h1 className="card-h1">Novos chamados</h1>
            <div className="card-info">
              <img src={bilola} alt="" className="card-img" />
              <p id="value-call" className="card-p">
                null
              </p>
            </div>
          </div>
          <div className="dashboard-card">
            <h1 className="card-h1">Novos chamados</h1>
            <div className="card-info">
              <img src={bilola} alt="" className="card-img" />
              <p id="value-call" className="card-p">
                null
              </p>
            </div>
          </div>
          <div className="dashboard-card">
            <h1 className="card-h1">Novos chamados</h1>
            <div className="card-info">
              <img src={bilola} alt="" className="card-img" />
              <p id="value-call" className="card-p">
                null
              </p>
            </div>
          </div>
          <div className="dashboard-card">
            <h1 className="card-h1">Novos chamados</h1>
            <div className="card-info">
              <img src={bilola} alt="" className="card-img" />
              <p id="value-call" className="card-p">
                null
              </p>
            </div>
          </div>
          <div className="dashboard-card">
            <h1 className="card-h1">Novos chamados</h1>
            <div className="card-info">
              <img src={bilola} alt="" className="card-img" />
              <p id="value-call" className="card-p">
                null
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
