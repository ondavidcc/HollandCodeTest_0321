import getUserResult from "./getUserResult.js";

(async () => {
  // 計算分數
  let userResult = await getUserResult();

  // 雷達圖資料和設定
  let radarChartData = {
    labels: ['R（實用型）', 'I（研究型）', 'A（藝術型）', 'S（社會型）', 'E（企業型）', 'C（規律型）'],
    datasets: [{
        label: '您的各向度分數',
        data: userResult.score,
        backgroundColor: 'rgba(248, 171, 135, 0.2)',
        borderColor: 'rgba(248, 171, 135, 1)',
        borderWidth: 2,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
    }],
  };

  let options = {
    maintainAspectRatio: false,
    scale: {
      ticks: {
        stepSize: 3,
      },
      r: {
        max: 18,
        min: 0,
      }
    }
  }

  // 獲取雷達圖的容器
  const radarChartContainer = document.getElementById('radarChartCanvas');
  
  // 創建雷達圖
  const radarChart = new Chart(radarChartContainer, {
    type: 'radar',
    data: radarChartData,
    options: options
  });
})();