interface EditButtonProps{
    onClick: Function;
}

export const EditButton: React.FC<EditButtonProps> = ({onClick}) => {
    return(
        <button
            type="button"
            className='w-10 h-10 mr-2 bg-yellow rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
            onClick={()=> onClick()}
        >
            &#9998;
        </button>
    );
}