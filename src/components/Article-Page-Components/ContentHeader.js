import React from 'react'
import '../../components-style/ContentHeader.css'


/**
 *
 * @description Function for the component of blog title.
 * @param {*} properties
 * @return {*} 
 */
function ContentHeader(properties) {
    return (
        <React.Fragment>
            <div class="internal_topic_heading">
                <div class="topic_note">
                    <div class="pencil">
                    </div>
                    <div class="note_header">
                        <h3>{properties.contentHeader}</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContentHeader



