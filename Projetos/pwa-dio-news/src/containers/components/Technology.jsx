import { memo } from "react";
import PropTypes from 'prop-types'
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import {createMarkup, renderImg} from '../../utils'

function Technology ({values}){
    const history = useHistory()



   

    const openPost = (id) =>{
        history.push(`/technology/${id}`)
    }
    
    const renderPost = (post, index) =>{
           const {title, image, description, id} = post
           return(
               <Col span={12} md={6} key={`post-${index}`}>
                  <article onClick={() => openPost(id)}>
                  <p>
                  <strong  dangerouslySetInnerHTML={createMarkup(title)}/>
                  </p>
                  <p dangerouslySetInnerHTML={createMarkup(description)}/>
                  {image.url  && renderImg({image, description}) }
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
Technology.defaultProps = {
    values : []
}
Technology.propTypes = {
    values : PropTypes.array.isRequired
}
export default memo(Technology)