<template>
    <div class="headerCmp">
        <div class="logo">
        <a :href="'https://' + cmpgn.vData.siteUrl">
            <img class="img-fluid" :src="cmpgn.vData.logo" alt="" />
            </a>
        </div>
        <div class="links">
                <div class="link"  v-for="(link, index) in cmpgn.content.headerLeft.links" :key="index">
                <a class="headerLeftLink" href="#">{{link.label}}</a>
                </div>
        </div>
        <div class="subscribe">
                {{ cmpgn.content.headerRight.first }}
                <span class="b highlight">1-844-733-9090</span>
                {{ cmpgn.content.headerRight.second }}
                {{ cmpgn.content.headerRight.third }}
                <span class="b highlight">W-EL</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>