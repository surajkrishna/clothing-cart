import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";

import './preview-collection.style.scss';

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1>Title</h1>
        <div className='title'>{title.toUpperCase()}</div>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps})=>(
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
)

export default PreviewCollection;