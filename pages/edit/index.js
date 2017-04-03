import {formatNumber} from '../../utils/util'
import {API} from '../../utils/constants'

const now = new Date()
const year = formatNumber(now.getFullYear())
const month = formatNumber(now.getMonth() + 1)
const day = formatNumber(now.getDate())
const hour = formatNumber(now.getHours())
const minute = formatNumber(now.getMinutes())

const app = getApp()

Page({
    data: {
        year,
        month,
        day,
        hour,
        minute,
    },
    onLoad() {
    },
    bindDateChange(e) {
        const value = e.detail.value
        const [year, month, day] = value.split('-')
        this.setData({
            year,
            month,
            day,
        })
    },
    bindTimeChange(e) {
        const value = e.detail.value
        const [hour, minute] = value.split('-')
        this.setData({
            hour,
            minute,
        })
    },
    formSubmit(e) {
        const value = e.detail.value
        const {title, location} = value
        const {year, month, day, hour, minute} = this.data

        const time = +new Date(+year, month - 1, +day, +hour, +minute)

        wx.request({
            url: `${API}/parties`,
            data: {
                title,
                location,
                time,
                player: app.globalData.userInfo,
                userId: app.globalData.userId,
            },
            method: 'POST',
            success(res) {
                if (res.data && res.data.ret === 0) {
                    wx.redirectTo({
                        url: '../index/index',
                    })
                }
            }
        })
    },
})