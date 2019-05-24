// pages/cateDetaile/cateDetaile.js
const app = getApp();
const data = require('../../JSON/detaileJson.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:'',
        height:'',
        nvabarData: {
            showCapsule: 1,
            title: '',
        },
        detaileObj:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        that.setData({
            id: options.id,
            height: app.globalData.height,
        })
        that.loadList()
    },
    loadList() {
        let that = this
        that.setData({
            detaileObj: data.json.content.recipe,
            "nvabarData.title": data.json.content.recipe.name
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})