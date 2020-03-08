<template>
    <div>
        <label for="input" >请输入吃饭的菜品</label>
        <input type="text" id="input" name="input" @click="logConsole" v-model="inputValue">
        <div>{{inputValue}}</div>
    </div>
</template>


<script>

    export default {
        name: 'inputPicker',

        props: {
            inputValueProp: {
                type: String
            }
        },

        data() {
            return {
                inputValue: ""
            }
        },

        computed: {
        },

        beforeCreate() {
            console.log("before created input ");
        },
        created() {
            console.log("created input ");

        },

        beforeMount() {

            console.log("beforeMount input ");
        },
        mounted() {
            console.log("mounted input ");
            this.inputValue = this.inputValueProp;

        },

        updated() {
            console.log("update input ");
        },

        beforeDestroy() {
            console.log("beforeDestory input ");
        },

        destroyed() {
            console.log("destoryed input ");
        },

        methods: {
            logConsole() {
                console.log(this.inputValue);
            }
        },
    };
</script>