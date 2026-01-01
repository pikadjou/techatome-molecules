# @ta/charts

Chart.js-based charting components for Angular applications. Build beautiful, interactive data visualizations with minimal configuration.

## Installation

```bash
npm install @ta/charts
# or
yarn add @ta/charts
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "@angular/common": "^18.2.13",
  "@angular/core": "^18.2.13"
}
```

The package includes Chart.js v4.4.6 as a direct dependency.

## Import

All chart components are standalone and can be imported directly:

```typescript
import {
  TaChartBarComponent,
  TaChartLineComponent,
  TaChartPieComponent,
  TaChartDoughnutComponent,
  TaChartMixedComponent
} from '@ta/charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaChartBarComponent, TaChartLineComponent],
  template: `...`
})
export class DashboardComponent {}
```

## Components

All chart components extend the `BaseChartComponent` and share common inputs for configuration.

### Common Inputs

All chart components support these inputs:

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `labels` | `TLabel[]` | Yes | Labels for the chart data points |
| `datasets` | `ChartDataset[]` | Yes | Array of datasets to display |
| `chartOptions` | `ChartConfiguration['options']` | No | Chart.js configuration options |
| `chartHeight` | `number` | No | Custom height for the chart canvas |

### TaChartBarComponent

Create vertical or horizontal bar charts.

**Selector:** `ta-bar-chart`

**Usage:**

```typescript
import { Component } from '@angular/core';
import { TaChartBarComponent } from '@ta/charts';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [TaChartBarComponent],
  template: `
    <ta-bar-chart
      [labels]="labels"
      [datasets]="datasets"
      [chartOptions]="options">
    </ta-bar-chart>
  `
})
export class SalesChartComponent {
  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  datasets: ChartDataset[] = [
    {
      label: 'Sales 2024',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: '#3c54e4',
      borderColor: '#172aa5',
      borderWidth: 1
    },
    {
      label: 'Sales 2023',
      data: [28, 48, 40, 19, 86, 27],
      backgroundColor: '#98a6ff',
      borderColor: '#6b7cea',
      borderWidth: 1
    }
  ];

  options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Sales Comparison'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
```

### TaChartLineComponent

Create line and area charts for trend visualization.

**Selector:** `ta-line-chart`

**Usage:**

```typescript
import { Component } from '@angular/core';
import { TaChartLineComponent, ChartColors } from '@ta/charts';

@Component({
  selector: 'app-trend-chart',
  standalone: true,
  imports: [TaChartLineComponent],
  template: `
    <ta-line-chart
      [labels]="labels"
      [datasets]="datasets"
      [chartOptions]="options">
    </ta-line-chart>
  `
})
export class TrendChartComponent {
  labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  datasets = [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 25000],
      borderColor: ChartColors.blue700,
      backgroundColor: ChartColors.blue300,
      fill: true,
      tension: 0.4 // Smooth curves
    }
  ];

  options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      }
    }
  };
}
```

### TaChartPieComponent

Create pie charts for proportional data display.

**Selector:** `ta-pie-chart`

**Additional Inputs:**
| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `radius` | `number` | No | Custom radius for the pie chart |

**Usage:**

```typescript
import { Component } from '@angular/core';
import { TaChartPieComponent, ChartColors } from '@ta/charts';

@Component({
  selector: 'app-distribution-chart',
  standalone: true,
  imports: [TaChartPieComponent],
  template: `
    <ta-pie-chart
      [labels]="labels"
      [datasets]="datasets"
      [radius]="150">
    </ta-pie-chart>
  `
})
export class DistributionChartComponent {
  labels = ['Desktop', 'Mobile', 'Tablet'];

  datasets = [
    {
      label: 'Traffic Sources',
      data: [55, 35, 10],
      backgroundColor: [
        ChartColors.blue700,
        ChartColors.blue500,
        ChartColors.blue300
      ],
      borderWidth: 2,
      borderColor: ChartColors.white
    }
  ];
}
```

### TaChartDoughnutComponent

Create doughnut charts (pie charts with a hollow center).

