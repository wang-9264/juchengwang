<template>
    <div class="hot-wrap">
        <div>
            <div>
                <div class="hot-wrap-top">
                    <h3>热门演出</h3>
                    <div>
                        <span>全部</span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt="">
                    </div>
                </div>
            </div>
            <div>
              <div class="hot-list">
                  <swiper :options="{
                        loop:false,
                        pagination:{
                            
                        },
                        freeMode: false,
                        autoplay:false,
                        slidesPerView: 4,
                        spaceBetween: 0
                        }" swipername="hotlist" class="hotlist" :key="this.datalist.length">
                    <div class="swiper-slide bt" v-for="item in datalist" :key="item.show_name" style="width:1rem" @click="handleclick(item.schedular_url)">
                        <div>
                            <img :src="item.pic" alt="">
                        </div>    
                        <h3>{{item.show_name}}</h3>
                    </div>    
                    </swiper>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from '@/components/swiper'
import Axios from 'axios'
export default {
    data(){
        return{
            datalist:[],
            citycode:null
        }
    },
    components:{
        swiper
    },
    mounted(){
        this.citycode=localStorage.getItem("city_id")?localStorage.getItem("city_id"):0
        Axios.get(`https://api.juooo.com/home/index/getHotsRecommendList?city_id=${this.citycode}&version=6.1.1&referer=2`).then(res=>{
            // console.log(res.data.data.hots_show_list,4444)
            this.datalist=res.data.data.hots_show_list.splice(0,10)
            // console.log(this.datalist,55555)
        })
    },
    methods:{
        handleclick(url){
            var id = url.split('/')[4]
            // console.log(id,888)
            this.$router.push({ name: 'detail', params: { myid: id } })
        }
    }
}
</script>
<style lang="scss" scoped>
.hot-wrap{
    padding-top: 0.15rem;
    // padding-left: 0.15rem;
    padding-bottom: 0.22rem;
    .hot-wrap-top{
        display: flex;
        justify-content: space-between;
        h3{
            font-size: 0.18rem;
            line-height: 0.229rem;
            height: 0.229rem;
            color: #232323;
            font-weight: 700;
        }
        div{
            display: flex;
            align-items: center;
            padding-right: 0.04rem;
            span{
                font-size: 13px;
                color: #232323;
            }
            img{
                border: none;
                vertical-align: middle;
                width: 0.19rem;
                height: 0.19rem;
            }
        }
    }
    .hot-list{
        margin-top: 0.15rem;
        // background: green;
        .bt{
            width: 1rem !important;
            margin-right: 0.08rem;
            div{
                width: 1rem;
                img{
                    border: none;
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                }
            }
            h3{
                line-height: 0.21rem;
                font-size: 0.139rem;
                font-weight: 400;
                width: 100%;
                margin-top: 0.1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
}
</style>