import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';

function ArchiveButton({ id, onArchive }) {
   return (
      <button className="btn btn--archive btn--icon" title="Archive" 
         onClick={() => onArchive(id)}>
         <BookmarkBorderSharpIcon style={{ 'color': "white" }}/>
      </button>
   );
}

export default ArchiveButton;