import Vue from 'vue';
import GoogleMap from 'vuejs-google-maps';
import 'vuejs-google-maps/dist/vuejs-google-maps.css'

export default () => {
    const { apiKey, libraries } = {"apiKey":"AIzaSyBksX3YKsB-yEtD383OXqBnkTvImIG8awA","libraries":["places","geometry","drawing"]} || {}
    Vue.use(GoogleMap, {
        load: {
            apiKey,
            libraries
        }
    });
}
