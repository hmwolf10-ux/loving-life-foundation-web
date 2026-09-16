The foundation's button — five variants covering CTAs, secondary actions, and disabled state.

```jsx
<Button variant="donate" onClick={handleDonate}>Donate</Button>
<Button variant="ghost" onClick={handleBack}>Secondary</Button>
```

Variants: `primary` (navy fill, main actions), `accent` (orange fill), `donate` (condensed uppercase orange — reserve for donation/registration CTAs), `ghost` (outlined navy), `link` (underlined text button). Pass `disabled` for the closed/unavailable state (stone neutrals, no hover).
