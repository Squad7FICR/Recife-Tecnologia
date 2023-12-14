//importing  components
import React from 'react';
import Teste from '../../components/Header';

const Dashboard = () => {
  return (
    <div className="body">
      <Header />
      <div className="container-dashboard">
        <iframe
          title="Dashboard"
          width="1500"
          height="1600"
          src="https://app.powerbi.com/reportEmbed?reportId=2b32a6bc-b3f3-4ed7-b33b-cdbeb7b6dc22&autoAuth=true&ctid=2009dfae-df11-49c7-804d-fda8d5cd9865"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
