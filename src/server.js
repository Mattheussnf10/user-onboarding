const express = require('express');
const cors = require("cors");


class Server {

  host = "0.0.0.0";   // endereço de rede (127.0.0.1 | 0.0.0.0 | localhost | 192.168.0.x | 10.0.x.x)
  port = 0;           // porta de acesso ao serviço
  instance = null;    // instancia do express

  constructor(port = 3000) {
    this.init();
    this.port = port;
  }
    
  init(){
    this.instance = express(); // servidor http (hyper text transfer protocol) 
    this.instance.use(cors());
    this.instance.use(express.json());
    this.instance.use(express.urlencoded({ extended: true }));
  }

  start() {
    this.healthRoute();
    const report = () => console.log(`Servidor em execução na porta: ${this.port}`);
    this.instance.listen(this.port, report);
  }

  healthRoute() {
    this.instance.get('/health', (req, res) => {
      const dateStr = new Date().toISOString();
      res.send(dateStr);
    })
  }

  routes(fn){
    fn(this.instance);
  }
}

module.exports = { Server };

// npm = node package manager (gerenciador de pacotes node)