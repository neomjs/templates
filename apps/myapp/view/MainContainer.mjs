import DemoContainer      from './DemoContainer.mjs';
import TemplateComponent  from './TemplateComponent.mjs';
import TemplateComponent2 from './TemplateComponent2.mjs';
import Viewport           from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.MainContainer'
         * @protected
         */
        className: 'MyApp.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Object[]} items
         */
        items: [{
            module     : DemoContainer,
            childModule: TemplateComponent,
            style      : {margin: '20px'}
        }, {
            module     : DemoContainer,
            childModule: TemplateComponent2,
            style      : {margin: '20px'}
        }],
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'vbox', align: 'start'}
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
