import React from 'react';

function Sobre() {
  return (
    <div className='container pb-5'>
      <h4 className='text-Azul-Marinho'>Sobre Nós</h4>
      <div className='row'>
        <div className='col-sm-7'>
          <p>
          A <strong>Rochart</strong> é uma empresa de <strong>autoria angolana</strong>, com mais de <strong>5 anos</strong> de experiência, especializada em <strong>Comunicação Institucional, Identidade Visual e Soluções Empresariais</strong>. Nosso objectivo é ajudar a <strong>fortalecer a imagem e melhorar a comunicação interna e externa</strong>  de cada cliente, contribuindo diretamente para o sucesso de suas operações empresariais.
          </p>
          <p>
            Acreditamos na força da <strong>adaptação</strong> e na importância da <strong>diversidade</strong> para criar estratégias personalizadas que atendam às <strong>necessidades</strong> únicas de cada cliente.
          </p>
          <p>
            A nossa abordagem é <strong>construir</strong> uma parceria duradoura, onde cada passo é uma progressão rumo ao <strong>sucesso compartilhado</strong>.
          </p>
          <p>
          Junte-se a nós na Rochart e descubra um mundo de possibilidades onde cada ponto de interrogação é convertido em um ponto final de sucesso.
          </p>
        </div>
        <div className='col-sm-5'>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Missão
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Comprometemo-nos a concretizar a visão dos nossos clientes, assumindo a responsabilidade de proporcionar soluções que potenciem o sucesso deles.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Visão
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Transformar a visão de nossos clientes em resultados concretos, oferecendo soluções personalizadas e inovadoras.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Valores
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                São Excelencias, Personalização, Experiência e Resultados para alcançar sucesso.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mapa Google */}
        <div className='col-sm-12'>
            <h5>Localização</h5>
            <div style={{ width: '100%', height: '400px' }}>
              

              <iframe 
              title='GooleMaps'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.2446902373681!2d13.236573929828964!3d-8.816860275067143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24c74f563db%3A0x17399025a7754bf8!2sLiraLink%C2%AE%20Tecnologia!5e0!3m2!1spt-PT!2sao!4v1728859145141!5m2!1spt-PT!2sao" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
               aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
    
        </div>

      </div>
    </div>
  );
}

export default Sobre;
