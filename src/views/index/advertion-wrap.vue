<template>
    <div>
        <div class="lable-item">
            <div v-for="item in datalist" :key="item.id">
                <img :src="item.pic" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            datalist:[],
            citycode:null
        }
    },
    mounted(){
        this.citycode=localStorage.getItem("city_id")?localStorage.getItem("city_id"):0
        Axios.get(`https://api.juooo.com/home/index/getClassifyHome?city_id=${this.citycode}&abbreviation=&version=6.1.1&referer=2`).then(res=>{
            // console.log(res.data.data.classify_list,222222)
            this.datalist=res.data.data.classify_list
        })
    }
}
</script>
<style lang="scss" scoped>
.lable-item{
    display: flex;
    margin-bottom: 0.15rem;
    flex-wrap: wrap;
    div{
        width: 20%;
        margin-bottom: 0.11rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 0.4rem;
            height: 0.4rem;
            border: none;
            vertical-align: middle;
        }
        span{
            font-size: 0.13rem;
            color: #666;
            margin-top: 0.08rem;
        }
    }
}
</style>