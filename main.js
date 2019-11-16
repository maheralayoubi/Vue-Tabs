Vue.component('tabs', {

    template: `
   <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.selected }">
                    <a href="#" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
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
        
    },

    methods: {

        selectTab(selectedTab) {

            this.tabs.forEach(tab => {

                tab.selected = (tab.name == selectedTab.name)

            });
        }
    }

});

Vue.component('tab', {

    template: `

    <div><slot></slot></div>
    
    `,

    props: {
        
        name: { required: true },

        selected: { default: false }
    }

});

new Vue({
    el: '#root'
});




