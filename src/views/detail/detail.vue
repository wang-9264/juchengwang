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
                        <div class="brief-info-pointer">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-bar">
                <div class="bottom-bar-left">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC" alt="">
                    <div>客服</div>
                </div>
                <div class="bottom-bar-right">
                    <div>立即购买</div>
                </div>
            </div>
            <div class="center">
                <div class="center-info">
                    <div class="center-info-plus">
                        <div class="orange-plus">
                            <div class="orange-plus-name">橙PLUS卡</div>
                            <div class="orange-plus-desc">开通送¥100 最高省108元</div>
                            <div class="orange-plus-guide">立即开卡</div>
                            <i class="iconfont icon-qianjin"></i>
                        </div>
                    </div>
                    <div class="center-info-benefit">
                        <div class="show-benefit">
                            <div class="top">
                                <div class="show-benefit-item-plus">
                                    <span class="show-benefit-item-plus-a">VIP+</span>
                                    <span class="show-benefit-item-plus-b">:</span>
                                    <span class="show-benefit-item-plus-c">
                                        <span class="show-benefit-item-plus-c-a">V+会员享</span>
                                        <span class="show-benefit-item-plus-c-b">国内免邮+双倍积分</span>
                                        <i class="iconfont icon-qianjin"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="show-benefit-item">
                                    <span class="show-benefit-item-a">入场</span>
                                    <span class="show-benefit-item-b">:</span>
                                    <span class="show-benefit-item-c">{{this.datalist.static_data.tips.desc}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center-left">
                    <div class="intro">
                        <div class="intro-title">演出介绍</div>
                        <div class="intro-img"></div>
                    </div>
                    <div class="tips"></div>
                    <div class="recommend"></div>
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
        // console.log(this.$router.history.current.params.myid,6666)
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
    },
    beforeMount(){
        this.$store.state.isShow=false
    },
    beforeDestroy(){
        this.$store.state.isShow=true
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
            // background: #fefefe;
            .brief-info{
                padding: 0 0.16rem 0.23rem 0.16rem;
                display: flex;
                align-items: flex-end;
                overflow: hidden;
                background: #fefefe;
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
                .brief-info-pointer{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 0.32rem;
                    margin-right: 0.14rem;
                    flex-shrink: 0;
                    div{
                        border-radius: 0.32rem;
                        width: 0.32rem;
                        height: 0.32rem;
                        border: none;
                        // display: block;
                        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAMAAAA6jerHAAABQVBMVEUAAAD/fzz/dj7/fD3/ZET/Y0T/fzv/dD7/bEL/Z0P/bEH/fTz/ZkP/cz//akL/YUX/hTr/YUT/bUH/fTz/jTf/jTj/gTv/bEH/ZET/fjz/ez3/ezz/ezz/gzv/YUX/YEX/jjj/dD//cUD/izj/YEX/eD7/jjf/dD//YUT/iTn/ezz/hzn/YUX/jTj/YkT/YEX/eD7/X0X/bUH/jjf/hzn/YEX/eT3/eD7/bEH/fD3/iDn/izj/ej3/hDr/Y0T/hzr/dj//aEP/YUX/gzv/b0H/gzv/bEH/gzv/bEH/ej3/jjj/bUH/gDz/fTz/ckD/jzf/bUH/eD7/hTr/gjv/gTv/dT//bEH/Y0T/hTr/iDn/gTv/aUL/ZUP/cUD/Z0P/eD7/bkH/fjz/izj/ej3/fDz/gzv/dT//cz//ijn/jTj/YUVF8FolAAAAVnRSTlMAAhALQurEmE42Lhv7+ff19fHx08avmZdaWjowLP76+vrv7NXSv7y0nJuJbmNYU05EPDs7JRsX+uzs7Onn1szMycO9vbyzrayTk4uHfHx6empqZFFGJpDcPtEAAAHiSURBVDjLfdNnXxpBEAbw5w4pgigKiAgmlhi7SYyaHnvv7Y4DThQrfP8P4LJuvUWf1//fzN7MHNQszmTHUl4p9W9nZhFtY81l6s+e55VKpYdyuRzJW6b5PlanxiOmhW5v04PBMvsNYnghau7v76a1YqHPxNSD5q42HlJMptFoZ2q1VaGs7Fvm8XGCdzxRDUXCPD0dg6Y43Ah8GEHc+MkiRe0fzYzvb9IBqc2GIof5/FGENyPm5mYBQFYxkQJoCuOsEDHONmAPS9MvhmdFqSHIcbptzMlHbxEj1MSrIcgZwJTYRioBJYkkN5UcMrIZtES5qazhj/j4Sx195eY6DDmgZR0t+8xcd0FOGoG0ClUIqlbxLCZt68bmhaoufottBA5xgZtqGCtiY9M6OuDG/Y8psdVfttbtJzfuJM7Jo9nm91S0K4w7i8SQPKEzaU5pM2qaS8CGckJRm/XKObLQOoAL9aZHorF4PJbrU0xzHoCV5kaekGo+WXRJuvF10+wATb9m2Da4meT/ZlrcvdksJA7sLynU1oSXIDL4o1XINB+/QUkhSQuZRsvViPnonjgCKY6yQty4vZ0wEh9VmjFjprNPNT1siKYyjZmObm4+fAHeVqYxE+uiaAB4X5nGzHy4dxaBvADSVUHeBpCfPgAAAABJRU5ErkJggg==') no-repeat center;
                        background-size: 0.16rem 0.19rem;
                        background-color: #ededed;
                    }
                }
            }
        }
    }
    .bottom-bar{
        position: fixed;
        bottom: 0;
        z-index: 20;
        border: 1px solid #ebebeb;
        height: 0.58rem;
        display: flex;
        width: 100%;
        align-items: center;
        background: #fefefe;
        box-sizing: border-box;
        .bottom-bar-left{
            width: 0.56rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-grow: 0;
            flex-shrink: 0;
            height: 0.38rem !important;
            img{
                width: 0.22rem !important;
                height: 0.22rem !important;
                border: none;
                vertical-align: middle;
            }
            div{
                font-size: 0.12rem;
                color: #666666;
            }
        }
        .bottom-bar-right{
            width: 100%;
            div{
                height: 0.44rem;
                background-image: linear-gradient(50deg, #ff9a34, #ff4d4a);
                border-radius: 0.22rem;
                background-blend-mode: normal, normal;
                flex-grow: 1;
                font-size: 0.18rem;
                font-weight: bold;
                color: #fefefe;
                text-align: center;
                line-height: 0.44rem;
                margin-right: 0.13rem;
            }
        }
    }
    .center{
        .center-info{
            .center-info-plus{
                padding: 0 0.165rem 0.18rem 0.165rem;
                background: white;
                .orange-plus{
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 0.48rem;
                    background-image: linear-gradient(-4deg, #1e1e1e, #464542);
                    border-radius: 0.05rem;
                    display: flex;
                    align-items: center;
                    .orange-plus-name{
                        position: absolute;
                        left: 0.14rem;
                        top: 50%;
                        font-size: 0.22rem;
                        transform: scale(0.5) translateY(-50%);
                        transform-origin: 0 0;
                        background-image: linear-gradient(0deg, #f5dea9, #f8d583);
                        border-radius: 0.02rem;
                        width: 1.23rem;
                        height: 0.38rem;
                        text-align: center;
                        line-height: 0.38rem;
                    }
                    .orange-plus-desc{
                        font-size: 0.13rem !important;
                        color: #f5dea9;
                        margin-left: 0.87rem;
                        white-space: nowrap;
                        line-height: 0.17rem;
                        flex: 1;
                    }
                    .orange-plus-guide{
                        font-size: 12px;
                        line-height: 0.17rem;
                        font-weight: 500;
                        color: #f5dea9;
                        margin-right: 0.06rem;
                    }
                    i{
                        display: inline-block;
                        color: #f5dea9;
                        font-size: 13px;
                        line-height: 0.17rem;
                        margin-right: 0.16rem;
                    }
                }
            }
            .center-info-benefit{
                .show-benefit{
                    margin-top: 0.13rem;
                    background:#fefefe;
                    .top{
                        .show-benefit-item-plus{
                            display: flex;
                            padding: 0.12rem 0.16rem;
                            border: 1px solid #ebebeb;
                            .show-benefit-item-plus-a{
                                width: 0.49rem;
                                font-size: 15px;
                                color: #999999;
                                display: inline-block;
                                text-align: justify;
                                height: 0.26rem;
                                line-height: 0.26rem;
                            }
                            .show-benefit-item-plus-b{
                                font-size: 15px;
                                color: #999999;
                                height: 0.26rem;
                                line-height: 0.26rem;
                            }
                            .show-benefit-item-plus-c{
                                font-size: 0.13rem;
                                padding-left: 0.16rem;
                                height: 0.27rem;
                                line-height: 0.27rem;
                                .show-benefit-item-plus-c-a{
                                    color: #222222;
                                }
                                .show-benefit-item-plus-c-b{
                                    color: #ff6743;
                                    padding-left: 0.06rem;
                                }
                                i{
                                    font-size: 11px;
                                    color: #232323;
                                    padding-left: 0.85rem;
                                }
                            }
                        }
                    }
                    .bottom{
                        .show-benefit-item{
                            display: flex;
                            padding: 0.12rem 0.16rem;
                            .show-benefit-item-a{
                                width: 0.49rem;
                                font-size: 15px;
                                color: #999999;
                                display: inline-block;
                                text-align: justify;
                                height: 0.26rem;
                                line-height: 0.26rem;
                            }
                            .show-benefit-item-b{
                                font-size: 15px;
                                color: #999999;
                                height: 0.26rem;
                                line-height: 0.26rem;
                            }
                            .show-benefit-item-c{
                                font-size: 0.14rem;
                                color: #232323;
                                line-height: 0.26rem;
                                margin-left: 0.16rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>