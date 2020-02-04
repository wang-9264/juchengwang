<template>
    <div class="city">
        <header>
            <span @click="fanhui">&lt;</span>
            <h3>城市选择</h3>
        </header>
        <div class="citylist">
        <div class="hotcity">
            <span>热门城市</span>
            <ul>
                <li  @click="handleClick(0,'全国')">全国</li>
                <li v-for="data in citylist" :key="data.Abbreviatio"  @click="handleClick(data.id,data.name)">{{data.name}}</li>
            </ul>
        </div>
            <mt-index-list>
                <mt-index-section :index="item.id" v-for="item in datalist" :key="item.id">
                    <mt-cell :title="items.name" v-for="items in item.list" :key="items.id" @click.native="handleClick(items.id,items.name)"></mt-cell>
                </mt-index-section>
            </mt-index-list>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            datalist:{},
            citylist:[]
        }
    },
    mounted(){
        Axios.get('https://api.juooo.com/city/city/getSortedCityList?version=6.1.1&referer=2').then(res=>{
            // console.log(res.data.data,66666)
            this.datalist=res.data.data
        }),
        Axios.get('https://api.juooo.com/city/city/getHotCityList?version=6.1.1&referer=2').then(res=>{
            this.citylist=res.data.data.hot_city_List
        })
    },
    methods:{
        handleClick(id,name){
            console.log(id,name)
            localStorage.setItem("city_id",id)
            localStorage.setItem("city_name",encodeURIComponent(name))

            this.$router.back()
        },
        fanhui(){
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
.city{
width: 100%;
height: 100%;
background: #f5f5f5;
header{
    position: fixed;
    top: 0;
    width: 3.75rem;
    height: 0.429rem;
    line-height: 0.429rem;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
    background-color: #fefefe;
    z-index: 100;
    span{
        display: inline-block;
        float: left;
        margin-left: 0.15rem;
    }
    h3{
        float: left;
        margin-left: 1.25rem;
        color: #232323;
        font-size: 0.18rem;
        font-weight: normal;
    }
}
.hotcity{
    padding: 0.14rem 0.24rem 0 0;
    span{
        font-size: 0.13rem;
        font-weight: normal;
        color: #999;
        display: flex;
        height: 0.29rem;
        align-items: center;
        margin-bottom: 0.05rem;
    }
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 1.1rem;
            height: 0.38rem;
            border: 1px solid #ebebeb;
            background: #fefefe;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.14rem;
            color: #232323;
            margin-right: 0.05rem;
            margin-bottom: 0.08rem;
        }
    }
}
.citylist{
    margin-top: 0.429rem;
}
.mint-indexlist-nav{
    position: fixed;
}
}
</style>