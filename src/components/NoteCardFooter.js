import DeleteButton from "./DeleteButton"
import ArchiveButton from "./ArchiveButton";

function NoteCardFooter({ id, onArchive, onDelete }) {
   return (
      <div className="card__footer">
         <DeleteButton id={id} onDelete={onDelete} />
         <ArchiveButton id={id} onArchive={onArchive} />
      </div>
   );
}

export default NoteCardFooter;