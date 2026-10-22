Use `Card` for every panel. `accent` is the workhorse on slides; `dark` is the contrast panel; `draft` holds figures that are not yet confirmed.

```jsx
<Card variant="accent" index="01" title="Funding">
  A batch scholarship to join, plus follow-on capital.
</Card>
```

Top-accent cards keep a square mint edge (`border-radius: 0 0 14px 14px`). Never add a shadow; step from white to `--surface-card` to `--green-tint` to navy instead.
