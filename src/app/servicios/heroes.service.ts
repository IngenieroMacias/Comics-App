import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  //heros:Heroes "Heroes hace referencia a la interface de tipo objeto se puede importar de otro archivo tipo interface"
  
  private heroes:Heroe[]=[
    //Objeto que puede ser importado de un archivo .json
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      descripcion:"Es un superhéroe que aparece en los cómics estadounidenses publicados por DC Comics. Creado por el artista Paul Norris y el escritor Mort Weisinger, el personaje debutó en More Fun Comics # 73 (noviembre de 1941). Inicialmente, una característica de respaldo en los títulos de antología de DC, Aquaman más tarde protagonizó varios volúmenes de una serie de cómics en solitario. Durante los últimos años de la década de 1950 y 1960, el período de recuperación de superhéroes conocido como la Edad de Plata, fue miembro fundador de la Liga de la Justicia. En la Edad Moderna de la década de 1990, los escritores interpretaron el personaje de Aquaman más seriamente, con historias que representan el peso de su papel como rey de la Atlántida.Las apariciones animadas originales del personaje en la década de 1960 dejaron una impresión duradera, lo que hizo a Aquaman ampliamente reconocido en la cultura popular y uno de los superhéroes más reconocidos del mundo. Los chistes sobre su representación sana y débil en Super Friends y sus débiles poderes y habilidades han sido elementos básicos de los programas de comedia y las rutinas de soporte, liderando DC en varias ocasiones para intentar que el personaje sea más poderoso o más poderoso en los cómics. Las representaciones modernas de cómics han intentado conciliar estos diversos aspectos de su percepción pública, haciendo que Aquaman sea serio y meditabundo, cargado de mala reputación y luchando por encontrar un verdadero papel y propósito más allá de su lado público como un rey depuesto y un héroe caído.Aquaman ha sido presentado en varias adaptaciones, apareciendo primero en forma animada en la Hora de Aventura de Superman / Aquaman de 1967 y luego en el programa relacionado de Super Friends. Desde entonces, ha aparecido en varias producciones animadas, incluyendo papeles prominentes en la serie de la Liga de la Justicia de 2000 y Justice League Unlimited y Batman: The Brave and the Bold, así como en varias películas originales animadas de DC Universe. El actor Alan Ritchson interpretó al personaje en el programa de televisión de acción en vivo Smallville. En el DC Extended Universe, el actor Jason Momoa interpretó al personaje en las películas Batman v Superman: Dawn of Justice (2016), Liga de la Justicia (2017) y Aquaman (2018).",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      descripcion:"Es un personaje creado por los estadounidenses Bob Kane y Bill Finger,5​ y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.La identidad secreta de Batman es Bruce Wayne (Bruno Díaz en algunos países de habla hispana),6​7​8​ un millonario magnate empresarial y filántropo dueño de Empresas Wayne en Gotham City. Después de presenciar el asesinato de sus padres, el Dr. Thomas Wayne y Martha Wayne en un violento y fallido asalto cuando era niño, juró venganza contra los criminales, un juramento moderado por el sentido de la justicia. Bruce Wayne se entrena física e intelectualmente y crea un traje inspirado en los murciélagos para combatir el crimen, con sus gadgets de combate del batcinturón y sus vehículos.A diferencia de los superhéroes, no tiene superpoderes: recurre a su intelecto, así como a aplicaciones científicas y tecnológicas para crear armas y herramientas con las cuales lleva a cabo sus actividades. Vive en la mansión Wayne, en cuyos subterráneos se encuentra la Batcueva, el centro de operaciones de Batman. Recibe la ayuda constante de otros aliados, entre los cuales pueden mencionarse Robin, Batgirl (posteriormente Oráculo), Nightwing, el comisionado de la policía local, James Gordon, y su mayordomo Alfred Pennyworth. Una gran variedad de villanos conforman la galería de Batman, incluido su archienemigo, el Joker.Se trata de uno de los personajes más emblemáticos de DC Comics. Dada su buena aceptación, obtuvo su propia revista en 1940. Tres años después, Columbia Pictures estrenó la primera adaptación para la televisión del personaje, a la cual le siguió la serie Batman y Robin, en 1949. A mediados de la década de 1960, se lanzó otra serie titulada Batman, que utilizó un concepto más «camp» que terminó apartándolo de su tono sombrío con el que originalmente fue concebido. Más adelante, los escritores Dennis O'Neil, Neal Adams y Frank Miller produjeron nuevo material escrito sobre el universo de Batman entre los años 1970 y 1980, retomando el diseño y elementos originales de la franquicia. Se considera que la película homónima de Tim Burton, estrenada en 1989, tuvo un papel importante en la popularidad contemporánea del hombre murciélago, al igual que la serie de filmes iniciada con Batman Begins en 2005, dirigida por Christopher Nolan.10​ Además de las anteriores producciones, existen varias otras más en las que el personaje y sus elementos han sido incorporados.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      descripcion:" es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Daredevil fue creado por el escritor y editor Stan Lee y el artista Bill Everett, con una cantidad no especificada de aportes de Jack Kirby. El personaje apareció por primera vez en Daredevil #1 (abril de 1964). La influencia del escritor y artista Frank Miller en el título a principios de la década de 1980 consolidó al personaje como una parte popular e influyente del Universo Marvel. Daredevil es comúnmente conocido por apodos como El hombre sin miedo y el Diablo de la Cocina del Infierno Los orígenes de Daredevil provienen de un accidente que tuvo en su infancia la cual le dio habilidades especiales. Mientras crecía en el vecindario irlandés-estadounidense de Hell's Kitchen de la clase obrera, históricamente áspero y asolado por el crimen, en la ciudad de Nueva York, Matt Murdock es cegado por una sustancia radioactiva que cae de un camión después salvar a un hombre que estaba por ser atropellado por un auto. Si bien ya no puede ver, la exposición radioactiva aumenta sus sentidos restantes más allá de la capacidad humana normal y le da un sentido de radar. Su padre, un boxeador llamado Jack Murdock, lo apoya a medida que crece, aunque luego unos mafiosos lo matan después de negarse a perder una combate arreglado. Después de ponerse un traje rojo oscuro y amarillo (más tarde solo rojo), Matt busca venganza contra los asesinos de su padre como el superhéroe Daredevil, encontrándose con varios enemigos, como Bullseye y Kingpin. También se convierte en abogado después de haberse graduado de la Escuela de Derecho de Columbia con su mejor amigo y compañero de cuarto, Franklin Froggy Nelson.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      descripcion:"Es un personaje ficticio, que aparece en los cómics estadounidenses publicados por la editorial Marvel Comics. El personaje fue creado por los escritores Stan Lee y Jack Kirby siendo su primera aparición en The Incredible Hulk #1 publicado en mayo de 1962. En sus apariciones de cómic, el personaje es a la vez Hulk, un ser humanoide enorme de piel verde, corpulento y musculoso que posee una gran fortaleza física, y su alter ego el Dr. Robert Bruce Banner (o Dr. David Bruce Banner),3​4​ un físico físicamente débil, socialmente retraído y emocionalmente reservado, las dos personalidades existentes como independientes y con resentimiento de la otra.Después de una exposición accidental a los rayos gamma durante la detonación de una bomba experimental, Banner se transforma físicamente en Hulk cuando está sometido a estrés emocional, a su voluntad o en contra de ella, lo que a menudo lleva a destrozos y conflictos que complican la vida civil de Banner. El nivel de fuerza de Hulk se transmite normalmente de forma proporcional a su nivel de ira. Comúnmente retratado como un salvaje furioso, Hulk ha sido representado con otras personalidades basadas en la mente fracturada de Banner, desde una fuerza descerebrada y destructiva hasta un brillante guerrero o genio científico por derecho propio. A pesar del deseo de soledad tanto de Hulk como de Banner, el personaje tiene un gran elenco de apoyo, que incluye al amor de Banner, Betty Ross, su amigo Rick Jones, su prima She-Hulk, sus hijos Hiro-Kala y Skaar, y sus cofundadores del equipo de superhéroes, Los Vengadores. Sin embargo, su poder incontrolable lo ha llevado a entrar en conflicto con sus compañeros héroes y otros.Lee dijo que la creación de Hulk se inspiró en una combinación de Frankenstein y el Dr. Jekyll y el Sr. Hyde.5​Aunque la coloración de Hulk ha variado a lo largo de la historia de publicación del personaje, el color más usual es el verde. Tiene dos frases principales: '¡Hulk es el más fuerte que existe!' y el más conocido , que ha fundado la base de numerosos memes de la cultura pop.Uno de los personajes más emblemáticos de la cultura popular, ha aparecido en una variedad de mercancías, como prendas de vestir y objetos coleccionables, estructuras inspiradas en el mundo real (como atracciones de parques temáticos) y ha sido mencionado en una cantidad de medios. Banner y Hulk han sido adaptados en la vida real, animación y encarnaciones de videojuegos. En televisión se produjo la serie The Incredible Hulk (1978-1982) en la que las dos personalidades eran interpretadas por Bill Bixby y Lou Ferrigno. En cine se han realizado los filmes Hulk (2003), protagonizada por Eric Bana; The Incredible Hulk (2008), con Edward Norton; y también aparece el personaje en The Avengers (2012), Avengers: Age of Ultron (2015), Thor: Ragnarok (2017), Avengers: Infinity War (2018) y Avengers: Endgame (2019), en todos ellos interpretado por Mark Ruffalo.",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      descripcion:"En un universo tan extenso como misterioso una pequeña pero poderosa fuerza ha existido durante siglos. Protectores de la paz y la justicia, reciben el nombre de Linterna Verde. Una hermandad de guerreros que han jurado mantener el orden intergaláctico, donde cada Linterna Verde lleva un anillo que le concede sus superpoderes, alimentado por el poder verde de la voluntad designando a cada Linterna Verde a cada uno de los 3600 sectores del universo. Sin embargo, un antiguo enemigo llamado Parallax, tras ser accidentalmente liberado amenaza con romper el equilibrio de poder en el universo usando el poder del miedo, además de alimentarse de él teniendo como primeras víctimas a sus liberadores del desolado planeta Ryut. Todo ello fortalece a Parallax quien con su nueva fuerza busca a Abin Sur, su carcelero del sector 2814 quien lo enfrenta pero es mortalmente herido por Parallax. Abin Sur escapa en su nave estrellándose en la Tierra y ordena a su anillo de poder a buscar a su digno sucesor.",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      descripcion:"Es un superhéroe ficticio creado por los escritores y editores Stan Lee y Steve Ditko. Apareció por primera vez en el cómic de antología Amazing Fantasy # 15 (10 de agosto de 1962), en la Edad de Plata de los cómics. Aparece en los cómics estadounidenses publicados por Marvel Comics, así como en varias películas, programas de televisión y adaptaciones de videojuegos ambientadas en el Universo Marvel. En las historias, Spider-Man es el alias de Peter Parker, un huérfano criado por su tía May y su tío Ben en la Ciudad de Nueva York después de que sus padres Richard y Mary Parker murieron en un accidente aéreo. Lee y Ditko tuvieron que lidiar con los problemas de la adolescencia y los problemas financieros, y lo acompañaron con muchos personajes de apoyo, como J. Jonah Jameson, Flash Thompson, Harry Osborn, los intereses románticos, Gwen Stacy y Mary Jane Watson, y enemigos como el Doctor Octopus, Kingpin, Duende Verde y Venom. Su historia de origen lo tiene adquiriendo habilidades relacionadas con la araña después de un mordisco de una araña radioactiva; estos incluyen aferrarse a las superficies, disparar telarañas desde dispositivos montados en la muñeca y detectar el peligro con su sentido arácnido.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      descripcion:"​Es un superhéroe ficticio que aparece en los cómics estadounidenses publicado por Marvel Comics, principalmente en asociación con los X-Men. Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano. Wolverine ha sido representado de diversas formas como miembro de los X-Men, Alpha Flight, Fuerza-X y Los Vengadores.Ha adquirido distintos nombres como Lobezno en España y Glotón, Guepardo, Aguja Dinámica o Emilio Garra en Hispanoamérica, donde también utilizan el alias original.Su primera aparición la realizó dentro de las páginas del número 180 del cómic The Incredible Hulk, en octubre de 1974, aunque su presentación formal fue en el número siguiente por descuido del guionista (número 181, noviembre de 1974). Además, hizo frecuentes apariciones como invitado en otros cómics de Marvel. En las décadas de 1980 y 1990, los cómics en los que aparecía el personaje de Wolverine llegaron a convertirse en los más vendidos de la editorial.Él ha aparecido en la mayoría de las adaptaciones de X-Men, incluyendo la serie animada de televisión, juegos de video, y la acción en vivo de la 20th Century Fox de series y de la películas de X-Men, en la que es interpretado por Hugh Jackman en nueve de las diez películas. El personaje está altamente calificado en muchas de las mejores listas de cómics, ocupa el puesto # 1 en los mejores 200 personajes de cómic 2008 de la revista Wizard; 4 ° en los personajes de cómic más grandes de Empire 2008; y 4 ° en los 100 mejores héroes de cómic de IGN en 2011.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ]

  //El contructor se ejecuta despues del OnInit
  constructor() { 
    console.log("Servicio Funcionando");
  }
  
  //La función retorna Objetos en TypeScript
  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe(id:number){
    return this.heroes[id];
  }

  buscarHeroes(termino:string):Heroe[]{
    let heroesArr:Heroe[]=[]
    termino=termino.toLowerCase();
    for (let i=0; i<this.heroes.length;i++){
    let heroe=this.heroes[i];
    let nombre=heroe.nombre.toLowerCase();
    if(nombre.indexOf(termino)>=0){
       heroe.idx=i;
       heroesArr.push(heroe);
   }
  }
  return heroesArr;
  }
}

export interface Heroe{
  nombre:string,
  bio: string,
  descripcion:string,
  img: string,
  aparicion: string,
  casa: string,
  idx?: number
}
