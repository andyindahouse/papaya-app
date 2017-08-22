// This is just some sample data so you don't have to think of your own!
export const monuments = [
  {
    name: 'Universidad de Alcalá de Henares',
    image: 'http://i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg',
    desc: `Fundada en 1499 por el Cardenal Cisneros. Durante los siglos XVI y XVII se convirtió en el gran centro de excelencia académica. Es una de las más importantes obras del Renacimiento español y declarado Patrimonio de la Humanidad, junto con el resto del casco histórico de Alcalá de Henares. Actualmente es el rectorado de la nueva Universidad de Alcalá.`,
    location: { latitude: 40.482898, longitude: -3.363215},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {
    name: 'Plaza de Cervantes',
    image: 'http://i.istockimg.com/file_thumbview_approve/32135274/5/stock-photo-32135274-cooked-lobster.jpg',
    desc: `Los orígenes de la Plaza se encuentran en la Edad Media y era tradicionalmente conocida como Plaza del Mercado debido a que se celebraba el mercado de la villa y la feria anual. En el siglo XIX se crearon varias obras para su embellecimiento; la estatua de Cervantes y la construcción del Quiosco de la Música. Actualmente es uno de los principales puntos de encuentro social y cultural de la ciudad. `,
    location: { latitude: 40.482513000, longitude: -3.364262800},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {
    name: 'Capilla del Oidor (Interior expecto lunes)',
    image: 'http://i.istockimg.com/file_thumbview_approve/58624176/5/stock-photo-58624176-scallops-on-black-stone-plate.jpg',
    desc: `Pertenecía a la antigua Iglesia de Santa María. La capilla fue construida a comienzos del siglo XV por el 'oidor' del rey Juan II con la intención de que descansaran allí sus restos mortales. Actualmente es un centro de exposiciones y el lugar donde se conserva la pila bautismal de Miguel de Cervantes.`,
    location: { latitude: 40.481517, longitude: -3.363407},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {
    name: 'Corral de Comedias',
    image: 'http://i.istockimg.com/file_thumbview_approve/12556651/5/stock-photo-12556651-mahimahi.jpg',
    desc: `Es uno de los corrales de comedias más antiguos que se conservan en Europa. Se construyó en 1601 por orden del Ayuntamiento de Alcalá de Henares. El edificio ha tenido diversos usos lo que ha dado lugar a importantes transformaciones en su estructura arquitectónica. Actualmente ha recuperado su programación teatral, y existe la posibilidad de visitas guiadas.`,
    location: { latitude: 40.482303, longitude: -3.364571},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {
    name: 'Hospital de Antezana',
    image: 'http://i.istockimg.com/file_thumbview_approve/18294110/5/stock-photo-18294110-king-crab-legs.jpg',
    desc: `Fue creado en 1483 como institución de caridad para ayudar a los pobres, enfermos y peregrinos. Era una práctica habitual por parte de las familias ricas y muy religiosas de la Edad Media. Actualmente continúa su función asistencial a ancianos sin recursos y es considerado el hospital en uso más antiguo de toda Europa.`,
    location: { latitude: 40.482286, longitude: -3.366864},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {
    name: 'Museo Casa Natal de Cervantes',
    image: 'http://i.istockimg.com/file_thumbview_approve/56241842/5/stock-photo-56241842-salmon-g',
    desc: `Reconstruye el inmueble donde, según los estudios, nació el escritor Miguel de Cervantes. Se construyó en 1956, rememorando los cánones de la casa tradicional castellano-toledana. En su interior se recrean las costumbres, gustos y quehaceres cotidianos de los siglos XVI y XVII. También ofrece talleres infantiles y juveniles, conferencias y espectáculos teatrales y musicales.`,
    location: { latitude: 40.482122, longitude: -3.367019},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {
    name: 'Catedral Magistral de los Santos Justo y Pastor',
    image: 'http://i.istockimg.com/file_thumbview_approve/58626682/5/stock-photo-58626682-fresh-oysters-on-a-black-stone-plate-top-view.jpg',
    desc: `Fue construida en 1514 y su origen se remonta al martirio de los Santos Justo y Pastor a comienzo del siglo IV. Según la leyenda, ambos niños fueron asesinados por su oposición a rehusar del cristianismo. Tras su muerte, se construyó una pequeña Iglesia en el lugar donde fueron martirizados. Más adelante la destruyeron para construir la actual de estilo gótico por orden del Cardenal Cisneros.\nEn su interior podemos encontrar los restos de los Santos Niños y la tumba de Cisneros. Actualmente es la sede del Obispo y se celebran todo tipo de celebraciones católicas.`,
    location: { latitude: 40.480525, longitude: -3.369258},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {
    name: 'Puerta de Madrid',
    image: 'http://i.istockimg.com/file_thumbview_approve/40450406/5/stock-photo-40450406-steamed-mussels.jpg',
    desc: `Fue edificada en el año 1788 para sustituir a una de las puertas medievales del antiguo recinto amurallado debido a que dificultaba el acceso a la ciudad. Presenta el aspecto de un arco de triunfo de estilo neoclásico. `,
    location: { latitude: 40.48064664988782, longitude: -3.3726954460144043 },
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {

    name: 'Recinto Amurallado',
    image: 'http://i.istockimg.com/file_thumbview_approve/67121439/5/stock-photo-67121439-fresh-tiger-shrimp-on-ice-on-a-black-stone-table.jpg',
    desc: `Se construyó entre el siglo XIII y el XV con el objetivo de proteger la ciudad militarmente y controlar sus accesos. Los recintos amurallados fueron el resultado de sucesivas modificaciones y ampliaciones durante varios siglos.\nLa construcción inicial se realizó en la segunda mitad del siglo XIII abarcando un espacio de 37 hectáreas y siete puertas.\nEn la actualidad quedan 700 metros, 16 torres, el Arco de San Bernardo y la Puerta de Madrid.`,
    location: { latitude: 40.481667, longitude: -3.372778},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  },

  {
    name: 'Palacio Arzobispal',
    image: 'http://i.istockimg.com/file_thumbview_approve/67121439/5/stock-photo-67121439-fresh-tiger-shrimp-on-ice-on-a-black-stone-table.jpg',
    desc: `Fue la residencia de los arzobispos de Toledo en Alcalá de Henares. Se tiene noticia de su construcción a partir del siglo XIII,  realizándose ampliaciones, mejoras y restauraciones hasta el siglo XIX.\nEl conjunto se completa con un torreón que recuerda el uso que tuvo el edificio como fortaleza defensiva. Actualmente se ofrece la posibilidad de subir a la muralla medieval, visitando el interior de sus torres.`,
    location: { latitude: 40.482435, longitude: -3.369649},
    markerImg: 'location.png',
    status: 'available',
    quiz: [{
      question: '¿Cúanto es 2 + 2?',
      indexResponseCorrect: 0,
      responses: ['4', '3', '9999', 'Hmm... Pido el comodín de la llamada']
    }, {
      question: '¿Día es a noche, lo que sol es a ...?',
      indexResponseCorrect: 2,
      responses: ['WTF, are u kidding me?', 'Verano', 'Luna', 'Solecito']
    }, {
      question: '¿En qué año se convirtio la UAH en un Starbucks?',
      indexResponseCorrect: 3,
      responses: ['Hace 5000 años A.C.', 'K ise lokoh', 'Deja las drogas amigo', 'Hace mucho tiempo, en un lugar muy muy lejano...']
    }, {
      question: '¿Cómo acaba el refran, A quien a buen árbol se arrima...?',
      indexResponseCorrect: 2,
      responses: ['No se le ve cuando orina', 'Se le caén las hojillas', 'Buena sombra le cobija', 'No existe un refrán así. ¡No me times!']
    }, {
      question: '¿El creador de esta app es...?',
      indexResponseCorrect: 3,
      responses: ['Puto amo', 'Steve Jobs en potencia', 'Tu amigo y vecino Spiderman', 'Todas las anteriores']
    }]
  }
];
