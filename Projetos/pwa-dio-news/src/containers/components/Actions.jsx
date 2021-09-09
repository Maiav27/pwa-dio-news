import { memo } from "react";
import ShareIcon from '../../images/share.svg'
import CopyIcon from    '../../images/copy.svg'

const navigatorHasShare = navigator.share
const URL =  'http://localhost:3001/'

function Actions ({post, subject}) {
    const{id, title} = post

    const shareInfo = () => {
        navigator.share({
           title : `PWA NEWS - ${subject}`,
           text : title,
           url : URL
        })
    }

    const copyInfo = () => {
        navigator.clipboard.writeText(`${title} -*Learn more about it* ${URL}/${subject}`)
    }

    const RenderActions = () => {
        const action  = navigatorHasShare ?  shareInfo  : copyInfo
        const icon = navigatorHasShare ? ShareIcon : CopyIcon

        return(
            
            <img alt="icon" src={icon} className='share-icon' onClick={action} />
        )
    }

    return(
        <div className='share'>
            <RenderActions/>
        </div>
    )
}

export default memo(Actions)