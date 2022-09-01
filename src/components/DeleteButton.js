import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';

function DeleteButton({ id, onDelete }) {
   return (
      <button className="btn btn--delete btn--icon" title="Delete" 
         onClick={() => onDelete(id)}>
         <HighlightOffSharpIcon style={{ 'color': "white" }}/>
      </button>
   );
}

export default DeleteButton;