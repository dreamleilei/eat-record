<!-- app.vue -->
<template>
    <div>
        <DatePicker></DatePicker>
        <InputPicker></InputPicker>
    </div>
</template>

<script>
    import InputPicker from "@/compents/description-input";
    import DatePicker from "@/compents/date-picker";
    export default {
        name: 'index',
        components: {DatePicker, InputPicker}
    }
</script>