<template>
    <div class="recommended">
        <h3>为你推荐</h3>
        <div class="show-module">
            <div class="show-module-main" v-infinite-scroll="myLoadMore"
      infinite-scroll-distance="100"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check	="false">
                <waterfall :col="col" :data="datalist">
                <div class="show-module-item" v-for="item in datalist" :key="item.schedular_id">
                    <div class="top">
                        <img :src="item.pic" alt="">
                        <span>{{item.city_name}}</span>
                    </div>
                    <div class="bottom">
                        <div class="bottom-top">
                            <!-- {{item.method_icon?<div>
                                <img :src="item.method_icon" alt="">
                            </div>:null}} -->
                            <div>
                                <img :src="item.method_icon" alt="">
                            </div>
                            <h3 class="cell-info">{{item.name}}站</h3>
                        </div>
                        <p class="day">
                            <span>{{item.start_show_time.split(' ')[0]}} - {{item.end_show_time.split(' ')[0].split('.')[1]}}.{{item.end_show_time.split(' ')[0].split('.')[2]}}  </span>
                        </p>
                        <p class="prices">
                            <span class="a">￥{{item.min_price}}</span>
                            <span class="b">起</span>
                        </p>
                        <p class="support" >
                            <span v-for="(items,index) in item.support_desc" :key="index">{{items}}</span>
                        </p>
                    </div>
                </div>
                </waterfall>
            </div>
        </div>
    </div>
</template>
<script>
// import vueWaterfallEasy from 'vue-waterfall-easy'
import Axios from 'axios'
export default {
  data(){
      return{
          datalist:[],
          current:1,
          col:2,
          loading:false,
          citycode:null
      }
  },
  mounted(){
        this.citycode=localStorage.getItem("city_id")?localStorage.getItem("city_id"):0
          Axios.get(`https://api.juooo.com/Show/Search/getShowList?city_id=${this.citycode}&category=&keywords=&venue_id=&start_time=&page=1&referer_type=index&version=6.1.1&referer=2`).then(res=>{
              console.log(res.data.data.list,777777)
              this.datalist = res.data.data.list
          })
  },
  methods:{
      myLoadMore(){
          this.current++
          this.loading = true;
          Axios.get(`https://api.juooo.com/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${this.current}&referer_type=index&version=6.1.1&referer=2`).then(res=>{
              console.log(this.datalist,777777)
              this.datalist = [...this.datalist,...res.data.data.list]
            //   group++
              this.loading = false;
          })
      }
  }
}
</script>
<style lang="scss" scoped>
.recommended{
    width: 100%;
    margin-bottom: 0.49rem;
    h3{
        padding: 0.1rem 0.15rem 0.05rem 0.15rem;
        font-weight: 700;
        font-size: 0.18rem;
        line-height: 0.229rem;
        height: 0.229rem;
        color: #232323;
    }
    .show-module{
        width: 100%;
        padding: 0 0.15rem;
        box-sizing: border-box;
        // background: green;
        .show-module-main{
            width: 100%;
            .show-module-item{
                width: 1.695rem;
                border-radius: 0.06rem;
                border: 1px solid #ebebeb;
                background: #fefefe;
                overflow: hidden;
                margin-right: 0.05rem;
                .top{
                    width: 100%;
                    height: 2.31rem;
                    position: relative;
                    img{
                        border: none;
                        // border-color: transparent;
                        vertical-align: middle;
                        width: 100%;
                        height: 100%;
                    }
                    span{
                        position: absolute;
                        right: 0.075rem;
                        top: 0.075rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 0.18rem;
                        padding: 0 0.045rem;
                        border-radius: 0.01rem;
                        color: #fefefe;
                        font-size: 0.12rem;
                        background: linear-gradient(-45deg, rgba(38,38,38,0.8), rgba(70,68,65,0.8));
                    }
                }
                .bottom{
                    padding: 0.08rem 0.11rem 0.11rem 0.11rem;
                    .bottom-top{
                        position: relative;
                        // background: pink;
                        height: 0.38rem;
                        div{
                            position: absolute;
                            left: 0;
                            top: -0.03rem;
                            width: 0.33rem;
                            height: 0.16rem;
                            img{
                                border: none;
                                // border-color: transparent;
                                vertical-align: middle;
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .cell-info{
                            height: 100%;
                            text-indent: 0.375rem;
                            color: #232323;
                            font-weight: normal;
                            font-size: 0.139rem;
                            line-height: 0.199rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: break-all;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            padding: 0;
                        }
                    }
                    .day{
                        margin-top: 0.04rem;
                        font-size: 0.13rem;
                        color: #666;
                        line-height: 0.199rem;
                    }
                    .prices{
                        margin-top: 0.04rem;
                        .a{
                            color: #ff6743;
                            font-size: 0.16rem;
                            margin-right: 0.05rem;
                        }
                        .b{
                            color: #999;
                            font-size: 0.12rem;
                        }
                    }
                    .support{
                        margin-top: 0.05rem;
                        overflow: hidden;
                        // width: 1.47rem;
                        // height: 0.45rem;
                        span{
                            display: inline-block;
                            padding: 1px 0.05rem;
                            background: #fff1ef;
                            border-radius: 0.08rem;
                            color: #FF6743;
                            font-size: 0.12rem;
                            margin-right: 0.05rem;
                            margin-bottom: 0.05rem;
                        }
                    }
                }
            }
        }
    }
}
</style>