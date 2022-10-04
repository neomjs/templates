import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class MyApp.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.MainContainerController'
         * @protected
         */
        className: 'MyApp.view.MainContainerController'
    }}

    /**
     *
     * @param {Object} data
     */
    onBoxFieldChange(data) {
        this.getReference('template-component')[data.component.flag] = data.value;
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
