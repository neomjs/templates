import Base              from '../../../node_modules/neo.mjs/src/container/Base.mjs';
import NumberField       from '../../../node_modules/neo.mjs/src/form/field/Number.mjs';
import TemplateComponent from './TemplateComponent.mjs';

/**
 * @class MyApp.view.DemoContainer
 * @extends Neo.container.Base
 */
class DemoContainer extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.DemoContainer'
         * @protected
         */
        className: 'MyApp.view.DemoContainer',
        /**
         * @member {Object[]} items
         */
        items: [{
            module              : NumberField,
            clearToOriginalValue: true,
            flag                : 'box1',
            flex                : 'none',
            //labelPosition: 'inline', // todo: broken
            labelText           : 'box1',
            labelWidth          : 50,
            listeners           : {change: 'onBoxFieldChange'},
            value               : 0,
            width               : 150
        }, {
            module              : NumberField,
            clearToOriginalValue: true,
            flag                : 'box2',
            flex                : 'none',
            labelText           : 'box2',
            labelWidth          : 50,
            listeners           : {change: 'onBoxFieldChange'},
            value               : 0,
            width               : 150
        }, {
            module   : TemplateComponent,
            reference: 'template-component',
            style    : {marginTop: '10px'}
        }],
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'vbox', align: 'start'}
    }}
}

Neo.applyClassConfig(DemoContainer);

export default DemoContainer;