import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MediaChart({ data }) {
  // Only render if data is valid
  if (!data || !data.datasets || data.datasets.length === 0) {
    return null;
  }
}

export default MediaChart;
