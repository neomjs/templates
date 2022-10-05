import Base     from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import VdomUtil from '../../../node_modules/neo.mjs/src/util/VDom.mjs';

/**
 * @class MyApp.view.TemplateComponent2
 * @extends Neo.component.Base
 */
class TemplateComponent2 extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.TemplateComponent2'
         * @protected
         */
        className: 'MyApp.view.TemplateComponent2',
        /**
         * @member {Number} box1_=0
         */
        box1_: 0,
        /**
         * @member {Number} box2_=0
         */
        box2_: 0,
        /**
         * @member {Object} vdom
         */
        vdom:
        {cn: [
            {html: 'can not divide by 0'},
            {tag: 'p', cn: [
                {tag: 'span'},
                {tag: 'span'}
            ]},
            {html: 'Container'} // todo
        ]}
    }}

    /**
     * Triggered after the box1 config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetBox1(value, oldValue) {
        this.adjustVdom();
    }

    /**
     * Triggered after the box2 config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetBox2(value, oldValue) {
        this.adjustVdom();
    }

    /**
     *
     */
    adjustVdom() {
        let me   = this,
            box1 = me.box1,
            box2 = me.box2,
            vdom = me.vdom;

        vdom.cn[0].removeDom = box2 !== 0;
        vdom.cn[1].removeDom = box1 < box2;
        vdom.cn[2].removeDom = box1 > box2;

        VdomUtil.findVdomChild({flag: 'division'}).vdom.html = box1 / box2;

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(TemplateComponent2);

export default TemplateComponent2;
