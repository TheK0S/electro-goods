interface RemoveButtonProps{
    onClick: Function;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({onClick}) => {
    return(
        <button
            className='w-10 h-10 mr-2 bg-red rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
            onClick={()=> onClick()}
        >
            &#10060;
        </button>
    );
}