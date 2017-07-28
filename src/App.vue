<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <v-select :options="collections" :on-change="updateWidgetView"></v-select>
        <div id='widget'></div>
    </div>
</template>

<script>
export default {
    name: 'app',
    props: ['title', 'collections', 'host', 'apiKey'],

    methods: {
        updateWidgetView(collection)
            // TODO add unmount method
            const widget = BSCollection.default.widgets.singleViewWidget.new({
                host: this.host,
                apiKey: this.apiKey,
                id: collection.value,
                selector: '#widget'
            });
            widget.render();
        }
    }
}
</script>

<style lang="scss"></style>
