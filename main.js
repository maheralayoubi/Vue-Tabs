Vue.component('tabs', {

    template: `
   <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs">{{ tab.name }}</li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>

    `,

    data() {

        return { 
            tabs: []
      };
    },

    created() {
        
        this.tabs = this.$children;
        
    }

});

Vue.component('tab', {

    template: `

    <div><slot></slot></div>
    
    `,

    props: {
        
        name: { required: true }
    }

});

new Vue({
    el: '#root'
});



var a = ['will', 'change', 'value'];
var b = a;
var c = a.slice();

a.push('make')

console.log(b);



