import { memo } from "react";
import PropTypes from 'prop-types'
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import {createMarkup, renderImg} from '../../utils'

function Economy ({values}){
    const history = useHistory()

  

    const renderDescription = (description) =>{
       return <p dangerouslySetInnerHTML={createMarkup(description)}></p>
    }

    const openPost = (id) =>{
        history.push(`/economy/${id}`)
    }
    
    const renderPost = (post, index) =>{
           const {title, image, description, id} = post
           return(
               <Col span={12} md={6} key={`post-${index}`}>
                  <article onClick={() => openPost(id)}>
                  <p>
                  <strong  dangerouslySetInnerHTML={createMarkup(title)}/>
                  </p>
                  {image?.url ? renderImg({image, description}) : renderDescription(description)}
                  </article>
               </Col>
           )
    }
    return(
       <Row gutter={[16, 16]}>
           {values?.map(renderPost)}
       </Row>
    )
}
Economy.defaultProps = {
    values : []
}
Economy.propTypes = {
    values : PropTypes.array.isRequired
}
export default memo(Economy)