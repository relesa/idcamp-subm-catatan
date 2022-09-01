function NoteSearch({search, onSearch}) {
   return (
      <div className="container_search">
         <div id="note_search" className="note_search">
            <h2>Cari Catatan</h2>
            <input id="search_input"
               type="search" 
               placeholder="Cari catatan berdasarkan judul." 
               value={search} 
               onChange={(query) => onSearch(query.target.value)}
               >
            </input>
         </div>
      </div>     
   )
}

export default NoteSearch;