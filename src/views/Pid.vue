<template>
    <div class="container">
        <h1>PID</h1>
        <b-table striped hover :items="pids" :fields="fields"/>
    </div>
</template>

<script>
    import { getSpringPids } from '../../data/pids'

    export default {
        data() {
            return {
                fields: {
                    site: {
                        label: 'Site',
                        sortable: true
                    },
                    tier: {
                        sortable: true
                    },
                    url: {
                        label: 'Link',
                        tdClass: 'little'
                    },
                    siteUrl: {
                        label: 'Site Name'
                    },
                    lFod: {},
                    lSav: {},
                    hFod: {},
                    hSav: {}
                },
                pids: getSpringPids()   
            }
        }
    }
</script>

<style>
.little {
    font-size: 5px;
}

</style>