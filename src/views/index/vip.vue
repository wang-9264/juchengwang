<template>
    <div>
        <div class="vip-heade">
            <div class="top">
                <div class="top-left">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg==" alt="">
                    <span>会员专享折扣</span>
                </div>
                <div class="top-right">
                    <span>99元/年</span>
                    <span>&gt;</span>
                </div>
            </div>
            <div class="bottom">
                <swiper :options="{
                        loop:true,
                        pagination:{
                            el: '.swiper-pagination'
                        },
                        freeMode: true,
                        autoplay:true
                        }" swipername="homebanner" :key="this.datalist.length">
                    <div class="swiper-slide bb" v-for="item in datalist" :key="item.schedular_id" >
                            <div class="list-item">
                                <img :src="item.pic" alt="">
                            </div>
                            <div class="list-info">
                                <h3>{{item.schedular_name}}</h3>
                                <p>
                                    <span class="num">{{item.min_discount}}</span>
                                    <span>折起</span>
                                </p>
                            </div>
                            <span class="qianggou">立即抢购</span>
                            <!-- {{item.schedular_id}} -->
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from '@/components/swiper'
import Axios from 'axios'
export default {
    components:{
        swiper
    },
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
        Axios.get('https://api.juooo.com/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2','city_id=0&version=6.1.1&referer=2').then(res=>{
            console.log(res.data.data.discountList,3333)
            this.datalist=res.data.data.discountList
        })
    }
}
</script>
<style lang="scss" scoped>
.vip-heade{
    width: 100%;
    background: #fffcf5;
    margin-bottom: 0.3rem;
    border: 1px solid rgba(213, 163, 112, 0.5);
    border-radius: 0.03rem;
    .top{
        width: 100%;
        height: 0.4rem;
        padding: 0 0.15rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .top-left{
            display: flex;
            align-items: center;
            color: #6b4218;
            img{
                width: 0.19rem;
                height: 0.18rem;
                margin-right: 0.05rem;
            }
        }
        .top-right{
            display: flex;
            align-items: center;
            color: #6b4218;
            span{
                font-size: 0.13rem;
            }
        }
    }
    .bottom{
        height: 1.06rem;
        padding: 0 0.15rem;
        display: flex;
        .bb{
            width: 3.15rem;
            padding-top: 0.15rem;
            border-top: 1px solid #f7eada;
            display: flex;
            //  justify-content :center;
            .list-item{
                width: 0.55rem;
                height: 0.75rem;
                border-radius: 0.03rem;
                overflow: hidden;
                // float: left;
                img{
                    border: none;
                    // border-color: transparent;
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                }
            }
            .list-info{
                margin-left: 0.15rem;
                flex: 1;
                // float: right;
                h3{
                    width: 100%;
                    font-size: 0.139rem;
                    color: #232323;
                    line-height: 0.21rem;
                    font-weight: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                p{
                    font-size: 0.12rem;
                    margin-top: 0.12rem;
                    .num{
                        font-size: 0.16rem;
                        color: #ff6743;
                    }
                    span{
                        color: #999;
                        margin-left: 0.05rem;
                    }
                }
            }
            .qianggou{
                position: absolute;
                right: 0;
                bottom: 0.25rem;
                width: 0.74rem;
                height: 0.22rem;
                border-radius: 0.12rem;
                font-size: 0.12rem;
                color: #ff6743;
                border: 1px solid #ff6743;
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
            }
        }
    }
}
</style>