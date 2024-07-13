import ItemTag from './ItemTag';
import './ItemInfo.css';
import { useAppSelector } from '../../hooks';


const ItemInfo : React.FC = () => {
    const itemInfoData = useAppSelector((state) => state.itemInfo);
    const tagsDisplay = itemInfoData.tags.map((tag, index) => <ItemTag key={index + tag} text={tag} />) 
    return (
        <div className='main-container'>
            <img src={itemInfoData.image} alt={`${itemInfoData.title}`}/>
            <h1 className='text-uppercase'>{itemInfoData.title}</h1>
            <p className='subtitle'>{itemInfoData.subtitle}</p>
            <div className='tag-container'>
                {tagsDisplay}
            </div>
            


        </div>

    )
}

export default ItemInfo;

