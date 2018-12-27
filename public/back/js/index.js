;$(function(){
 // 基于准备好的dom，初始化echarts实例
 var myChart1 = echarts.init(document.querySelector(".echarts_1"));
 var myChart2 = echarts.init(document.querySelector(".echarts_2"));

 // 指定图表的配置项和数据
 var option1 = {
     title: {
         text: '2018年注册人数'
     },
     tooltip: {},
     legend: {
         data:['人数']
     },
     xAxis: {
         data: ["1月","2月","3月","4月","5月","6月"]
     },
     yAxis: {},
     series: [{
         name: '人数',
         type: 'bar',
         data: [2000, 3000, 3600, 1000, 2560, 2000]
     }]
 };
 option2 = {
    title : {
        text: '人们品牌销售',
        subtext: '真实数据',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['耐克','耐克','阿迪王','李宁','新百伦']
    },
    series : [
        {
            name: '真实数据',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},
                {value:310, name:'耐克'},
                {value:234, name:'阿迪王'},
                {value:1350, name:'李宁'},
                {value:154, name:'新百伦'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
 // 使用刚指定的配置项和数据显示图表。
 myChart1.setOption(option1);
 myChart2.setOption(option2);



});