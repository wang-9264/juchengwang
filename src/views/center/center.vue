<template>
    <div class="mine">
        <div class="mine-body">
            <div class="mine-info">
                <div class="mine-info-icon">
                    <i class="iconfont icon-chilun"></i>
                </div>
                <div class="mine-info-main">
                    <div class="mine-info-main-head">
                        <div>
                            <img src="https://m.juooo.com/static/img/logo-user.8413cbf.png" alt="">
                        </div>
                        <span class="mine-info-main-head-login">登录/注册</span>
                        <span class="mine-info-main-head-uid">请点击登录<i class="iconfont icon-qianjin"></i></span>
                    </div>
                    <div class="mine-info-main-lable">
                        <p>普通会员</p>
                    </div>
                    <div class="mine-info-main-cnt">
                        <div>
                            <p class="mine-info-main-cnt-top">0</p>
                            <p>账户余额</p>
                        </div>
                        <div>
                            <p class="mine-info-main-cnt-top">0</p>
                            <p>积分</p>
                        </div>
                        <div>
                            <p class="mine-info-main-cnt-top">0</p>
                            <p>优惠券</p>
                        </div>
                        <a href="#">
                            <p class="mine-info-main-cnt-top">立即开通</p>
                            <p>橙PLUS卡</p>
                        </a>
                    </div>
                </div>
            </div>
            <a href="#" class="mine-vip">
                <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt="">
            </a>
            <div class="mine-setting">
                <ul>
                    <li v-for="item in topli" :key="item.title">{{item.title}}</li>
                </ul>
                <ul>
                    <li v-for="bba in bottomli" :key="bba.title">{{bba.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    mounted(){
        Axios.get('https://api.juooo.com/user/account/getMenuItem?version=6.1.1&referer=2').then(res=>{
            // console.log(res.data.data,7777)
            this.datalist=res.data.data
            this.topli=res.data.data.splice(0,3)
            this.bottomli=res.data.data.splice(-4)
            console.log(this.topli,22222,this.bottomli,3333333)
        })
    },
    data(){
        return{
            datalist:[],
            topli:[],
            bottomli:[]
        }
    }
}
</script>
<style lang="scss" scoped>
.mine{
    height: 100%;
    background-color: #F5F5F5;
    box-sizing: border-box;
    .mine-body{
        padding-bottom: 0.66rem;
        .mine-info{
            height: 2.31rem;
            // width: 100%;
             background: url('https://m.juooo.com/static/img/personal_bg_1.f5fc96c.png') no-repeat top center;
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            background-size: 100%;
            .mine-info-icon{
                position: absolute;
                right: 0.16rem;
                top: 0.16rem;
                font-size: 0.20rem;
                color: #fefefe;
                padding-right: 0.055rem;
                // background: green;
            }
            .mine-info-main{
                background: #fff;
                margin: 0.63rem 0.16rem 0 0.16rem;
                position: relative;
                .mine-info-main-head{
                    padding: 0 0.16rem;
                    position: relative;
                    div{
                        border: 1px solid #ebebeb;
                        display: inline-block;
                        width: 0.64rem;
                        height: 0.64rem;
                        border-radius: 50%;
                        margin-top: -0.13rem;
                        margin-right: 0.11rem;
                        background: #f5f5f5;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                            border: none;
                            vertical-align: middle;
                            box-sizing: border-box;
                        }
                    }
                    .mine-info-main-head-login{
                        position: absolute;
                        color: #232323;
                        font-size: 0.165rem;
                        font-weight: bold;
                        top: 0.099rem;
                    }
                    .mine-info-main-head-uid{
                        position: absolute;
                        color: #999999;
                        font-size: 0.13rem;
                        bottom: 0;
                        i{
                            font-size: 0.12rem;
                            vertical-align: middle;
                        }
                    }
                }
                .mine-info-main-lable{
                    margin-top: -0.03rem;
                    overflow: hidden;
                    p{
                        float: right;
                        font-size: 0.15rem;
                        font-weight: bold;
                        padding: 0.03rem 0.11rem 0.03rem 0.16rem;
                        border-radius: 0.14rem 0 0 0.14rem;
                        background: #f5f5f5;
                        color: #b3b3b3;
                    }
                }
                .mine-info-main-cnt{
                    display: flex;
                    align-items: center;
                    div{
                         flex: 1;
                        text-align: center;
                        position: relative;
                        padding: 0.16rem 0 0.21rem;
                        color: #666666;
                        font-weight: 500;
                        font-size: 0.13rem;
                        .mine-info-main-cnt-top{
                            color: #232323;;
                            font-size: 0.22rem;
                            margin-bottom: 0.08rem;
                        }
                    }
                    a{
                        text-decoration: none;
                        outline: none;
                        flex: 1;
                        text-align: center;
                        position: relative;
                        padding: 0.16rem 0 0.21rem;
                        color: #666666;
                        font-weight: 500;
                        font-size: 0.13rem;
                        .mine-info-main-cnt-top{
                            color: #232323;
                            font-size: 0.14rem;
                            margin-bottom: 0.08rem;
                        }
                    }
                }
            }
        }
    }
    .mine-vip{
        display: block;
        padding: 0 0.02rem;
        img{
            display: block;
            max-width: 100%;
            margin: 0 auto;
        }
    }
    .mine-setting{
        padding: 0 0.16rem;
        // background: green;
        ul{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 0.13rem;
            background: #ffffff;
            list-style: none;
            li{
                width: 25%;
                text-align: center;
                padding: 0.18rem 0 0.22rem;
                font-size: 0.13rem;
                color: #666666;
            }
        }
    }
}
</style>