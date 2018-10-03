/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import React, {Component} from 'react';
import {extractModelId} from '../Utils';
import {MapTo} from '@adobe/cq-react-editable-components';

require('./Text.css');

/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const TextEditConfig = {

    emptyLabel: 'Text',

    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

/**
 * Text React component
 */
class Text extends Component {

    get richTextContent() {
        return <div id={extractModelId(this.props.cqPath)} dangerouslySetInnerHTML={{__html:  this.props.text}}/>;
    }

    get textContent() {
        return <div>{this.props.text}</div>;
    }

    render() {
        return this.props.richText ? this.richTextContent : this.textContent;
    }
}

MapTo('we-retail-journal/components/text')(Text, TextEditConfig);
