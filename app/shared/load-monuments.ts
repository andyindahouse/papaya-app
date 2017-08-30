// This is just some sample data so you don't have to think of your own!
export const monuments = [
  {
    name: 'Colegio Mayor de San Ildefonso',
    image: 'https://firebasestorage.googleapis.com/v0/b/papaya-app-173816.appspot.com/o/colegio-san-ildefonso.jpg?alt=media&token=9016e679-f3c1-4826-af1c-c63ce9997cbb',
    desc: `Fundada en 1499 por el Cardenal Cisneros. Durante los siglos XVI y XVII se convirtió en el gran centro de excelencia académica. Es una de las más importantes obras del Renacimiento español y declarado Patrimonio de la Humanidad junto con el resto del casco histórico de Alcalá de Henares. Actualmente es el rectorado de la nueva Universidad de Alcalá.`,
    location: { latitude: 40.482898, longitude: -3.363215},
    markerImg: 'search.png',
    quiz: [{
      question: '¿¿Desde qué plaza podemos apreciar la famosa fachada del Colegio Mayor de San Ildefonso?',
      indexResponseCorrect: 1,
      responses: ['Plaza Cervantes', 'Plaza de San Diego', 'Plaza de la Universidad']
    }, {
      question: '¿De qué Cardenal podemos encontrar su estatua en la plaza de San Diego?',
      indexResponseCorrect: 0,
      responses: ['Cardenal Cisneros', 'Cardenal Aquaviva', 'Cardenal Mariano Cervantes']
    }, {
      question: '¿Cuántos patios podemos encontrar en su interior?',
      indexResponseCorrect: 2,
      responses: ['1, Patio de Santo Tomás de Villanueva', '2, Patio de Filósofos y Patio de Santo Tomás de Villanueva', '3, Patio de Santo Tomás de Villanueva, el de Filósofos y el Trilingüe.']
    }, {
      question: '¿En la fachada podemos encontrar figuras de carácter…?',
      indexResponseCorrect: 1,
      responses: ['Filosófico', 'Religioso', 'Ambas son correctas']
    }, {
      question: '¿En el Paraninfo del Colegio Mayor de San Ildefonso se entrega cada año…?',
      indexResponseCorrect: 0,
      responses: ['El premio Cervantes de Literatura', 'Medallas de honor', 'Diplomas universitarios']
    }],
    quizAchievement: 'El Estudioso'
  },
  

  {
    name: 'Plaza de Cervantes',
    image: 'https://firebasestorage.googleapis.com/v0/b/papaya-app-173816.appspot.com/o/plaza-cervantes.jpg?alt=media&token=e502667e-b2e2-4cc7-a886-c308cc1f50df',
    desc: `Los orígenes de la Plaza se encuentran en la Edad Media y era tradicionalmente conocida como Plaza del Mercado debido a que se celebraba el mercado de la villa y la feria anual. En el siglo XIX se crearon varias obras para su embellecimiento; la estatua de Cervantes y la construcción del Quiosco de la Música. Actualmente es uno de los principales puntos de encuentro social y cultural de la ciudad. `,
    location: { latitude: 40.482513000, longitude: -3.364262800},
    markerImg: 'search.png',
    quiz: [{
      question: '¿Qué forma tiene la Plaza de Cervantes?',
      indexResponseCorrect: 2,
      responses: ['Cuadrada', 'Ovalada', 'Rectangular']
    }, {
      question: '¿Cuántos elementos arquitectónicos podemos encontrar en la Plaza?',
      indexResponseCorrect: 1,
      responses: ['1. La estatua de Miguel de Cervantes', '2. La estatua de Miguel de Cervantes y el Quiosco de la Música', '3. La estatua de Miguel de Cervantes, el Quiosco de la Música y la Torre de Santa María']
    }, {
      question: 'En la barandilla del Quiosco de la Música podemos apreciar:',
      indexResponseCorrect: 0,
      responses: ['Instrumentos musicales: una lira y dos trompetas', 'Elementos religiosos', 'Ambas son correctas']
    }, {
      question: 'La estatua de Miguel de Cervantes es de…',
      indexResponseCorrect: 0,
      responses: ['Bronce', 'Oro', 'Hierro']
    }, {
      question: '¿Qué elementos podemos encontrar en el monumento a Miguel de Cervantes?',
      indexResponseCorrect: 2,
      responses: ['Una pluma y un libro', 'Una pluma y una espada', 'Una pluma, una espada e ilustraciones que representan varias escenas de Don Quijote de la Mancha']
    }],
    quizAchievement: 'El Gran Quijote'
  },

  {
    name: 'Capilla del Oidor',
    image: 'http://i.istockimg.com/file_thumbview_approve/58624176/5/stock-photo-58624176-scallops-on-black-stone-plate.jpg',
    desc: `Pertenecía a la antigua Iglesia de Santa María. La capilla fue construida a comienzos del siglo XV por el 'oidor' del rey Juan II con la intención de que descansaran allí sus restos mortales. Actualmente es un centro de exposiciones y el lugar donde se conserva una réplica de la pila bautismal de Miguel de Cervantes.`,
    location: { latitude: 40.481517, longitude: -3.363407},
    markerImg: 'search.png',
    quiz: [{
      question: '¿La Capilla del Oidor es lo único que se conserva de la Iglesia de Santa María?',
      indexResponseCorrect: 1,
      responses: ['Verdadero, el resto fue destruido durante la Guerra Civil Española', 'Falso, además de la Capilla del Oidor también se conserva la Torre de Santa María']
    }, {
      question: '¿Qué recibió allí Miguel de Cervantes?',
      indexResponseCorrect: 0,
      responses: ['Sacramento Bautismal', 'Premio Cervantes', 'Escudo de caballería']
    }, {
      question: 'La iglesia de Santa María de la que es parte la Capilla del Oidor, ¿Fue destruida durante…?',
      indexResponseCorrect: 2,
      responses: ['Guerra de las Galaxias', 'Batalla de Troya', 'Guerra Civil Española']
    }, {
      question: '¿Qué ave típica de Alcalá de henares anidan en la Torre de Santa María?',
      indexResponseCorrect: 2,
      responses: ['Palomas', 'Colibrís', 'Cigüeñas']
    }, {
      question: 'Actualmente dispone de una sala de exposición permanente sobre:',
      indexResponseCorrect: 0,
      responses: ['Miguel de Cervantes', 'Guerra Civil Española', 'Escritores de la Generación del 27']
    }],
    quizAchievement: 'Orejotas'
  },

  {
    name: 'Corral de Comedias',
    image: 'http://i.istockimg.com/file_thumbview_approve/12556651/5/stock-photo-12556651-mahimahi.jpg',
    desc: `Es uno de los corrales de comedias más antiguos que se conservan en Europa. Se construyó en 1601 por orden del Ayuntamiento de Alcalá de Henares. El edificio ha tenido diversos usos lo que ha dado lugar a importantes transformaciones en su estructura arquitectónica. Actualmente ha recuperado su programación teatral, y existe la posibilidad de visitas guiadas.`,
    location: { latitude: 40.482303, longitude: -3.364571},
    markerImg: 'search.png',
    quiz: [{
      question: 'El actual Corral de Comedias se conserva intacto',
      indexResponseCorrect: 1,
      responses: ['Verdadero', 'Falso, ha sido recuperado a raiz del deterioro en los años setenta']
    }, {
      question: '¿Cuáles han sido los usos del Corral de Comedias a lo largo de su historia?',
      indexResponseCorrect: 0,
      responses: ['Corral de comedias, coliseo, cine, teatro romántico', 'Sala de cine, teatro, salón de conciertos', 'Ha sido corral de comedias durante toda su historia']
    }, {
      question: 'Además del Corral de Comedias, Alcalá de Henares cuenta con otro teatro de gran esplendor ¿Cuál?',
      indexResponseCorrect: 1,
      responses: ['El Teatro Lope de Vega', 'El Teatro Salón de Cervantes', 'El Teatro Don Quijote de la Mancha']
    }, {
      question: '¿Recuerdas en qué año se fundó el Corral de  Comedias?',
      indexResponseCorrect: 2,
      responses: ['1492', '2015', '1601']
    }, {
      question: 'Una de las principales características de los Corrales de Comedia es que su techo...',
      indexResponseCorrect: 2,
      responses: ['Es de vidriagón', 'Es de madera', 'Está al descubierto']
    }],
    quizAchievement: ''
  },

  {
    name: 'Hospital de Antezana',
    image: 'http://i.istockimg.com/file_thumbview_approve/18294110/5/stock-photo-18294110-king-crab-legs.jpg',
    desc: `Fue creado en 1483 como institución de caridad para ayudar a los pobres, enfermos y peregrinos. Era una práctica habitual por parte de las familias ricas y muy religiosas de la Edad Media. Actualmente continúa su función asistencial a ancianos sin recursos y es considerado el hospital en uso más antiguo de toda Europa.`,
    location: { latitude: 40.482286, longitude: -3.366864},
    markerImg: 'search.png',
    quiz: [{
      question: 'El hospital de Antezana es…',
      indexResponseCorrect: 2,
      responses: ['Una congregación religiosa', 'Una réplica de un antiguo hospital de la época de Cervantes', 'Uno de los hospitales en funcionamiento más antiguos de Europa']
    }, {
      question: 'El hospital de Antezana ha sido dirigido durante los últimos 50 años por…',
      indexResponseCorrect: 1,
      responses: ['El cardenal Cisneros', 'Las Monjas de la Orden Siervas de María', 'La Cruz Roja']
    }, {
      question: 'En el interior del hospital de Antezana podemos ver un patio rectangular con',
      indexResponseCorrect: 0,
      responses: ['Un pozo', 'Una escultura de la Virgen María', 'Un toldo de cuadros']
    }, {
      question: 'El hospital de Antezana está ubicado en',
      indexResponseCorrect: 0,
      responses: ['El antiguo barrio judío', 'El antiguo barrio cristiano', 'La Plaza de Cervantes']
    }, {
      question: 'El hospital de Antezana rinde homenaje con una placa a...',
      indexResponseCorrect: 0,
      responses: ['Sus fundadores: D. Luis de Antezana y Dª Isabel de Guzman', 'Jesucristo', 'A los antiguos huéspedes judíos']
    }],
    quizAchievement: 'Alma de buena fe'
  },

  {
    name: 'Museo Casa Natal de Cervantes',
    image: 'http://i.istockimg.com/file_thumbview_approve/56241842/5/stock-photo-56241842-salmon-g',
    desc: `Reconstruye el inmueble donde, según los estudios, nació el escritor Miguel de Cervantes. Se construyó en 1956, rememorando los cánones de la casa tradicional castellano-toledana. En su interior se recrean las costumbres, gustos y quehaceres cotidianos de los siglos XVI y XVII. También ofrece talleres infantiles y juveniles, conferencias y espectáculos teatrales y musicales.`,
    location: { latitude: 40.482122, longitude: -3.367019},
    markerImg: 'search.png',
    quiz: [{
      question: '¿Cuál fue la obra más famosa de Miguel de Cervantes?',
      indexResponseCorrect: 1,
      responses: ['La Galatea', 'Don Quijote de la Mancha', 'La Odisea']
    }, {
      question: 'Rellena con las palabras que faltan: “En un lugar de _____ de cuyo nombre no quiero acordarme”',
      indexResponseCorrect: 1,
      responses: ['La pradera', 'La Mancha', 'La capital']
    }, {
      question: '¿Además de novelista Miguel de Cervantes también era…?',
      indexResponseCorrect: 0,
      responses: ['Soldado', 'Bailarín', 'Profesor']
    }, {
      question: '¿Qué famoso escudero acompaña a Don Quijote en la estatua que se encuentra en frente del Museo de la Casa Natal de Cervantes?',
      indexResponseCorrect: 2,
      responses: ['El Cid Campeador', 'Dulcinea', 'Sancho Panza']
    }, {
      question: 'En el patio de la casa podemos apreciar una placa que dice así:',
      indexResponseCorrect: 1,
      responses: ['Aquí nació Miguel de Cervantes Saavedra. “Oh caballero es Don Dinero”', 'Aquí nació Miguel de Cervantes Saavedra. “El manco sano, el famoso todo, el escritor alegre, el regocijo de las musas”', 'Aquí nació Miguel de Cervantes Saavedra. “Gran soldado, escritor y marido. Gracias por ofrecernos un amplio abanico de posibilidades.']
    }],
    quizAchievement: 'El Terror de los Molinos'
  },

  {
    name: 'Catedral Magistral de los Santos Justo y Pastor',
    image: 'https://firebasestorage.googleapis.com/v0/b/papaya-app-173816.appspot.com/o/catedral-magistral.jpg?alt=media&token=25122301-dacd-4f50-862b-8bc2ea59fb18',
    desc: `Fue construida en 1514 y su origen se remonta al martirio de los Santos Justo y Pastor a comienzo del siglo IV. Según la leyenda, ambos niños fueron asesinados por su oposición a rehusar del cristianismo. Tras su muerte, se construyó una pequeña Iglesia en el lugar donde fueron martirizados. Más adelante la destruyeron para construir la actual de estilo gótico por orden del Cardenal Cisneros.\nEn su interior podemos encontrar los restos de los Santos Niños y la tumba de Cisneros. Actualmente es la sede del Obispo y se celebran todo tipo de celebraciones católicas.`,
    location: { latitude: 40.480525, longitude: -3.369258},
    markerImg: 'search.png',
    quiz: [{
      question: 'En el interior de la Catedral podemos encontrar…',
      indexResponseCorrect: 0,
      responses: ['Urna de plata con parte de los restos de los Santos Niños', 'Urna de plata con parte de los restos del Cardenal Cisneros', 'Sepulcro del Cardenal Cisneros']
    }, {
      question: 'En su interior podemos apreciar una vidriera policromada de San Felix de Alcalá. ¿Qué es una vidriera policromada?',
      indexResponseCorrect: 0,
      responses: ['Composición elaborada con vidrios de colores, pintados o recubiertos con esmaltes', 'Composición elaborada con témperas de colores', 'Composición elaborada con barro, agua y jabón']
    }, {
      question: 'Los Santos Justo y Pastor fueron asesinados por no renegar de…',
      indexResponseCorrect: 1,
      responses: ['Sus bienes materiales', 'Su Fe Cristiana', 'Su casa']
    }, {
      question: 'La Catedral de los Santos Justo y Pastor es uno de los dos únicos templos que poseen el título de Iglesia Magistral.',
      indexResponseCorrect: 0,
      responses: ['Verdadero', 'Falso']
    }, {
      question: 'A parte de sus funciones religiosas, actualmente el templo alberga:',
      indexResponseCorrect: 1,
      responses: ['Exposiciones temporales sobre pintores del Siglo XV', 'Un centro de Interpretación y un Museo Catedralicio', 'Conciertos de índole religiosa']
    }],
    quizAchievement: 'Los Santos Niños'
  },

  {
    name: 'Puerta de Madrid',
    image: 'https://firebasestorage.googleapis.com/v0/b/papaya-app-173816.appspot.com/o/puerta-madrid.jpg?alt=media&token=5ac68946-f7ad-4738-8df6-5b7ac667898c',
    desc: `Fue edificada en el año 1788 para sustituir a una de las puertas medievales del antiguo recinto amurallado debido a que dificultaba el acceso a la ciudad. Presenta el aspecto de un arco de triunfo de estilo neoclásico. `,
    location: { latitude: 40.48064664988782, longitude: -3.3726954460144043 },
    markerImg: 'search.png',
    quiz: [{
      question: '¿A qué rey hace referencia la lápida que se encuentra sobre el arco de la puerta?',
      indexResponseCorrect: 2,
      responses: ['Felipe II', 'Juan Carlos de Borbón', 'Carlos III']
    }, {
      question: '2.	Además de la anterior referencia, ¿Qué otro personaje aparece citado en otra lápida de la puerta?',
      indexResponseCorrect: 2,
      responses: ['Don Quijote de la Mancha', 'Miguel de Cervantes', 'Arzobispo de Toledo']
    }, {
      question: 'Existe otra puerta real que guarda semejanzas con la puerta de Madrid. ¿Cuál es?',
      indexResponseCorrect: 0,
      responses: ['Puerta de Alcalá', 'Puerta de San Petersburgo', 'Puerta del Sol']
    }, {
      question: '4.	¿En qué año fue derribada y reconstruida la Puerta de Madrid?',
      indexResponseCorrect: 2,
      responses: ['2017', '1850', '1778']
    }, {
      question: '¿De cuántos cuerpos o partes está formada la Puerta de Madrid?',
      indexResponseCorrect: 1,
      responses: ['6', '3', '2']
    }],
    quizAchievement: 'Toc, toc'
  },

  {

    name: 'Recinto Amurallado',
    image: 'http://i.istockimg.com/file_thumbview_approve/67121439/5/stock-photo-67121439-fresh-tiger-shrimp-on-ice-on-a-black-stone-table.jpg',
    desc: `Se construyó entre el siglo XIII y el XV con el objetivo de proteger la ciudad militarmente y controlar sus accesos. Los recintos amurallados fueron el resultado de sucesivas modificaciones y ampliaciones durante varios siglos.\nLa construcción inicial se realizó en la segunda mitad del siglo XIII abarcando un espacio de 37 hectáreas y siete puertas.\nEn la actualidad quedan 700 metros, 16 torres, el Arco de San Bernardo y la Puerta de Madrid.`,
    location: { latitude: 40.481667, longitude: -3.372778},
    markerImg: 'search.png',
    quiz: [{
      question: '¿Cuántos metros mide lo que queda de muralla?',
      indexResponseCorrect: 1,
      responses: ['50 metros', '600 metros', '1500 metros']
    }, {
      question: '¿Qué función tenían las murallas medievales de la época?',
      indexResponseCorrect: 0,
      responses: ['Defensiva', 'Estética', 'Todas las anteriores']
    }, {
      question: 'La muralla rodea parte de un famoso palacio. ¿Cuál es?',
      indexResponseCorrect: 1,
      responses: ['Palacio Real', 'Palacio Arzobispal', 'Palacio de Buckingham']
    }, {
      question: 'En los jardines que se encuentran bordeando la muralla podemos encontrar distintas…',
      indexResponseCorrect: 0,
      responses: ['Esculturas al aire libre', 'Casas de estilo medieval', 'Atracciones medievales']
    }, {
      question: '¿De cuántas torres se compone actualmente el recinto amurallado?',
      indexResponseCorrect: 2,
      responses: ['Ninguna, todas las torres fueron destruidas', '2', '16']
    }],
    quizAchievement: 'Asalto a la fortaleza'
  },

  {
    name: 'Palacio Arzobispal',
    image: 'https://firebasestorage.googleapis.com/v0/b/papaya-app-173816.appspot.com/o/palacio-arzobispal.jpg?alt=media&token=a0110634-92b5-485e-a9bb-d6772e6ff027',
    desc: `Fue la residencia de los arzobispos de Toledo en Alcalá de Henares. Se tiene noticia de su construcción a partir del siglo XIII,  realizándose ampliaciones, mejoras y restauraciones hasta el siglo XIX.\nEl conjunto se completa con un torreón que recuerda el uso que tuvo el edificio como fortaleza defensiva. Actualmente se ofrece la posibilidad de subir a la muralla medieval, visitando el interior de sus torres.`,
    location: { latitude: 40.482435, longitude: -3.369649},
    markerImg: 'search.png',
    quiz: [{
      question: 'El Palacio Arzobispal es…',
      indexResponseCorrect: 0,
      responses: ['Un palacio fortaleza', 'Un palacio real', 'Ambas son correctas']
    }, {
      question: 'En el Palacio Arzobispal de Alcalá de Henares se entrevistaron:',
      indexResponseCorrect: 1,
      responses: ['Miguel de Cervantes y el Cardenal Cisneros', 'Los Reyes Católicos y Cristóbal Colón', 'Franco y Hitler']
    }, {
      question: 'Desde hace años se celebra en el Palacio Arzobispal una representación al aire libre de la obra:',
      indexResponseCorrect: 0,
      responses: ['“Don Juan Tenorio” de José de Espronceda.', '“La Celestina”  de Fernando de Rojas', '“Romeo y Julieta” de William Shakespeare.']
    }, {
      question: 'En la Actualidad el Palacio…',
      indexResponseCorrect: 2,
      responses: ['Es un museo arqueológico', 'Es la residencia de verano de los Reyes de España', 'Es la sede del Obispado de Alcalá de Henares, y residencia del Obispo']
    }, {
      question: '¿Qué podemos apreciar en la fachada principal del Palacio Arzobispal?',
      indexResponseCorrect: 0,
      responses: ['Un escudo', 'Una medalla militar', 'Un cuadro']
    }],
    quizAchievement: 'El Mujeriego'
  }
];
