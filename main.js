
//Video for this code
//https://laracasts.com/series/learn-vue-2-step-by-step/episodes/11

Vue.component('tabs', {

    template: `
   <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a href="#" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>

    `,



    methods: {

        selectTab(selectedTab) {

            this.tabs.forEach(tab => {

                tab.isActive = (tab.name == selectedTab.name)

            });
        }
    }

});

Vue.component('tab', {

    template: `

    <div v-show="isActive"><slot></slot></div>

    `,

    props: {

        name: { required: true },

        selected: { default: false }
    },

    data() {
        return {

            isActive: false
        };
    },

    mounted() {
        this.isActive = this.selected;
    }

});

new Vue({
    el: '#root'
});
