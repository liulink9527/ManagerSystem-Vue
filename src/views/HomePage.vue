<template>
    <div>
        <el-row style="margin-bottom: 40px">
            <h1>欢迎使用Link的后台系统</h1>
        </el-row>
        <el-row :gutter="10" style="margin-bottom: 40px">
            <el-col :span="6">
                <el-card body-style="background-color: #409eff">
                    <div style="color: white">
                        <i class="el-icon-user-solid"></i>
                        用户总数
                    </div>
                    <div style="padding: 10px 0; text-align: center; font-weight: bold">{{ userTotal }}</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card body-style="background-color: #67C23A">
                    <div style="color: white">
                        <i class="el-icon-s-goods"></i>
                        销售总数
                    </div>
                    <div style="padding: 10px 0; text-align: center; font-weight: bold">{{ userTotal }}</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card body-style="background-color: #E6A23C">
                    <div style="color: white">
                        <i class="el-icon-data-analysis"></i>
                        收益总量
                    </div>
                    <div style="padding: 10px 0; text-align: center; font-weight: bold">$1000</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card body-style="background-color: #F56C6C">
                    <div style="color: white">
                        <i class="el-icon-s-home"></i>
                        门店总数
                    </div>
                    <div style="padding: 10px 0; text-align: center; font-weight: bold">1</div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div id="main" style="width: 500px; height: 400px"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name: "HomePage",
    data() {
        return {
            userTotal: 0,
        };
    },
    created() {
        this.load();
    },
    methods: {
        load() {
            this.request.get("/echarts/user").then(res => {
                console.log(res);
                this.userTotal = res.data.length;
            });
        },
    },
    mounted() {
        var option = {
            title: {
                text: "各季度会员数量统计",
                left: "center",
            },
            xAxis: {
                type: "category",
                data: ["第一季度", "第二季度", "第三季度", "第四季度"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [],
                    type: "line",
                },
                {
                    data: [],
                    type: "bar",
                },
            ],
        };

        var chartDom = document.getElementById("main");
        var myChart = echarts.init(chartDom);

        this.request.get("/echarts").then(res => {
            option.series[0].data = res.data;
            option.series[1].data = res.data;

            //请求完数据再set
            option && myChart.setOption(option);
        });
    },
};
</script>

<style></style>
