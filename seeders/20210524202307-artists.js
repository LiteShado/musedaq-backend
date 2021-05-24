'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artists', [{
      name: 'Pretentious PowHers',
      biograpy: 'Originating in Washington, D.C., these femme fatales bursted on the scene with their 2020 single, "I Only Have Eyes for Love" and have been on fire ever since.',
      image: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxOdUpuX3ZSd2JmRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '53500',
      fanbase: '8',
      genre: 'R&B',
      rating: '9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'InVinceable',
      biograpy: '23 year-old Vince Rogers is no stranger to the scene. He has been quietly writing and producing music for several TOP artists since 2019, most notably of those being Drake and Kendrick Lamar.',
      image: 'https://images.unsplash.com/photo-1485921040253-3601b55d50aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxOdUpuX3ZSd2JmRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60;maxWidth=550',
      price: '48700',
      fanbase: '9',
      genre: 'Hip Hop',
      rating: '9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'T A R A',
      biograpy: 'This Toronto-born songstress has been a force in the R&B game for several years. As a background singer for The Weeknd, Dua Lipa, and Ariana Grande, Tara Jones is not shy about expressing her heartache and joys.',
      image: 'https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxOdUpuX3ZSd2JmRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '64230',
      fanbase: '8',
      genre: 'Pop',
      rating: '9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Street & Steez',
      biograpy: 'When it comes to teamwork, Street and Steez know more than the average tag team. Hailing from Oakland, Calif., these two started their musical efforts as a DJ/Dancer duo and quickly transformed their talents into a musical odyssey.',
      image: 'https://images.unsplash.com/photo-1466554934129-f71df54ebb27?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8TnVKbl92UndiZkV8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '41650',
      fanbase: '8',
      genre: 'Pop',
      rating: '8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mr. Martiin',
      biograpy: 'Some artists come along and change the game before their hand even touches the mic. Thats the case with Mr. Martiin, who hails from Philly.',
      image: 'https://images.unsplash.com/photo-1520904193160-87c23517f5d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xOdUpuX3ZSd2JmRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '46143',
      fanbase: '8',
      genre: 'Hip Hop',
      rating: '8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'iShine',
      biograpy: 'Its always more difficult to break onto the scene without major label backing or features. But, despite these hurdles, Tanya Smith, aka iShine, has not allowed it to stop her "shine".',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8TnVKbl92UndiZkV8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '40445',
      fanbase: '8',
      genre: 'R&B',
      rating: '9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jackson Joi',
      biograpy: 'Picking up the guitar at the tender age of 8, Danielle Jackson knew her destiny was to be plucking away her emotions in front of large audiences. After her Pitchfork magazine feature, her popularity soured to the stratosphere.',
      image: 'https://images.unsplash.com/photo-1436831135709-48bdc150cce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxOdUpuX3ZSd2JmRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '53776',
      fanbase: '8',
      genre: 'Acoustic',
      rating: '9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Xavier Zay',
      biograpy: 'Recent college grad is the newest R&B heartthrob on the scene with little more than 50k followers on Instagram. He has released cover videos on Youtube.',
      image: 'https://images.unsplash.com/photo-1582337832132-b1df9234f9cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxOdUpuX3ZSd2JmRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '28500',
      fanbase: '7',
      genre: 'Pop',
      rating: '8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'RoxBoi',
      biograpy: 'A native of Roxbury, Mass., Michael Rogers has been blazing the scene for close to 10 years as an underground DJ. Although he has alway had a penchant with the pen, but only since 2019 has he taken his writing capabilities as a serious asset.',
      image: 'https://images.unsplash.com/photo-1600181957364-7f7ded214565?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8TnVKbl92UndiZkV8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '31320',
      fanbase: '7',
      genre: 'Rap',
      rating: '9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'DJ Racee',
      biograpy: 'Representing her London roots, this DJ/producer extraordinaire is more than just your typical EDM staple on a Friday night.',
      image: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8TnVKbl92UndiZkV8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '33250',
      fanbase: '7',
      genre: 'EDM',
      rating: '8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Payne',
      biograpy: 'After releasing his self-titled debut, "Roses are Red..", Payne has been a locomotive train on the independent charts, and his momentum does not seem to be slowing down anytime soon.',
      image: 'https://images.unsplash.com/photo-1458044508387-6825c08a7870?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8TnVKbl92UndiZkV8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60;maxHeight=640;maxWidth=550',
      price: '64990',
      fanbase: '8',
      genre: 'R&B',
      rating: '9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('artists', null, {});
  }
};
