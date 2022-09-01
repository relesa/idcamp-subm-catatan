import logo from '../assets/image/idcamp-logo-black.png';

function NoteHeader() {
   return (
      <div className="note__header">
         <img src={logo} alt="logo" className='logo' />
         <nav>
            <ul>
            <li selected><a href="#note_form">Buat</a></li>
            <li><a href="#note_search">Cari</a></li>
            <li><a href="#note_list">List</a></li>
            </ul>
         </nav>
      </div>
   )
}

export default NoteHeader;