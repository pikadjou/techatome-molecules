# @ta/charts

**Purpose:** Chart.js-based charting components for data visualization

## Exports

### Components
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| BarChartComponent | `ta-bar-chart` | Vertical/horizontal bar charts | data, labels, options |
| LineChartComponent | `ta-line-chart` | Line and area charts | data, labels, options |
| DoughnutChartComponent | `ta-doughnut-chart` | Doughnut charts | data, labels, options |
| PieChartComponent | `ta-pie-chart` | Pie charts | data, labels, options |
| MixedChartComponent | `ta-mixed-chart` | Combined chart types | datasets, labels, options |
| BaseChartComponent | `ta-base-chart` | Base chart with shared functionality | type, data, options |

### Utilities
| Function | Purpose |
|----------|---------|
| ChartColor | Color configuration for charts |

## Usage Example
```typescript
import { BarChartComponent } from '@ta/charts';

@Component({
  template: `
    <ta-bar-chart
      [data]="chartData"
      [labels]="chartLabels"
      [options]="chartOptions">
    </ta-bar-chart>
  `
})
export class MyComponent {
  chartData = [65, 59, 80, 81, 56];
  chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  chartOptions = { responsive: true };
}
```

## Dependencies
- chart.js (v4.x)
- @angular/common
