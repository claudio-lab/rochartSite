import React from 'react';

function Portfolio() {
  const projetos = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do projeto 1',
      image: require('../assets/carroucel/1.png'), // Substitua pela URL real da imagem
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      image: require('../assets/carroucel/1.png'),
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição do projeto 3',
      image: require('../assets/carroucel/1.png'),
    },
    {
      id: 4,
      title: 'Projeto 4',
      description: 'Descrição do projeto 4',
      image: require('../assets/carroucel/1.png'),
    },
  ];

  return (
    <div className='container py-5'>
      <h4 className='mb-5 text-Azul-Marinho'>Portfólio</h4>
      <div className='row'>
        {projetos.map((projeto) => (
          <div className='col-md-4 mb-4' key={projeto.id}>
            <div className='card'>
              <img src={projeto.image} className='card-img-top' alt={projeto.title} />
              <div className='card-body'>
                <h5 className='card-title'>{projeto.title}</h5>
                <p className='card-text'>{projeto.description}</p>
                <button className='btn btn-secondary rounded-pill'>
                  Ver Mais
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
