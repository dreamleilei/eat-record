<template>
    <div>
        <label for="eat-date">请选择吃饭日期:</label>
        <input type="date" id="eat-date" name="eat-date" v-model="descriptionValue">
    </div>
</template>

<script>
    export default {
        name: 'datePicker',

        props: {
            descriptionValueProp: String
        },

        data() {
            return {
                descriptionValue: ""

            };
        },

        computed: {

        },

        created() {
        },

        mounted() {
            this.descriptionValue = this.descriptionValueProp;
        },

        methods: {
        },
    };
</script>