import React from 'react'

const Contacto = () => {
  return (
    <div className='container pt-5 mt-5 pb-5 mb-5'>
      <h4 className='text-Azul-Marinho mb-5'>Contacto</h4>
      <div className='row'>
        <div className='bg-white border rounded-4 p-3'>
          <div className='row d-flex align-items-center'>
            <div class="p-2 col-sm-6 d-flex justify-content-center">
              <div>
                <label><i class="fa-solid fa-phone fs-2 text-Azul-Marinho mx-3"></i></label>
                <a className='myMail text-Azul-Marinho' href="tel:+244947966706">(+244) 947 966 706</a>
                <br/>
                <label><i class="fa-solid fa-phone fs-2 text-Azul-Marinho mx-3"></i></label>
                <a className='myMail text-Azul-Marinho' href="tel:+244927703326">(+244) 927 703 326</a>
                <br/>
                <label><i class="fa-solid fa-envelope fs-2 text-Azul-Marinho mx-3"></i></label>
                <a className='myMail text-Azul-Marinho' href='mailto:geral@rochart.net'>geral@rochart.net</a>
                <br/>
                <label><i class="fa-solid fa-location-dot fs-2 text-Azul-Marinho mx-3"></i></label>
                <a className='myMail text-Azul-Marinho' href="https://www.google.com/maps/search/?api=1&query=Luanda,+Coqueiros" target="_blank" rel="noopener noreferrer"> Luanda, Coqueiros</a>
                <br/>
              </div>
            </div>
            
            <div class="p-2 col-sm-6">
            
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Nome</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="insira o seu nome"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="insira o seu email"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Telefone</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="insira o seu número de telefone"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Mensagem</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <button type="button" class="btn btn-rochart btn-sm rounded-pill m-2 shadow">Enviar</button>
            
            </div>
          </div>
        </div>
        <div className='mt-4 d-flex justify-content-center'>
        <div style={{ width: '100%', height: '400px' }}>
              <iframe 
              title='GooleMaps'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.7067171377225!2d13.224556425074967!3d-8.813598941239386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f251399ac4c9%3A0xcb245897d47bc5c6!2sCoqueiros%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1730151861304!5m2!1spt-PT!2sao" 
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
  )
}

export default Contacto