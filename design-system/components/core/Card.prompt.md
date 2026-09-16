Two card types: `Card` for text content (program summaries, info blocks), `PhotoCard` for photography with a caption, styled like a framed print.

```jsx
<Card eyebrow="Scholarship" title="Empowering Future Leaders">
  <p>Awarded each spring to a graduating senior from Iroquois Central.</p>
</Card>
<PhotoCard image="/assets/photos/community-event-1.jpg" caption="2024 · Elma Country Club" />
```

Never add a colored left-border to `Card` — that motif is reserved for pull-quotes only, not a general card treatment.
