import './ItemTag.css'


const ItemTag : React.FC<{text: string}> = (props) => {

    return (
        <div 
            className="border border-1 border-secondary rounded mx-1 my-2 tag"
        >
            {props.text}
        </div>
    )

}

export default ItemTag;