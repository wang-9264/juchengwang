<template>
    <div>
        <header>
        <div class="left">
            <i></i>    
            <span>全国</span>
        </div>    
        <div class="center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC" alt="">    
            <span>搜索热门演出</span>
        </div>    
        <div class="right">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAV1BMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMiFyKOAAAAHHRSTlMAwLCQ8XftzEURZffhq0IiujHF+bWZiFV/UA/dAxNAxgAAAS1JREFUOMu9kdtyhCAQRJHIVRBF3exu+v+/MyBamsQdKnnIebCnylMF07C/wLuenek7/l15cNe2LdC1ZzogfR1/7NpzAM3wLGIDwMUmhWvOOKBpokOK1bOA1HmYf9xxzqElYPMQgZ5R9EDM2cGl7/h2zZj+OXRZLFfguIaXJQ6x9/wK338VCf5RDMsHoISpie8SK3KkxZA8ofUCKFoUydtSk+IArGkAURPLGkWsHz3WjjaymB6qVg8AZS1Vz2FmxlrhAvASwGCqPY7MCFkrPGxLG1Wp5waEvXBFiQNwTJTogVAmRYsW8Oug00BurXLdWgtZfUKFgrQX9UR2wvpc4i2wg1jEFpLRSLQ5ZsCSngXmbcFJmJeaEdO+2IIay/5wEyimG9sJd968gt8D+w2fxdEtXiJn+tgAAAAASUVORK5CYII=" alt="">    
        </div>    
        </header>
        <div class="info">
        <swiper :options="{
            loop:true,
            pagination:{
                el: '.swiper-pagination'
            },
            freeMode: false,
            autoplay:true
            }" swipername="horizontal" class="horizontal" :key="this.datalist.length">
            <div class="swiper-slide" v-for="item in datalist" :key="item.image_url">
                <img :src="item.image_url" alt="">
            </div>
        </swiper>
        <div class="aa">
            <advertion></advertion>
            <vipahead></vipahead>
            <div class="guanggao">
                <img src="https://image.juooo.com/group1/M00/04/37/rAoKNV4hVv2AbMjhAAGqJGUDCcM634.png" alt="">
            </div>
            <hotwrap></hotwrap>
        </div>
        <category></category>
        </div>
    </div>
</template>
<script>
import swiper from '@/components/swiper'
import Axios from 'axios'
import advertion from './advertion-wrap.vue'
import vipahead from './vip.vue'
import hotwrap from './hotwrap'
import category from './category'
export default {
    data(){
        return{
            datalist:[]
        }
    },
    components:{
        swiper,
        advertion,
        vipahead,
        hotwrap,
        category
    },
    mounted(){
        Axios.get('https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2').then(res=>{
            console.log(res.data.data.slide_list,11111)
            this.datalist=res.data.data.slide_list
        })
    }
}
</script>
<style lang="scss" scoped>
header{
    width: 100%;
    height: 0.43rem;
    padding: 0 0.15rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fefefe;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    z-index: 10;
    .left{
        display: flex;
        height: 0.28rem;
        justify-content: center;
        align-items: center;
        i{
            font-style: normal;
            height: 0.19rem;
            width: 0.19rem;
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABOFBMVEUAAAD/YUT/fD3/fD3/YUX/bUH/fD3/jDj/fTz/YkT/bUD/dz7/jTj/YEX/ZkP/cj//ez3/aEL/fjz/izj/cz//jjf/fzv/bEH/cUD/hzn/gTv/jjj/hzr/gTv/cED/YUT/dz7/gjv/gTv/izj/YEX/cED/jTj/ej3/aUL/fjz/hjn/fjz/dj//cj//akL/b0D/ej3/iDn/ZET/gTv/jTj/eT7/Z0P/gjv/bkH/dD//Y0T/hzr/eT7/ckD/aEP/izj/eD7/bUH/fD3/hjr/dj//Z0P/YUX/dD//YEX/jTj/jjj/YkT/hTr/YEX/jTj/hTr/YkT/a0H/bkH/ZEP/iDn/fjz/iTn/gTv/cED/jDj/Z0P/cj//dz7/gzv/dT7/eT3/akL/aEP/ZkP/aUL/fD3/gDz/dD//ez1zbBWgAAAAT3RSTlMAAxEMpZcH+/r49OvrypeIbVMwKyIiCvv78+fS0cnAtK2spKOgnJiOiX5gUkdCLykc+PX09PPt6+jl3d3T0MzMw7KysaidkZGPjYd0dGlWcCOHIgAAAcNJREFUOMud0tV2AjEQBuAALdpibam3SCkudXdXWFy2uLz/G3QJySRB9oL/cs53dvY/EzRTtGHf1noutb7lDWtV2JLPUCjkcqlU6q/YNXoTU5jrw1AGV+zm88aAa5Jb2SyLrtOvXy9PWLtQxpB3ddkSH/secTlwHcXJNcvIN/WbY64/cLXejV6An+AUqLg8ddWSTVhsGC9Sx65aWuOX7zN3FnLqdM6QhbpSZp453TEU9mjJidwycRmzDuAvFPEgyDNxkuRgm6nbcHFrLohrWGF2R3/QjrjYFafARvsWRgu0cJKHSeykdvMURtQdISFmvLhZacGEXnhDhOcD1660sjA5IJfr6oWzYtesZE0wuqIHifIwOnSt7CWMnuiFH3n4QFx2F0bfcOEIcw5JGrr0F3u08BJOYnQWM0uNoUsnEGQbXoxs0+JTB1cHhbFbRCwR9qR7azt+/84qKay4tIODmm32pPGFaWHFLWoQF6dRcBniFGiKIyF2eNLYSdSlf9BIAsSRxdS9o7Hcy+CgMDQW4gYHhXfRxLyNFt5DU2ITC1vR1Myzwvh7KpIVntMgVdlog1OPtVkBp56XFjj1aIKHpldws+QfBznqO/3Ch6wAAAAASUVORK5CYII=') no-repeat center;
            background-size: cover;
        }
    }
    .center{
        height: 0.28rem;
        border: 1px solid #ebebeb;
        margin: 0 0.15rem 0 0.125rem;
        border-radius: 0.15rem;
        display: flex;
        align-items: center;
        background: #f5f5f5;
        // flex: 1;
        width: 2.37rem;
        img{
            width: 0.19rem;
            height: 0.19rem;
            margin: 0 0.05rem 0 0.11rem;
            vertical-align: middle;
        }
        span{
            font-size: 0.13rem;
            color: #b3b3b3;
        }
    }
    .right{
        display: flex;
        img{
            width: 0.19rem;
            height: 0.19rem;
        }
    }
}
.info{
    margin-bottom: 0.49rem;
.horizontal{
    width: 3.45rem;
    height: 1.39rem;
    margin-top: 0.51rem;
    border-radius: 0.06rem;
    border: 1px solid #ebebeb;
    img{
        width: 100%;
        vertical-align: middle;
    }
}
.aa{
    padding: 0.15rem 0.15rem 0;
    .guanggao{
        width: 100%;
        height: 1rem;
        border-radius: 0.499rem;
        margin-bottom: 0.16rem;
        overflow: hidden;
        img{
            vertical-align: middle;
            width: 100%;
            height: 100%;
            border: none;
        }
    }
}
}
</style>