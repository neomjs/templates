import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class MyApp.view.DemoContainerController
 * @extends Neo.controller.Component
 */
class DemoContainerController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.DemoContainerController'
         * @protected
         */
        className: 'MyApp.view.DemoContainerController'
    }}

    /**
     *
     * @param {Object} data
     */
    onBoxFieldChange(data) {
        this.getReference('template-component')[data.component.flag] = data.value;
    }
}

Neo.applyClassConfig(DemoContainerController);

export default DemoContainerController;