**Selector:** `ta-doughnut-chart`

**Usage:**

```typescript
import { Component } from '@angular/core';
import { TaChartDoughnutComponent, ChartColors } from '@ta/charts';

@Component({
  selector: 'app-status-chart',
  standalone: true,
  imports: [TaChartDoughnutComponent],
  template: `
    <ta-doughnut-chart
      [labels]="labels"
      [datasets]="datasets"
      [chartOptions]="options">
    </ta-doughnut-chart>
  `
})
export class StatusChartComponent {
  labels = ['Completed', 'In Progress', 'Pending', 'Cancelled'];

  datasets = [
    {
      label: 'Project Status',
      data: [120, 45, 30, 5],
      backgroundColor: [
        ChartColors.success,
        ChartColors.info,
        ChartColors.warning,
        ChartColors.danger
      ],
      hoverOffset: 4
    }
  ];

  options = {
    responsive: true,
    cutout: '60%', // Size of the hollow center
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };
}
```

### TaChartMixedComponent

Create mixed/scatter charts combining multiple chart types.

**Selector:** `ta-mixed-chart`

**Usage:**

```typescript
import { Component } from '@angular/core';
import { TaChartMixedComponent, ChartColors } from '@ta/charts';

@Component({
  selector: 'app-mixed-chart',
  standalone: true,
  imports: [TaChartMixedComponent],
  template: `
    <ta-mixed-chart
      [labels]="labels"
      [datasets]="datasets">
    </ta-mixed-chart>
  `
})
export class MixedChartComponent {
  labels = ['Q1', 'Q2', 'Q3', 'Q4'];

  datasets = [
    {
      type: 'bar' as const,
      label: 'Revenue',
      data: [100, 120, 115, 134],
      backgroundColor: ChartColors.blue500
    },
    {
      type: 'line' as const,
      label: 'Profit',
      data: [20, 30, 25, 40],
      borderColor: ChartColors.success,
      backgroundColor: 'transparent'
    }
  ];
}
```

## Color Utilities

The package provides a predefined color palette for consistent chart styling.

### ChartColors

Access predefined colors for your charts:

```typescript
import { ChartColors, ChartColorKey } from '@ta/charts';

// Available colors
const colors = {
  // Blue palette
  blue900: '#1f2245',
  blue800: '#172aa5',
  blue700: '#3c54e4',
  blue600: '#6b7cea',
  blue500: '#98a6ff',
  blue400: '#cbd3ff',
  blue300: '#e5e9ff',
  blue200: '#f2f4fe',
  blue100: '#f8f9ff',
  blue50: '#ffffff',

  // Status colors
  success: '#4CAF50',
  danger: '#F44336',
  warning: '#FFC107',
  info: '#2196F3',

  // Neutral colors
  light: '#F1F1F1',
  dark: '#212121',
  white: '#FFFFFF',
  black: '#000000'
};

// Usage in component
datasets = [
  {
    data: [10, 20, 30],
    backgroundColor: [
      ChartColors.success,
      ChartColors.warning,
      ChartColors.danger
    ]
  }
];
```

### ColorPalette Type

TypeScript interface for the color palette structure:

```typescript
import { ColorPalette } from '@ta/charts';

// Create custom palette that follows the same structure
const customPalette: ColorPalette = {
  blue900: '#...',
  // ... other colors
};
```

## Advanced Configuration

### Chart.js Options

All components accept full Chart.js configuration options:

```typescript
import { ChartConfiguration } from 'chart.js';

chartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 15
      }
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      padding: 12,
      callbacks: {
        label: (context) => {
          return `${context.dataset.label}: $${context.parsed.y}`;
        }
      }
    },
    title: {
      display: true,
      text: 'Custom Chart Title',
      font: {
        size: 16,
        weight: 'bold'
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => '$' + value
      }
    }
  },
  animation: {
    duration: 1000,
    easing: 'easeInOutQuart'
  }
};
```

### Dynamic Data Updates

Charts automatically update when input data changes:

