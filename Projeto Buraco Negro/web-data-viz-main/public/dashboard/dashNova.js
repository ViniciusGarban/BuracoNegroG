const ctx = document.getElementById('graficoComparacao');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Massa', 'Gravidade', 'Rotação', 'Tamanho'],
    datasets: [
      {
        label: 'Terra',
        data: [1, 1, 1, 1],
        backgroundColor: '#3b82f6'
      },
      {
        label: 'Buraco negro',
        data: [10, 100, 99, 60],
        backgroundColor: '#dab9ff'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#e5e2e1'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#e5e2e1'
        }
      },
      y: {
        ticks: {
          color: '#e5e2e1'
        }
      }
    }
  }
});
