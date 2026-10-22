Use `DataTable` for small comparison tables; anything larger belongs in a chart.

```jsx
<DataTable columns={["Metric", "Batch 1", "Batch 2"]} rows={[["Applications", "412", "6'000"]]} />
```

Numbers of four digits and up take an apostrophe separator. Mark a highlight cell by wrapping it in a span coloured `--green-label`.
