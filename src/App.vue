<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <v-select :options="collections" :on-change="updateWidgetView" placeholder="Please select a collection or recommendation"></v-select>
        <div id='widget'></div>
    </div>
</template>

<script>
export default {
    name: 'app',
    props: ['title', 'collections', 'host', 'apiKey'],

    methods: {
        updateWidgetView(collection) {
            this.widget && this.widget.unmount();
            this.widget = BSCollection.default.widgets.singleViewWidget.new({
                host: this.host,
                apiKey: this.apiKey,
                id: collection.value,
                selector: '#widget'
            });
            this.widget.render();
        }
    }
}
</script>

<style scoped lang="scss">
$bs-head-color: #249acc;
$header-font-size: 36px;

#app {
    margin: 10px 8px;
}

#app h1 {
    color: $bs-head-color;
    font-family: 'Helvetica Neue';
    font-size: $header-font-size;
}
</style>
