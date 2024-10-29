import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './Routes';
import './App.css';  // Importa o arquivo de estilo
import logo from './assets/ROCHART LOGO 2024 ROCH 1-4-02.webp';  // Caminho do logotipo

function App() {

  return (
    <Router>
      <div>
        {/* Menu de navegação usando o Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {/* Adicionando o logotipo */}
              <img src={logo} alt="Logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* Aqui o ms-auto está na ul para flutuar à direita */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/">Início</Link>
                </li>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/servicos">Serviços</Link>
                </li>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/portifolio">Portfólio</Link>
                </li>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/sobre">Sobre nós</Link>
                </li>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/Contacto">Contacto</Link>
                </li>
              </ul>

              <Link className="btn btn-rochart btn-sm rounded-pill m-2 shadow" to="/Contacto">
              Peça um orçamento
              </Link>
             

            </div>
          </div>
        </nav>

        {/* Importando as rotas */}
        <AppRoutes />
        <footer className='bg-silver'>
            <div className='container pt-5 pb-5'>
              <div className='row'>
                <div className='col-sm-6'>
                  <h5 className='text-white'>Quem somos</h5>
                  <p className='text-Azul-Marinho'>
                  A <strong>Rochart</strong> é uma empresa de <strong>autoria angolana</strong>, com mais de <strong>5 anos</strong> de experiência, especializada em <strong>Comunicação Institucional, Identidade Visual e Soluções Empresariais</strong>. Nosso objectivo é ajudar a <strong>fortalecer a imagem e melhorar a comunicação interna e externa</strong>  de cada cliente, contribuindo diretamente para o sucesso de suas operações empresariais.
                  </p>
                </div>
                <div className='col-sm-3'>
                    <h5 className='text-white'>Contactos</h5>
                    <a className='myMail text-Azul-Marinho' href='mailto:geral@rochart.net'>geral@rochart.net</a><br /><br />
                    <a className='myMail text-Azul-Marinho' href="tel:+244947966706">(+244) 947 966 706</a><br />
                    <a className='myMail text-Azul-Marinho' href="tel:+244927703326">(+244) 927 703 326</a><br />
                </div>

                <div className='col-sm-3'>
                    <h5 className='text-white'>Mideias Sociais</h5>
                    <a className="myMail text-Azul-Marinho me-2" href="https://wa.me/947966706" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-square-whatsapp fs-1"></i>
                    </a>

                    <a
                        className="myMail text-Azul-Marinho me-2"
                        href="https://www.instagram.com/rochart.ao"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-square-instagram fs-1"></i>
                      </a>

                    <a className='myMail text-Azul-Marinho me-2' href="tel:+244999000001"><i class="fa-brands fa-square-facebook fs-1"></i></a>
                    <a className='myMail text-Azul-Marinho me-2' href="tel:+244999000001"><i class="fa-brands fa-linkedin fs-1"></i></a>
                </div>
              </div>
            </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
