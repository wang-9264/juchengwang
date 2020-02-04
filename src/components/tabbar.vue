<template>
    <ul>
        <router-link to="/index" tag="li" activeClass="active" class="index">首页</router-link>
        <router-link to="/cinema" tag="li" activeClass="active" class="cinema">剧院</router-link>
        <router-link to="/eticket" tag="li" activeClass="active" class="eticket">电子票</router-link>
        <router-link to="/center" tag="li" activeClass="active" class="center">我的</router-link>
    </ul>
</template>
<script>
import Axios from 'axios'
export default {
    data () {
        return {
            datalist: []
        }
    },
    mounted () {
        Axios.get('https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2').then(res=>{
            // console.log(res.data,1111)
            this.datalist=res.data.data.bottom_list
            // console.log(this.datalist,2222)
        })
    }
}
</script>
<style lang="scss" scoped>
.active{
    color: red;
    background: url('')
}
ul{
    width: 100%;
    height: 49px;
    background-color: #fefefe;
    // -webkit-box-shadow: 0px 0px 0.06667rem #ebebeb;
    box-shadow: 0px 0px 2.5px #ebebeb;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 201;
    list-style: none;
    display: flex;
    // align-items: center;
    // justify-content: center;
    align-self: center;
    li{
            flex: 1;
            height: 100%;
            // flex-direction: column;
            // align-items: center;
            text-align: center;
            // align-self: center;
            // justify-content: center;
            line-height: 0.49rem;
            // float: left;
    }
    // .index{
    //     background: url(`${this.datalist[0].pic}`) no-repeat center center
    // }
}
</style>