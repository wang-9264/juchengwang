<template>
    <div class="categoray">
        <div class="categoray-list" v-for="item in datalist" :key="item.cat_id">
            <div class="categoray-list-title">
                <h3>{{item.title}}</h3>
                <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt="">
                </div>
            </div>
            <div class="categoray-list-row">
                <div class="row-bg" @click="detailclick(item.list[0].sche_id)">
                    <div class="row-item">
                        <img :src="item.list[0].pic" alt="">
                    </div>
                    <div class="row-info">
                        <p class="top">
                            <strong>{{item.list[0].display_show_time.split(' ')[0]}}</strong>
                            <span>{{item.list[0].week}}{{item.list[0].display_show_time.split(' ')[1]}}</span>
                        </p>
                        <h3>{{item.list[0].schedular_name}}</h3>
                        <p class="bottom">{{item.list[0].city_name}} | {{item.list[0].venue_name}}</p>
                    </div>
                </div>
            </div>
            <column :columninfo="item"></column>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
import column from './listColumn'
export default {
    data(){
        return{
            datalist:[],
            citycode:null
        }
    },
    mounted(){
        this.citycode=localStorage.getItem("city_id")?localStorage.getItem("city_id"):0
        Axios.get(`https://api.juooo.com/home/index/getFloorShow?city_id=${this.citycode}&version=6.1.1&referer=2`).then(res=>{
            // console.log(res.data.data,55555)
            this.datalist=res.data.data
        })
    },
    components:{
        column
    },
    methods:{
        detailclick(id){
            this.$router.push({ name: 'detail', params: { myid: id } })
        }
    }
}
</script>
<style lang="scss" scoped>
.categoray{
    .categoray-list{
        padding-bottom: 0.3rem;
        .categoray-list-title{
            overflow: hidden;
            h3{
                height: 0.22rem;
                line-height: 0.22rem;
                font-size: 0.19rem;
                float: left;
                color: #232323;
                padding-left: 0.15rem;
            }
            div{
            width: 0.199rem;
            height: 0.199rem;
            float: right;
            margin-right: 0.1rem;
            // margin-top: 0.015rem;
            img{
                border: none;
                vertical-align: middle;
                width: 100%;
                height: 100%;
            }
            }
        }
        .categoray-list-row{
            margin-top: 0.15rem;
            background: grey;
            .row-bg{
                padding: 0.14rem 0 0.14rem 0.15rem;
                display: flex;
                .row-item{
                    width: 1rem;
                    height: 1.36rem;
                    border-radius: 0.04rem;
                    border: 1px solid #ebebeb;
                    overflow: hidden;
                    position: relative;
                    img{
                        border: none;
                        width: 100%;
                        height: 100%;
                        vertical-align: middle;
                    }
                }
                .row-info{
                    margin-left: 0.15rem;
                    color: #fefefe;
                    padding-top: 0.16rem;
                    flex: 1;
                    .top{
                        font-size: 12px;
                        height: 0.24rem;
                        line-height: 0.24rem;
                        letter-spacing: 1px;
                        // overflow: hidden;
                        // white-space: nowrap;
                        // text-overflow: ellipsis;
                        // width: 100%;
                        strong{
                            // font-weight: 700;
                            font-size: 0.16rem;
                            font-weight: normal;
                            // width: 0.92rem;
                            overflow: hidden;
                        //    white-space: nowrap;
                        //   text-overflow: ellipsis;
                        }
                        span{
                            margin-left: 0.05rem;
                        }
                    }
                    h3{
                        width: 100%;
                        font-size: 0.139rem;
                        line-height: 0.225rem;
                        margin-top: 0.1rem;
                        font-weight: normal;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .bottom{
                        width: 2.1rem;
                        font-size: 0.12rem;
                        height: 0.24rem;
                        line-height: 0.24rem;
                        margin-top: 0.1rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
}
</style>