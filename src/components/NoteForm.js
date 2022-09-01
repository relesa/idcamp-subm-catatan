import { Component } from 'react';
import autoBind from 'auto-bind';
import swal from 'sweetalert';
import coding from '../assets/image/thumbail.png';

class NoteForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         body: '',
         limit: 50,
      }

      autoBind(this);
   }

   onTitleChangeHandler(event) {
      const limit = 50;

      this.setState((prevState) => {
         return {
            ...prevState,
            title: event.target.value.slice(0, limit),
            limit: limit - event.target.value.slice(0, limit).length,
         }
      });
   }

   onBodyChangeHandler(event) {
      this.setState((prevState) => {
         return {
            ...prevState,
            body: event.target.value,
         }
      });
   }

   resetFormInput() {
      this.setState((prevState) => {
         return {
            title: prevState.title = '',
            body: prevState.body = '',
            limit: prevState.limit = 50,
         }
      });
   }

   onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNote(this.state);
      this.resetFormInput();
      swal("Catatan Kamu Sudah Tersimpan!", {
         icon: "success",
      });
   }

   render() {
      return (
         <div id="note_form" className="row rowform bg-img">
            <div className="column_img">
               <img src={coding} alt="coding" className='coding' />
            </div>
            <div className="column__form">
               
               <form className="note__form" onSubmit={this.onSubmitEventHandler}>
                  <h2>Buat Catatan</h2>
                  <input type="text" placeholder="Judul Catatan" required value={this.state.title} 
                     maxLength="50"
                     onChange={this.onTitleChangeHandler}>   
                  </input>
                  <div className="note__form__limit-info">
                     Sisa karakter <span>{this.state.limit}</span>
                  </div>
                  <textarea placeholder="Isi catatan..." rows="5" required 
                     value={this.state.body} onChange={this.onBodyChangeHandler}>
                  </textarea>
                  <button type="submit" className="btn btn--primary">Simpan</button>
               </form>
            </div>
         </div>
      )
   }
}

export default NoteForm;