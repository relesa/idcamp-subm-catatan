import { Component } from 'react';
import autoBind from 'auto-bind';
import { getData } from './utils/index';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import NoteHeader from './components/NoteHeader';
import NoteSearch from './components/NoteSearch';
import Footer from './components/Footer';
import swal from 'sweetalert';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         notes: getData(),
         query: '',
      }

      autoBind(this);
   }

   onDeleteEventHandler(id) {
      swal({
         title: "Hapus Catatan.",
         text: "Apakah Kamu Yakin Menghapus Catatan Ini?", 
         icon: "warning",
         buttons: true,
         dangerMode: true,
      })
      .then((willDelete) => {
         if (willDelete) {
            const notes = this.state.notes.filter(note => note.id !== id);
            this.setState({ notes });
            swal("Catatan Terhapus!", {
               icon: "success",
            });
         }
      });
   } 

   onArchiveEventHandler(id) {
      swal({
         title: "Arsipkan Catatan.",
         text: "Apakah Kamu Yakin Mengarsipkan Catatan Ini?", 
         icon: "warning",
         buttons: true,
         dangerMode: true,
      })
      .then((willDelete) => {
         if (willDelete) {
            const archives = [...this.state.notes];
            const index = this.state.notes.findIndex(note => note.id === id);
            archives[index].archived = archives[index].archived ? false : true;
            this.setState({ notes: archives });
            swal("Catatan Terarsip!", {
               icon: "success",
            });
         }
      });
   }

   onAddNoteEventHandler({ title, body }) {
      this.setState((prevState) => {
         return {
            notes: [
               ...prevState.notes,
               {
                  id: +new Date(),
                  title,
                  body,
                  createdAt: new Date().toISOString(),
                  archived: false,
               }
            ]
         }
      });
   }

   onSearchNoteEventHandler(query) {
      this.setState(() => {
         return {
            query: query
         }
      })
   }

   render() {
      return (
         <div className="note">
            <NoteHeader />
            <NoteForm addNote={this.onAddNoteEventHandler} />
            <NoteSearch onSearch={this.onSearchNoteEventHandler} />
            <div className="row row_list">
               <div className="column column_list">
                  <NoteList title={'Daftar Catatan'} key={'unarchived-notes'} 
                     query={this.state.query} notes={this.state.notes} 
                     onArchive={this.onArchiveEventHandler} onDelete={this.onDeleteEventHandler}>
                  </NoteList>
               </div>
               <div className="column column_list">
                  <NoteList title={'Arsip Catatan'} key={'archived-notes'} 
                     query={this.state.query} notes={this.state.notes} 
                     onArchive={this.onArchiveEventHandler} onDelete={this.onDeleteEventHandler} 
                     isArchived={true}> 
                  </NoteList>
               </div>
            </div>
            <Footer></Footer>
         </div>
      );
   }
}

export default App;