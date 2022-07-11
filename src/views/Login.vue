<template>
    <div class="login-big">
        <!-- 登录界面 -->
        <img src="https://i-1.lanrentuku.com/2020/9/15/e1ada790-a14e-45e7-b7d4-ca971239cfc2.png">
        <h1>番茄音乐</h1>
        <!-- 账号密码 -->
        <van-form @submit="getLogin">
            <van-cell-group inset>
                <van-field
                    v-model="num"
                    name="手机号"
                    label="手机号"
                    placeholder="手机号"
                    :rules="formRules.mobile"
                />
                <van-field
                    v-model="pass"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="formRules.password"
                />
            </van-cell-group>
            <div style="margin-left:6rem;">
                <van-button round block type="primary" native-type="submit">提交</van-button>
            </div>
        </van-form>
  </div>
</template>

<script>
import axios from '@/utils/request.js';
import { Toast } from 'vant';//导入Toast组件
export default {
    name:'Login',
    data(){
        return{
            num:'',
            pass:'',
            formRules:{
                // 判断输入格式是否正确，第一位为1，第二位为1/3/5/7/8/9，之后九位为任意数字，共11位
                mobile:[{ required: true, message: '请填写手机号' },{pattern:/^1[3|5|7|8|9]\d{9}$/, message: '请填写正确的手机号'}],
                password:[{ required: true, message: '请填写密码' }]
            }
        }
    },
    methods: {
        getLogin () {
            // Toast组件效果
            Toast.loading({
                message: '登录中...',
                forbidClick: true,
                duration:0
            });
            axios({
                url: '/login/cellphone?phone='+this.num+'&password='+this.pass+'',  /*登录*/
                method: 'post'
            })
            .then(res => {
                // console.log("登录用户：", res.data)
                // 登陆成功跳转到首页，不成功提示密码错误，只能判断密码错误
                if(res.data.code==200){
                    Toast.success('登陆成功！')
                    this.$router.push('/home')
                }else if(res.data.code==502){
                    Toast.fail('密码错误')
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
    .login-big img{
        width: 10rem;
        height: 10rem;
        margin-top: 2rem;
        margin-left: 8rem;
    }

    .login-big h1{
        color: aliceblue;
        text-align: center;
    }

    .login-btn{
        margin-top: 4rem;
        margin-left: 9rem;
    }

    .login-btn button{
        width: 7rem;
        height: 2.3rem;
        color: #333;
        text-decoration: none;
        border: none;
        border-radius: 1rem;
        background-color: #FF5753;
    }
    .van-cell-group--inset {
        margin: 4rem 2rem;
        overflow: hidden;
        border-radius: 8px;
        width: 22rem;
    }
</style>