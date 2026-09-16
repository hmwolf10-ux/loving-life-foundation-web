Labeled form field for donation, registration, and contact forms. Condensed-uppercase label, navy focus ring, warm-red error state.

```jsx
<Field label="Email" value={email} onChange={e => setEmail(e.target.value)} />
<Field label="Amount" error="Please enter an amount." value="$0" />
<Field label="A note to the family" multiline placeholder="Zach believed…" />
```

Set `multiline` for a textarea. `error` overrides `help` text and switches the border/ring to the danger color.
