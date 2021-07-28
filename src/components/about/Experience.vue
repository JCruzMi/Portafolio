<template>
  <div class="row">
    <div class="timeline">
      <div class="row">
        <!-- duplicate timeline -->
        <div class="timeline-item" v-for="item in items" :key="item">
          <div class="timeline-item-inner outer-shadow">
            <i class="fas fa-graduation-cap icon"></i>
            <span>{{item.fecha}}</span>
            <h3>{{item.nombre}}</h3>
            <h4>{{item.compa}}</h4>
            <p>{{item.desc}}</p>                  
          </div>
        </div>
        <!-- duplicate timeline -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){

    return{
      items:[
        {
          fecha: "2018-2021", 
          nombre: "MARATONES DE PROGRAMACIÓN", 
          compa: "Universidad EAN", 
          desc : "Participación en maratones internas, universitarias y nacionles de programacion con lenguaje Python. Lider maratonista de la universidad EAN."
        },
        {
          fecha: "2020-2020", 
          nombre: "COVID-APP", 
          compa: "Seminario de Investigación", 
          desc : "Desarrollo de una aplicacion web de inicio a fin con Angular que hace seguimiento cada 5 minutos al Covid-19 mediante una API dada por una universidad."
        },
        {
          fecha: "2021-2021", 
          nombre: "PROYECTO PARA SEMILLEROS", 
          compa: "Proyecto Universidad EAN", 
          desc : "Desarrollo web frontend de una aplicacion que permite crear y editar eventos pasados de la universidad con VUE.js y Laravel como backend."
        },
        {
          fecha: "2021-indefinido", 
          nombre: "Buscando Trabajo", 
          compa: "Buscando", 
          desc : "En busqueda de trabajo."
        },
      ]
    }

    // Realizar guardado de todo el recorrido y mandarlo a la vista
  }
}
</script>

<style>
.timeline{
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
}
/**Lina vertical*/
.timeline:before{
  content : '';
  width: 2px;
  height: 100%;
  left: 10%;
  top: 0;
  background-color: var(--bg-black-100);
  position: absolute;
}
/**Fin Lina vertical*/

/**Caja Item*/
.timeline .timeline-item {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 20px 10%;
  text-align: center;
}
/**Caja Item Intercalado*/
.timeline .timeline-item:nth-child(odd) {
  padding-left: calc(10% + 50px);
}

.timeline .timeline-item:nth-child(even) {
  padding-left: calc(10% + 50px);
}
/**Fin Caja Item Intercalado*/

.timeline .timeline-item-inner{
  padding: 30px;
  border-radius: 5px;
  position: relative;
}
/**Fin Caja Item*/

/**Lina horizontal al lado del icono */

.timeline .timeline-item-inner:before{
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: var(--bg-black-100);
  margin-top: 10%;
}
/**Lina horizontal Intercalado */
.timeline .timeline-item .timeline-item-inner:before{
  left: -30px;
}

/**Fin Lina horizontal al lado del icono */
/**Fin Lina horizontal al lado del icono */

/** Icono */
.timeline .timeline-item-inner .icon{
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  position: absolute;
  top: 17px;
  border: 2px solid var(--bg-black-100);
  border-radius: 50px;
  font-size: 16px;
  color: var(--text-salmon-700);
  background-color: var(--bg-black-50);
}
/** Icono Intercalado */
.timeline .timeline-item .icon{
  left: -70px;
  margin-top: 10%;
}


/**Fin Icono Intercalado */
/**Fin Icono */

/** Textos span,h3,h4,p */
.timeline .timeline-item-inner span{
  font-weight: 500;
  color: var(--text-salmon-700);
  display: block;
  margin: 0 0 10px;
  text-transform: capitalize;
}
.timeline .timeline-item-inner h3{
  font-weight: 600;
  color: var(--text-salmon-700);
  font-size: 20px;
  margin: 0 0 5px;
  text-transform: capitalize;
}
.timeline .timeline-item-inner h4{
  font-size: 16px;
  font-style: italic;
  color: var(--bg-black-900);
  margin: 0;
}
.timeline .timeline-item-inner p{
  font-size: 16px;
  color: var(--bg-black-900);
  line-height: 26px;
  margin: 15px 0 0;
}

</style>