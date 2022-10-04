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
         * @member {Number} box1_=0
         */
        box1_: 0,
        /**
         * @member {Number} box2_=0
         */
        box2_: 0
    }}

    /**
     * Triggered after the box1 config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetBox1(value, oldValue) {
        this.updateVdom();
    }

    /**
     * Triggered after the box2 config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetBox2(value, oldValue) {
        this.updateVdom();
    }

    /**
     *
     */
    updateVdom() {
        let me = this,
            box1 = me.box1,
            box2 = me.box2,
            vdom = me.vdom;

        let content = box2 === 0
        ?
            {html: 'can not divide by 0'}
        :
            box1 > box2
            ?
                {tag: 'p', cn: [
                    {tag: 'span', html: box1},
                    {tag: 'span', html: box2}
                ]}
            :
                box1 < box2
                ?
                    {tag: 'table', cn: [
                        {tag: 'tr', cn: [
                            {tag: 'td', cn: [
                                {tag: 'span', html: 'LESS THAN ZERO'}
                            ]},
                            {tag: 'td', cn: [
                                {tag: 'span', html: box1 / box2}
                            ]}
                        ]}
                    ]}
                :
                    {html: 'Container'}; // todo

        vdom.cn = [content];
        me.vdom = vdom;
    }
}

Neo.applyClassConfig(TemplateComponent);

export default TemplateComponent;
