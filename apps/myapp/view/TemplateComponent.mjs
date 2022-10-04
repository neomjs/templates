import Base from '../../../node_modules/neo.mjs/src/component/Base.mjs';

/**
 * @class MyApp.view.TemplateComponent
 * @extends Neo.component.Base
 */
class TemplateComponent extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.TemplateComponent'
         * @protected
         */
        className: 'MyApp.view.TemplateComponent',
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {}
    }}
}

Neo.applyClassConfig(TemplateComponent);

export default TemplateComponent;
