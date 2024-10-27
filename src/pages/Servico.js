import React from 'react';

function Servico() {
  return (
    <div className='container pt-5 pb-5'>
    <h4 className='text-Azul-Marinho'>Serviços</h4>
    <div className='row'>
    <div className='col-sm-6 p-5'>
            <div className='bg-white border rounded-4'>
              <div className=' border d-flex align-items-center justify-content-center rounded-top-4 pt-4 pb-4 cardService'>
              
              </div>
              <div className='m-3'>
                <h6 className='text-Between-Night'>Lorem ipsum dolor sit</h6>
                <small className='text-Rochart'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                <div className='mt-3 mb-3'>
                <button type="button" class="btn btn-rochart-outline btn-sm rounded-pill">Ver mais</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-6 p-5'>
            <div className='bg-white border rounded-4'>
              <div className=' border d-flex align-items-center justify-content-center rounded-top-4 pt-4 pb-4 cardService'>
              
              </div>
              <div className='m-3'>
                <h6 className='text-Between-Night'>Lorem ipsum dolor sit</h6>
                <small className='text-Rochart'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                <div className='mt-3 mb-3'>
                <button type="button" class="btn btn-rochart-outline btn-sm rounded-pill">Ver mais</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
  );
}

export default Servico;
