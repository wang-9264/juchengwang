<template>
    <div>
        <div class="detail">
            <div class="brief">
                <div class="brief-wrap">
                    <img :src="this.datalist.static_data.pic" alt="">
                </div>
                <div class="brief-mask"></div>
                <div class="brief-primary">
                    <div class="brief-primary-fg">
                        <div class="brief-primary-fg-title">
                            <span>演出详情</span>
                            <i class="iconfont icon-huise brief-primary-fg-title-back" @click="goback"></i>
                            <i class="iconfont icon-chilun brief-primary-fg-title-share"></i>
                            <i class="iconfont icon-address brief-primary-fg-title-home" @click="gohome"></i>
                        </div>
                        <div class="brief-primary-fg-content">
                            <div class="brief-primary-fg-content-img">
                                <img :src="this.datalist.static_data.pic" alt="">
                            </div>
                            <div class="brief-primary-fg-content-info">
                                <div class="brief-primary-fg-content-info-name">{{this.datalist.static_data.show_name}}</div>
                                <div class="brief-primary-fg-content-info-wrapper"></div>
                                <div class="brief-primary-fg-content-info-price">
                                    <span>￥{{this.datalist.static_data.price_range}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="brief-info-wrap">
                    <div class="brief-info">
                        <div class="brief-info-left">
                            <div class="brief-info-left-datatime-wrap">
                                <div class="brief-info-left-datatime">
                                    <span>{{this.datalist.static_data.show_time_data.show_time_start_display.split(' ')[0]}}-{{this.datalist.static_data.show_time_data.show_time_end_display.split(' ')[0].split('.')[1]}}.{{this.datalist.static_data.show_time_data.show_time_end_display.split(' ')[0].split('.')[2]}}<i class="iconfont icon-qianjin"></i></span>
                                </div>
                            </div>
                            <div class="brief-info-left-place">{{this.datalist.static_data.city.city_name}} | {{this.datalist.static_data.venue.venue_name}}</div>
                            <div class="brief-info-left-address">{{this.datalist.static_data.venue.venue_address}}</div>
                        </div>
                        <div class="brief-info-pointer"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    mounted(){
        Axios.get(`https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=${this.$router.history.current.params.myid}&version=6.1.1&referer=2`).then(res=>{
            console.log(res.data.data,3333333)
            this.datalist=res.data.data
        })
        console.log(this.$router.history.current.params.myid,6666)
    },
    data(){
        return{
            datalist:{}
        }
    },
    methods:{
        goback(){
            this.$router.back()
        },
        gohome(){
            this.$router.push('/index')
        }
    }
}
</script>
<style lang="scss" scoped>
.detail{
    position: relative;
    background: #f5f5f5;
    .brief{
        .brief-wrap{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            height: 2.4rem;;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                background: #b8abab;
                filter: blur(0.22rem);
                border: none;
                vertical-align: middle;
            }
        }
        .brief-mask{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2.4rem;
            background-color: rgba(0,0,0,0.24);
            overflow: hidden;
        }
        .brief-primary{
            position: relative;
            height:2.4rem;
            overflow: hidden;
            .brief-primary-fg{
                position: relative;
                height: 2.4rem;
                .brief-primary-fg-title{
                    position: relative;
                    height: 0.49rem;
                    span{
                        text-align: center;
                        font-size: 0.19rem;
                        font-weight: bold;
                        color: #fefefe;
                        height: 0.49rem;
                        line-height: 0.49rem;
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                    }
                    .brief-primary-fg-title-back{
                        display: block;
                        height: 0.49rem;
                        width: 0.43rem;
                        position: absolute;
                        left: 0;
                        text-align: center;
                        line-height: 0.49rem;
                        font-size: 0.19rem;
                        color: white;
                    }
                    .brief-primary-fg-title-share{
                        width: 0.38rem;
                        height: 0.49rem;
                        line-height: 0.49rem;
                        color: white;
                        position: absolute;
                        top: 0;
                        right: 0.46rem;
                        text-align: center;
                        font-size: 0.18rem;
                    }
                    .brief-primary-fg-title-home{
                        width: 0.38rem;
                        height: 0.49rem;
                        line-height: 0.49rem;
                        color: white;
                        position: absolute;
                        top: 0;
                        right: 0.08rem;
                        text-align: center;
                        font-size: 0.18rem;
                    }
                }
                .brief-primary-fg-content{
                    display: flex;
                    padding: 0 0.16rem;
                    position: relative;
                    .brief-primary-fg-content-img{
                        width: 1.15rem;
                        height: 1.57rem;
                        margin-top: 0.16rem;
                        flex-shrink: 0;
                        border-radius: 0.04rem;
                        overflow: hidden;
                        img{
                            margin: 0;
                            padding: 0;
                            border: 0;
                            outline: 0;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .brief-primary-fg-content-info{
                        margin-top: 0.24rem;
                        margin-left: 0.16rem;
                        display: flex;
                        flex-direction: column;
                        .brief-primary-fg-content-info-name{
                            font-size: 0.17rem;
                            line-height: 0.22rem;
                            color: #fefefe;
                            min-height: 0.44rem;
                            word-break: break-all;
                        }
                        .brief-primary-fg-content-info-wrapper{
                            overflow: hidden;
                            height: 0.18rem;
                            box-sizing: border-box;
                            margin-top: 0.18rem;
                        }
                        .brief-primary-fg-content-info-price{
                            display: flex;
                            flex-grow: 1;
                            align-items: flex-end;
                            padding-bottom: 0.08rem;
                            margin-top: 0.02rem;
                            span{
                                font-size: 0.2rem;
                                font-weight: bold;
                                height: 0.2rem;
                                line-height: 0.2rem;
                                color: #fefefe;
                                display: inline-block;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
        }
        .brief-info-wrap{
            position: relative;
            .brief-info{
                padding: 0 0.16rem 0.23rem 0.16rem;
                display: flex;
                align-items: flex-end;
                overflow: hidden;
                .brief-info-left{
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    .brief-info-left-datatime-wrap{
                        margin-top: 0.19rem;
                        font-size: 0.19rem;
                        color:#232323;
                        display: flex;
                        align-items: flex-start;
                        cursor: pointer;
                        .brief-info-left-datatime{
                            display: flex;
                            align-items: center;
                            height: 0.17rem;
                            line-height: 0.17rem;
                            overflow: hidden;
                            span{
                                height: 0.17rem;
                                line-height: 0.17rem;
                                margin-right: 0.04rem;
                                display: flex;
                                align-items: center;
                                i{
                                    font-size: 0.22rem;
                                    color: #232323;
                                    margin-left: 0.06rem;
                                    line-height: 0.22rem;
                                    transform: scale(0.5);
                                }
                            }
                        }
                    }
                    .brief-info-left-place{
                        font-size: 0.16rem;
                        color: #232323;
                        margin-top: 0.16rem;
                        margin-right: 0.27rem;
                    }
                    .brief-info-left-address{
                        font-size: 0.13rem;
                        color: #666;
                        margin-top: 0.04rem;
                        margin-right: 0.27rem;
                    }
                }
            }
        }
    }
}
</style>