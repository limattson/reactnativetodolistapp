const ListItem = ({item, dispatch}) => {
    return (
        <div className='list-item'>
            <button className='remove-list-item' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item})}>
            ✓
            </button>
            <p className='item-text'>{item.name}</p>
        </div>
    );
};
export default ListItem;