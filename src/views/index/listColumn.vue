<template>
    <div class="column">
        <swiper :options="{
                loop:false,
                pagination:{
                    
                },
                freeMode: false,
                autoplay:false,
                slidesPerView: 4,
                spaceBetween: 0
                }" swipername="column" class="column" :key="this.datalist.length">
            <div class="swiper-slide co" v-for="item in datalist" :key="item.sche_id" @click="detailclick(item.sche_id)">
                <div>
                    <img :src="item.pic" alt="">
                </div>
                <h3>{{item.schedular_name}}</h3>
                <p>
                    <strong>￥{{item.low_price}}</strong>
                    <span>起</span>
                </p>
            </div>
        </swiper>
    </div>
</template>
<script>
import swiper from '@/components/swiper'
export default {
    data(){
        return{
            datalist:[]
        }
    },
    props:['columninfo'],
    mounted(){
        // console.log(this.columninfo,99999)
        this.datalist=this.columninfo.list.splice(1)
        // console.log(this.datalist,8888)
    },
    components:{
        swiper
    },
    methods:{
        detailclick(id){
            this.$router.push({ name: 'detail', params: { myid: id } })
        }
    }
}
</script>
<style lang="scss" scoped>
.column{
    padding: 0.075rem 0 0 0.075rem;
    .co{
        width: 1.07rem !important;
        margin-right: 0.08rem;
        div{
            width: 1.06rem;
            height: 1.45rem;
            border-radius: 0.04rem;
            border: 1px solid #ebebeb;
            position: relative;
            overflow: hidden;
            img{
                border: none;
                // border-color: transparent;
                vertical-align: middle;
                width: 100%;
                height: 100%;
            }
        }
        h3{
            width: 100%;
            line-height: 0.21rem;
            font-size: 0.139rem;
            color: #232323;
            margin-top: 0.12rem;
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
            color: #999;
            height: 0.199rem;
            display: flex;
            strong{
                font-size: 0.16rem;
                color: #ff6743;
                font-weight: normal;
                margin-right: 0.04rem;
            }
            span{

            }
        }
    }
}
</style>