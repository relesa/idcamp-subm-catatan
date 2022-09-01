import NoteCardBody from "./NoteCardBody"
import NoteCardFooter from "./NoteCardFooter";

function NoteCard({ id, title, body, createdAt, onArchive, onDelete }) {
   return (
      <div className="card note_card">
         <NoteCardBody title={title} createdAt={createdAt} body={body} />
         <NoteCardFooter id={id} onArchive={onArchive} onDelete={onDelete} />
      </div>
   );
}

export default NoteCard;