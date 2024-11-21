export const TabButton = ({ title, onClick, isActive }) => {

    return (
        <button disabled={isActive} onClick={onClick}>
            {title}
        </button>
    )
}
