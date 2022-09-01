import dicoding_image from '../assets/image/dicoding-header-logo.png';
import indosat_image from '../assets/image/indosat-ooredoo-hutchison-logo.png';

function Footer() {
   return (
    <footer>
        <img src={dicoding_image}
            class="dicoding_image" alt="dicoding" />
        <img src={indosat_image} 
            class="indosat_image" alt="indosat" />
        <p>Belajar Membuat Aplikasi Web dengan React</p>
        <p>Copyright &copy; 2022 Dicoding Indonesia & Indosat Ooredoo Hutchison.</p>
    </footer>
   );
}

export default Footer;