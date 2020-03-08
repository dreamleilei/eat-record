<template>
    <div>
        <label for="input" >请输入吃饭的菜品</label>
        <input type="text" id="input" name="input" @click="logConsole" v-model="inputValue">
        <div>{{inputValue}}</div>
        <div v-if="showErrorFunction()"> showError</div>
        <div v-else>not ShowError</div>
    </div>
</template>


<script>

    export default {
        name: 'inputPicker',

        props: {
            inputValueProp: {
                type: String
            },
            showError: Boolean
        },

        data() {
            return {
                inputValue: "",
                showErrorData: ""
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
            this.showErrorData = this.showError;

        },

        updated() {
            console.log("update input ");
            debugger
            if (this.inputValue.length % 2 === 0) {
                this.showErrorData = true;
            } else {
                this.showErrorData = false
            }
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
            },
            showErrorFunction() {
                return this.showErrorData;
            }
        },
    };
</script>