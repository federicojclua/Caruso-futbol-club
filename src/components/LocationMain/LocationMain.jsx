import React from 'react';
import "./LocationMain.css"
import Container from 'react-bootstrap/Container';




const LocationMain = () => {
  return (
    <Container className='Location-component'>
               
  
    <div className="main-location-content">
        <h2 className='title-location'>Nuestras Ubicaciones</h2>
        <p className='subtitle-location'>Contamos con 2 sedes !Visitanos!</p>

        <div className="maps-container">
        <section className='maps1'>
            <div className=" text-location ">
           <li>En esta sede contamos con 3 canchas para F5, F6, F7 y F8 </li>
           <li>Te esperamos todos los días de la semana, de 9:00 AM a 12:00 PM. </li>
            </div>
          
     
          <div className="location-section animate__animated animate__pulse">
            <h3>Paso del Rey</h3>
            <p>Dirección: Av. Alcorta 943, B1742 Paso del Rey, Provincia de Buenos Aires</p>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.9346735210776!2d-58.76519703729644!3d-34.657205820501076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95c3b5e1bd6b%3A0xb5e1afd23a80dd26!2sCaruso%20FC%20%7C%20Paso%20del%20Rey!5e0!3m2!1ses-419!2sar!4v1717693476343!5m2!1ses-419!2sar" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        <section className='maps1' >
            <div className=" text-location ">
            <li>En esta sede contamos con 4 canchas para F5, F6, F7 y F8 </li>
            <li>Te esperamos todos los días de la semana, de 9:00 AM a 12:00 PM. </li>
            </div>



            <div className="location-section location-section animate__animated animate__pulse">
            <h3>Merlo</h3>
            <p>Dirección: Moreno 2500, B1722DAB Merlo, Provincia de Buenos Aires</p>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1640.8757737376782!2d-58.752978000000006!3d-34.660977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc954470da0fe7%3A0x1c478967183e55!2sCaruso%20FC%20%7C%20Merlo!5e0!3m2!1ses-419!2sar!4v1717725266124!5m2!1ses-419!2sar" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            </div>
        </section>
        </div>
    </div>
      
 </Container>
  );
}

export default LocationMain;