```typescript
import { Component } from '@angular/core';
import { TaChartLineComponent } from '@ta/charts';

@Component({
  selector: 'app-live-chart',
  standalone: true,
  imports: [TaChartLineComponent],
  template: `
    <ta-line-chart
      [labels]="labels"
      [datasets]="datasets">
    </ta-line-chart>
    <button (click)="addData()">Add Data Point</button>
  `
})
export class LiveChartComponent {
  labels = ['Point 1', 'Point 2', 'Point 3'];
  datasets = [{
    label: 'Live Data',
    data: [10, 20, 15]
  }];

  addData() {
    const newPoint = Math.floor(Math.random() * 100);
    this.labels = [...this.labels, `Point ${this.labels.length + 1}`];
    this.datasets = [{
      ...this.datasets[0],
      data: [...this.datasets[0].data, newPoint]
    }];
  }
}
```

### Custom Height

Set a specific height for the chart canvas:

```typescript
<ta-bar-chart
  [labels]="labels"
  [datasets]="datasets"
  [chartHeight]="400">
</ta-bar-chart>
```

## Complete Example

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TaChartBarComponent,
  TaChartLineComponent,
  TaChartPieComponent,
  TaChartDoughnutComponent,
  ChartColors
} from '@ta/charts';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-analytics-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TaChartBarComponent,
    TaChartLineComponent,
    TaChartPieComponent,
    TaChartDoughnutComponent
  ],
  template: `
    <div class="dashboard-grid">
      <div class="chart-card">
        <h3>Monthly Revenue</h3>
        <ta-bar-chart
          [labels]="monthLabels"
          [datasets]="revenueDatasets"
          [chartHeight]="300">
        </ta-bar-chart>
      </div>

      <div class="chart-card">
        <h3>Growth Trend</h3>
        <ta-line-chart
          [labels]="monthLabels"
          [datasets]="trendDatasets"
          [chartHeight]="300">
        </ta-line-chart>
      </div>

      <div class="chart-card">
        <h3>User Distribution</h3>
        <ta-pie-chart
          [labels]="userLabels"
          [datasets]="userDatasets">
        </ta-pie-chart>
      </div>

      <div class="chart-card">
        <h3>Task Status</h3>
        <ta-doughnut-chart
          [labels]="statusLabels"
          [datasets]="statusDatasets">
        </ta-doughnut-chart>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      padding: 2rem;
    }

    .chart-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h3 {
      margin: 0 0 1rem 0;
      color: #333;
    }
  `]
})
export class AnalyticsDashboardComponent {
  monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  revenueDatasets: ChartDataset[] = [{
    label: 'Revenue',
    data: [65000, 59000, 80000, 81000, 56000, 95000],
    backgroundColor: ChartColors.blue700,
    borderColor: ChartColors.blue800,
    borderWidth: 1
  }];

  trendDatasets: ChartDataset[] = [{
    label: 'Users',
    data: [1200, 1900, 1500, 2500, 2200, 3000],
    borderColor: ChartColors.success,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    fill: true,
    tension: 0.4
  }];

  userLabels = ['Free', 'Basic', 'Premium'];
  userDatasets: ChartDataset[] = [{
    label: 'Users',
    data: [300, 150, 50],
    backgroundColor: [
      ChartColors.blue500,
      ChartColors.blue600,
      ChartColors.blue700
    ]
  }];

  statusLabels = ['Complete', 'In Progress', 'Pending'];
  statusDatasets: ChartDataset[] = [{
    label: 'Tasks',
    data: [45, 25, 15],
    backgroundColor: [
      ChartColors.success,
      ChartColors.warning,
      ChartColors.info
    ],
    hoverOffset: 4
  }];
}
```

## Chart.js Documentation

For detailed Chart.js configuration options and features, refer to the official Chart.js documentation:
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Chart Types](https://www.chartjs.org/docs/latest/charts/)
- [Configuration](https://www.chartjs.org/docs/latest/configuration/)

## Dependencies

- `chart.js` v4.4.6 - Core charting library
- `@angular/common` - Angular common module
- `@angular/core` - Angular core module

## License

MIT
