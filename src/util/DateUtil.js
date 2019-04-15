'use strict';

// 日期工具
class DateUtil {

  const Component {
    year:     "year",
    month:    "month",
    day:      "day",
    hour:     "hour",
    minute:   "minute",
    second:   "second",
    weekday:  "weekday"
  }

  /**
  * 改变日期(原日期不会被改变，只是返回新的日期)
  *
  *   let date = Date() // "2019-03-14 07:00:00"
  *   let date2 = DateUtil.changing(date,Component.hour,15) // "2019-03-14 15:00:00"
  *   let date3 = DateUtil.changing(date,Component.month,4) // "2019-04-14 07:00:00"
  *
  * @param {date} 日期
  * @param {component} Component类型
  * @param {value}  Int类型。Component的新值.
  * @return {Date} 改变后的日期
  */
  static changing(date, component, value) {

  }

  /**
  * 增加日期(原日期不会被改变，只是返回新的日期)
  *
  *   let date = Date() // "2019-03-14 07:00:00"
  *   let date2 = adding(date,Component.hour,1) // "2019-03-14 08:00:00"
  *   let date3 = adding(date,Component.month,4) // "2019-07-14 07:00:00"
  *
  * @param {date} 日期
  * @param {component} Component类型
  * @param {value}  Int类型。Component的新值.
  * @return {Date} 改变后的日期
  */
  static adding(date, component, value) {

  }

  /**
  *   判断时间是否在Component类型内
  *
  *   let mDate = Date() // "2019-03-14 09:00:00"
  *   let date2 // "2019-03-15 09:50:00"
  *   isWithin({date2,Component.month},mDate) //mDate是否在“2019年3月”，答案是 true.
  *   isWithin({date2,Component.hour},mDate) // mDate是否在“2019年3月15日09时”，答案是 false.
  *
  * @param {date} 日期
  * @param {component} Component类型
  * @param {value}  Int类型。Component的值.
  * @return {time} 用于判断的时间.Date类型.
  */
  static isWithin({date,component,value}, time) {

  }

}
