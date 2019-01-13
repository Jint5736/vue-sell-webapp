<template>
    <div class="myratings">
        <div class="button" @click="toRangtings">我也要评论</div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            wrapper: false
        };
    },
    methods: {
        toRangtings() {
            this.wrapper = !this.wrapper;
            alert('您未登录，请登录后才能评论！');
            return this.wrapper;
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .myratings
        display :inline
        transform: none;
        .button
            padding :4px 8px
            line-height: 16px
            border-radius :4px
            color :#fff
            font-size :10px
            background :rgba(0,160,220,1)
</style>
