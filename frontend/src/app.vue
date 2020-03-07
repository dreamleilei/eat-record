<!-- app.vue -->
<template>
    <div id="app">
        <DatePicker></DatePicker>
        <InputPicker></InputPicker>
    </div>
</template>

<script>
    import InputPicker from "@/compents/description-input";
    import DatePicker from "@/compents/date-picker";
    export default {
        name: 'app',
        components: {DatePicker, InputPicker}
    }
</script>

