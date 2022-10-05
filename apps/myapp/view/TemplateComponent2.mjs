import Base from '../../../node_modules/neo.mjs/src/component/Base.mjs';

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
            // box2 === 0
            {html: 'can not divide by 0'},

            // box1 > box2
            {tag: 'p', cn: [
                {tag: 'span'},
                {tag: 'span'}
            ]},

            // box1 < box2
            {tag: 'table', cn: [
                {tag: 'tr', cn: [
                    {tag: 'td', cn: [
                        {tag: 'span', html: 'less than one'}
                    ]},
                    {tag: 'td', cn: [
                        {tag: 'span', flag: 'division'}
                    ]}
                ]}
            ]},

            // else todo
            {html: 'Container'}
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
        Neo.isNumber(oldValue) && this.adjustVdom();
    }

    /**
     *
     */
    adjustVdom() {
        let me          = this,
            box1        = me.box1,
            box2        = me.box2,
            activeIndex = box2 === 0 ? 0 : box1 > box2 ? 1 : box1 < box2 ? 2 : 3,
            vdom        = me.vdom;

        vdom.cn.forEach((item, index) => {
            item.removeDom = activeIndex !== index;
        });

        //direct access
        vdom.cn[1].cn[0].html = box1;
        vdom.cn[1].cn[1].html = box2;

        // query for nodes
        me.getVdomChild({flag: 'division'}).html = box1 / box2;
        me.vdom = vdom;
    }
}

Neo.applyClassConfig(TemplateComponent2);

export default TemplateComponent2;
