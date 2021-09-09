

export const  createMarkup = html => ({__html : html })

export const   renderImg = ({image, description}) =>{
    return   <img src={image.url} alt={description} width='100%'/>
}
