<!-- app.vue -->
<template>
    <div>
        <form action="#" method="post" >
            <DatePicker :descriptionValueProp="now()" ></DatePicker>
            <InputPicker :inputValueProp = "'鱼香肉丝'"></InputPicker>
            <div>
                <input type="submit" value="提交">
            </div>

        </form>
    </div>
</template>

<script>
    import InputPicker from "@/compents/description-input";
    import DatePicker from "@/compents/date-picker";
    export default {
        name: 'index',
        components: {DatePicker, InputPicker},
        data() {
            return {
            }
        },

        computed: {
        },

        beforeCreate() {
            console.log("before created");
        },
        created() {
            console.log("created");

        },

        beforeMount() {
            console.log("beforeMount");
        },
        mounted() {
            console.log("mounted");

        },

        updated() {
            console.log("update");
        },

        beforeDestroy() {
            console.log("beforeDestory");
        },

        destroyed() {
            console.log("destoryed");
        },

        methods: {
            logConsole() {
                console.log(this.inputValue);
            },

            now() {
                return "2020-02-02"
            }
        },
    }
</script>