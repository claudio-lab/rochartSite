import React from 'react';
//import banner from '../assets/Banner.png';  // Caminho do logotipo
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../assets/logo1.png';

function Inicio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const clientes = [
    { id: 1, logo: logo1, name:'Rochart' },
    { id: 2, logo: logo1, name:'Rochart'  },
    { id: 3, logo: logo1, name:'Rochart'  },
    { id: 4, logo: logo1, name:'Rochart'  },
    { id: 5, logo: logo1, name:'Rochart'  },
    { id: 6, logo: logo1, name:'Rochart'  },
    { id: 7, logo: logo1, name:'Rochart'  },
    { id: 8, logo: logo1, name:'Rochart'  },
  ];

  const carroucel = [
    { id: 1, logo: require('../assets/carroucel/1.png'), name:'Rochart' },
    { id: 2, logo: require('../assets/carroucel/2.jpg'), name:'Rochart'  },
    { id: 3, logo: require('../assets/carroucel/3.png'), name:'Rochart'  },
    { id: 4, logo: require('../assets/carroucel/4.jpg'), name:'Rochart'  },
    { id: 5, logo: require('../assets/carroucel/5.jpg'), name:'Rochart'  },
    { id: 6, logo: require('../assets/carroucel/6.jpg'), name:'Rochart'  },
    { id: 7, logo: require('../assets/carroucel/7.png'), name:'Rochart'  },
  ];



  

  return (
    <div>

      <div className='container-fluid bg-white p-5'>
        <div className='container mt-5 mb-5'>
          <div className='row'>
              <div className='col-sm-5 d-flex flex-column p-5'>
                  <p className='mt-5 text-Azul-Marinho'>Publicidade/Marketing</p>
                  <h2 className='heigthTextBaner text-Between-Night'>DESIGN E MARKETING DIGITAL,
                  SUA VISÃO, NOSSA MISSÃO</h2>
                  <p className='text-Rochart'>Comunicação e Soluções Empresariais. Soluções que impulsionam o seu crescimento, +35 projectos | 5 anos transformando ideias.</p>
                  <div>
                    <button type="button" class="btn btn-rochart btn-sm rounded-pill me-2 shadow">Comece aqui</button>
                    
                    <button type="button" class="btn btn-rochart-outline btn-sm rounded-pill shadow">Ver protifolio</button>
                  </div>
              </div>
              <div className='col-sm-7 d-flex align-items-center'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{height: '350px', width: '100%'}}>
                  <div className="carousel-inner border-1 border-secondary rounded-4 ">
                    {carroucel.map((cliente, index) => (
                      <div key={cliente.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={cliente.logo} className="d-block w-100 h-100" alt={cliente.name} style={{objectFit: 'cover', maxHeight: '350px'}} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div>
      <div className='container-fluid p-5 '>
        <div className='container mt-5 mb-5'>
          <h4 className='text-Azul-Marinho'>Serviços</h4>
          <div className='row'>

          <div className='col-sm-4 p-5'>
            <div className='bg-white border rounded-4'>
            <div className="border d-flex align-items-end justify-content-start rounded-top-4 pt-4 pb-4 cardService"
              style={{
                backgroundImage: "url('/servicos/44.webp')",
                height: '250px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h1 className='text-white px-3'>Web <br/> Design</h1>
              </div>
              <div className='m-3'>
                <h3 className='text-Rochart'>Criação de <br/> web site e App</h3>
                <div className='mt-3 mb-3'>
                <button type="button" class="btn btn-rochart-outline btn-sm rounded-pill">Saber mais</button>
                </div>
              </div>
            </div>
            </div>

            <div className='col-sm-4 p-5'>
            <div className='bg-white border rounded-4'>
               <div className="border d-flex align-items-end justify-content-start rounded-top-4 pt-4 pb-4 cardService"
              style={{
                backgroundImage: "url('/servicos/47.webp')",
                height: '250px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h1 className='text-white px-3'>Gestão <br/> de Mídias</h1>
              </div>
              <div className='m-3'>
                <h3 className='text-Rochart'>Estrategia e<br/> Criação de Conteúdo</h3>
                <div className='mt-3 mb-3'>
                <button type="button" class="btn btn-rochart-outline btn-sm rounded-pill">Saber mais</button>
                </div>
              </div>
            </div>
            </div>

            <div className='col-sm-4 p-5'>
            <div className='bg-white border rounded-4'>
            <div className="border d-flex align-items-end justify-content-start rounded-top-4 pt-4 pb-4 cardService"
              style={{
                backgroundImage: "url('/servicos/48.webp')",
                height: '250px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h1 className='text-white px-3'>Marketing <br/> 1365°</h1>
              </div>
              <div className='m-3'>
                <h3 className='text-Rochart'>Comunicação<br/> Gestão e acessoria</h3>
                <div className='mt-3 mb-3'>
                <button type="button" class="btn btn-rochart-outline btn-sm rounded-pill">Saber mais</button>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
      </div>
      <div className='bg-rochart p-5'>
        <div className='container mt-5 mb-5 pt-5 pb-5'>
          <h4 className='text-white'>O que oferecemos</h4>
          <div className='row pt-4 pb-4'>
            <div className='col-sm-4 px-5'>
              <i class="fa-regular fa-star text-silver"></i>
              <h5 className='text-white'>Qualidade</h5>
              <p className='text-silver'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='col-sm-4 px-5'>
              <i class="fa-solid fa-user-shield text-silver"></i>
              <h5 className='text-white'>Segurança</h5>
              <p className='text-silver'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='col-sm-4 px-5'>
              <i class="fa-regular fa-handshake text-silver"></i>
              <h5 className='text-white'>Confiança</h5>
              <p className='text-silver'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid p-5'>
        <div className='container mt-5 mb-5 pt-5 pb-5'>
          <h4 className='text-Azul-Marinho'>Soluções</h4>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='border rounded-5 p-4 bg-white shadow-lg'>
                <h3 className='text-Between-Night'>Design Digital</h3>
                <p className='text-Rochart'>O design digital vai além da estética – ele conecta, comunica e impacta. Criamos experiências visuais únicas que fazem sua marca se destacar, cativando seu público de forma autêntica e inovadora.</p>
                {/* <div>
                  <button type="button" class="btn btn-rochart btn-sm rounded-pill me-2">Saiba mais</button>
                  </div> */}
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='border rounded-5 p-4 bg-white shadow-lg'>
                <h3 className='text-Between-Night'>Web</h3>
                <p className='text-Rochart'>A Rochart constrói sua presença digital de forma sólida e eficaz. Com nossas soluções web, criamos sites e apps sob medida que transformam sua marca e geram resultados excepcionais. Design inovador e foco no cliente.</p>
                {/* <div><button type="button" class="btn btn-rochart btn-sm rounded-pill me-2">Saiba mais</button></div> */}
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='border rounded-5 p-4 bg-white shadow-lg'>
                <h3 className='text-Between-Night'>Marketing 365°</h3>
                <p className='text-Rochart'>
                Com nosso Marketing 365º, estamos prontos para transformar sua presença digital e alcançar resultados que vão além das expectativas. Profissionais dedicados, estratégias inovadoras e conteúdo de alto impacto.
                </p>
                  {/* <div>
                    <button type="button" class="btn btn-rochart btn-sm rounded-pill me-2">Saiba mais</button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className='bg-white container-fluid'>
        <div className='container pt-5 pb-5'>
          <h4 className='text-Azul-Marinho'>Clientes</h4>
          <div className='p-5'>
            <div className='px-5'>
              <Slider {...settings}>
                {clientes.map(cliente => (
                  <div key={cliente.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <img src={cliente.logo} alt={`Logo ${cliente.id}`} style={{ width: '100px', height: 'auto' }} />
                    
                  </div>
              
                ))}
              </Slider>
            </div>
          </div>
        </div>
     </div>

    
    </div>
  );

}

export default Inicio;
